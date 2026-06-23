const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const FF = 'C:\\Users\\Hazem\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe';

const mp4Dir = path.resolve(__dirname, "out", "individual");
const gifDir = path.resolve(__dirname, "..", "gifs");
if (!fs.existsSync(mp4Dir)) fs.mkdirSync(mp4Dir, { recursive: true });
if (!fs.existsSync(gifDir)) fs.mkdirSync(gifDir, { recursive: true });

const teachers = [
  "milad", "salah", "atef", "adel",
  "tamer", "samir", "nawar", "mogli",
  "reda", "sayed",
  "essam", "abdelmoeez", "nasser", "bardisi", "elqot",
  "haitham", "tolba", "shenawy", "deif", "sherbini", "alisalah",
];

console.log(`Rendering ${teachers.length} individual card videos...\n`);

for (const id of teachers) {
  const compId = `card-${id}`;
  const mp4Out = path.join(mp4Dir, `${id}.mp4`);
  const gifOut = path.join(gifDir, `${id}.gif`);

  // Step 1: Render MP4 with Remotion
  console.log(`[${id}] Rendering MP4...`);
  try {
    execSync(
      `npx remotion render ${compId} "${mp4Out}" --codec h264 --crf 18`,
      { cwd: __dirname, stdio: "pipe", timeout: 120000 }
    );
  } catch (e) {
    console.log(`  ERROR rendering ${id}: ${e.stderr?.toString().split('\n').slice(-3).join('\n') || e.message}`);
    continue;
  }

  // Step 2: Convert to high-quality GIF
  console.log(`[${id}] Converting to GIF...`);
  const palette = path.join(gifDir, "_palette.png");
  const filters = "fps=15,scale=400:-1:flags=lanczos";
  try {
    execSync(`"${FF}" -y -i "${mp4Out}" -vf "${filters},palettegen=stats_mode=diff" "${palette}"`, { stdio: "pipe" });
    execSync(`"${FF}" -y -i "${mp4Out}" -i "${palette}" -lavfi "${filters}[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3" -loop 0 "${gifOut}"`, { stdio: "pipe" });
    const size = (fs.statSync(gifOut).size / 1024).toFixed(0);
    console.log(`  ✓ ${id}.gif — ${size} KB\n`);
  } catch (e) {
    console.log(`  ERROR converting ${id}: ${e.message.split('\n')[0]}\n`);
  }
}

// Cleanup
try { fs.unlinkSync(path.join(gifDir, "_palette.png")); } catch {}
console.log("Done! Videos in: " + mp4Dir);
console.log("GIFs in: " + gifDir);
