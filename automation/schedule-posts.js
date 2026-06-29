import fetch from "node-fetch";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { CONFIG } from "./config.js";
import { SCHEDULE } from "./schedule-data.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PANINI_DIR = path.resolve(__dirname, "../panini-cards");
const API = "https://graph.facebook.com/v21.0";

const isDryRun = process.argv.includes("--dry-run");
const isStatus = process.argv.includes("--status");

function cairoToUnix(dateStr, timeStr) {
  const [y, m, d] = dateStr.split("-").map(Number);
  const [h, min] = timeStr.split(":").map(Number);
  const utcDate = new Date(Date.UTC(y, m - 1, d, h - CONFIG.CAIRO_UTC_OFFSET, min));
  return Math.floor(utcDate.getTime() / 1000);
}

function formatDate(unix) {
  return new Date(unix * 1000).toISOString().replace("T", " ").slice(0, 16) + " UTC";
}

// ──────────────────────────────────────────
// Facebook Page: Schedule a photo post
// ──────────────────────────────────────────
async function fbSchedulePhoto(filePath, caption, publishTime) {
  const form = new FormData();
  form.append("source", fs.createReadStream(filePath));
  form.append("message", caption);
  form.append("published", "false");
  form.append("scheduled_publish_time", String(publishTime));
  form.append("access_token", CONFIG.ACCESS_TOKEN);

  const res = await fetch(`${API}/${CONFIG.PAGE_ID}/photos`, {
    method: "POST",
    body: form,
  });
  return res.json();
}

// ──────────────────────────────────────────
// Facebook Page: Schedule a video post
// ──────────────────────────────────────────
async function fbScheduleVideo(filePath, caption, publishTime) {
  const form = new FormData();
  form.append("source", fs.createReadStream(filePath));
  form.append("description", caption);
  form.append("published", "false");
  form.append("scheduled_publish_time", String(publishTime));
  form.append("access_token", CONFIG.ACCESS_TOKEN);

  const res = await fetch(`${API}/${CONFIG.PAGE_ID}/videos`, {
    method: "POST",
    body: form,
  });
  return res.json();
}

// ──────────────────────────────────────────
// Instagram: Schedule an image post
// ──────────────────────────────────────────
async function igSchedulePhoto(imageUrl, caption, publishTime) {
  // Step 1: Create media container
  const createRes = await fetch(
    `${API}/${CONFIG.IG_ACCOUNT_ID}/media?` +
    new URLSearchParams({
      image_url: imageUrl,
      caption: caption,
      access_token: CONFIG.ACCESS_TOKEN,
    }),
    { method: "POST" }
  );
  const container = await createRes.json();
  if (container.error) return container;

  // Step 2: Publish (IG doesn't support scheduled_publish_time natively,
  // so we publish immediately — the script itself runs at the right time,
  // or we schedule via FB and cross-post)
  const pubRes = await fetch(
    `${API}/${CONFIG.IG_ACCOUNT_ID}/media_publish?` +
    new URLSearchParams({
      creation_id: container.id,
      access_token: CONFIG.ACCESS_TOKEN,
    }),
    { method: "POST" }
  );
  return pubRes.json();
}

// ──────────────────────────────────────────
// Instagram: Schedule a reel
// ──────────────────────────────────────────
async function igScheduleReel(videoUrl, caption, publishTime) {
  // Step 1: Create reel container with scheduled publish time
  const createRes = await fetch(
    `${API}/${CONFIG.IG_ACCOUNT_ID}/media?` +
    new URLSearchParams({
      video_url: videoUrl,
      caption: caption,
      media_type: "REELS",
      published: "false",
      scheduled_publish_time: String(publishTime),
      access_token: CONFIG.ACCESS_TOKEN,
    }),
    { method: "POST" }
  );
  const container = await createRes.json();
  if (container.error) return container;

  // Step 2: Wait for video processing
  let status = "IN_PROGRESS";
  let attempts = 0;
  while (status === "IN_PROGRESS" && attempts < 30) {
    await new Promise((r) => setTimeout(r, 5000));
    const checkRes = await fetch(
      `${API}/${container.id}?fields=status_code&access_token=${CONFIG.ACCESS_TOKEN}`
    );
    const checkData = await checkRes.json();
    status = checkData.status_code;
    attempts++;
  }

  if (status !== "FINISHED") {
    return { error: { message: `Video processing failed: ${status}` } };
  }

  // Step 3: Publish
  const pubRes = await fetch(
    `${API}/${CONFIG.IG_ACCOUNT_ID}/media_publish?` +
    new URLSearchParams({
      creation_id: container.id,
      access_token: CONFIG.ACCESS_TOKEN,
    }),
    { method: "POST" }
  );
  return pubRes.json();
}

// ──────────────────────────────────────────
// Check scheduled posts status
// ──────────────────────────────────────────
async function checkStatus() {
  console.log("\n📊 Checking scheduled posts on Facebook Page...\n");

  const res = await fetch(
    `${API}/${CONFIG.PAGE_ID}/scheduled_posts?fields=message,scheduled_publish_time&access_token=${CONFIG.ACCESS_TOKEN}`
  );
  const data = await res.json();

  if (data.error) {
    console.error("❌ Error:", data.error.message);
    return;
  }

  if (!data.data || data.data.length === 0) {
    console.log("No scheduled posts found.");
    return;
  }

  data.data.forEach((post, i) => {
    const time = new Date(post.scheduled_publish_time).toLocaleString();
    const preview = (post.message || "").slice(0, 60).replace(/\n/g, " ");
    console.log(`  ${i + 1}. [${time}] ${preview}...`);
  });
  console.log(`\n  Total: ${data.data.length} scheduled posts`);
}

// ──────────────────────────────────────────
// Main: Schedule all posts
// ──────────────────────────────────────────
async function main() {
  if (isStatus) {
    await checkStatus();
    return;
  }

  if (!CONFIG.ACCESS_TOKEN && !isDryRun) {
    console.error("❌ No access token set. Edit config.js first.");
    console.log("\nSteps:");
    console.log("  1. Go to developers.facebook.com/tools/explorer");
    console.log("  2. Generate a Page Access Token with permissions:");
    console.log("     pages_manage_posts, pages_read_engagement,");
    console.log("     instagram_basic, instagram_content_publish");
    console.log("  3. Paste it in automation/config.js");
    process.exit(1);
  }

  const now = Math.floor(Date.now() / 1000);

  console.log(`
╔══════════════════════════════════════════╗
║   HARV FC — Panini Card Post Scheduler   ║
║   ${SCHEDULE.length} posts · FB + IG                    ║
╚══════════════════════════════════════════╝
`);

  if (isDryRun) {
    console.log("🔍 DRY RUN — no posts will be created\n");
  }

  const results = { success: 0, skipped: 0, failed: 0 };

  for (const post of SCHEDULE) {
    const publishTime = cairoToUnix(post.date, post.time);
    const filePath = path.join(PANINI_DIR, post.file);
    const isPast = publishTime <= now;
    const timeLabel = `${post.date} ${post.time} Cairo`;

    if (!fs.existsSync(filePath)) {
      console.log(`  ❌ ${post.id}: file not found — ${post.file}`);
      results.failed++;
      continue;
    }

    if (isPast && !isDryRun) {
      console.log(`  ⏭️  ${post.id}: ${timeLabel} — in the past, skipping`);
      results.skipped++;
      continue;
    }

    if (isDryRun) {
      const sizeKB = Math.round(fs.statSync(filePath).size / 1024);
      console.log(`  📋 ${post.id}`);
      console.log(`     Time:    ${timeLabel} (unix: ${publishTime})`);
      console.log(`     Type:    ${post.type}`);
      console.log(`     File:    ${post.file} (${sizeKB} KB)`);
      console.log(`     Caption: ${post.caption.split("\n")[0]}...`);
      console.log();
      results.success++;
      continue;
    }

    // ── Facebook scheduling ──
    console.log(`  📤 ${post.id} → FB [${timeLabel}]`);
    let fbResult;
    if (post.type === "image") {
      fbResult = await fbSchedulePhoto(filePath, post.caption, publishTime);
    } else {
      fbResult = await fbScheduleVideo(filePath, post.caption, publishTime);
    }

    if (fbResult.error) {
      console.log(`     ❌ FB error: ${fbResult.error.message}`);
      results.failed++;
    } else {
      console.log(`     ✅ FB scheduled (id: ${fbResult.id || fbResult.post_id})`);
      results.success++;
    }

    // ── Instagram scheduling ──
    if (post.type === "video") {
      const videoUrl = `${CONFIG.VIDEO_BASE_URL}/${path.basename(post.file)}`;
      console.log(`  📤 ${post.id} → IG [${timeLabel}]`);
      const igResult = await igScheduleReel(videoUrl, post.caption, publishTime);
      if (igResult.error) {
        console.log(`     ❌ IG error: ${igResult.error.message}`);
        results.failed++;
      } else {
        console.log(`     ✅ IG scheduled (id: ${igResult.id})`);
        results.success++;
      }
    }

    // Small delay between API calls to avoid rate limits
    await new Promise((r) => setTimeout(r, 2000));
  }

  console.log(`
────────────────────────────────────────
  ✅ Scheduled: ${results.success}
  ⏭️  Skipped:   ${results.skipped}
  ❌ Failed:    ${results.failed}
────────────────────────────────────────
`);
}

main().catch(console.error);
