const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const FF = 'C:\\Users\\Hazem\\AppData\\Local\\Microsoft\\WinGet\\Packages\\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe\\ffmpeg-8.1.1-full_build\\bin\\ffmpeg.exe';
const outDir = path.resolve(__dirname, 'gifs');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const FPS = 30;
const SCENE_BACK = 90;
const SCENE_CARD = 110;
const FLIP = 22;

// Each flip video: back(90) -> [flip(22) -> card(110)] x N -> flip(22) -> back(90)
// For card i (0-indexed), the card scene starts at: SCENE_BACK + i*(SCENE_CARD - FLIP) - FLIP/2
// We want to capture: a bit of the flip-in + full card + a bit of the flip-out

function getCardSegment(cardIndex, totalCards) {
  // Card i scene starts at frame: SCENE_BACK - FLIP + cardIndex * (SCENE_CARD - FLIP)
  // But we want the flip transition before and after
  const cardStart = SCENE_BACK - FLIP + cardIndex * (SCENE_CARD - FLIP);
  const segStart = Math.max(0, cardStart - 5); // a few frames before the flip starts
  const segEnd = cardStart + SCENE_CARD + 5; // a few frames after the card ends
  return { start: segStart / FPS, duration: (segEnd - segStart) / FPS };
}

const videos = [
  { file: 'video/out/harv-panini-english.mp4', teachers: ['milad', 'salah', 'atef', 'adel'] },
  { file: 'video/out/harv-panini-physics.mp4', teachers: ['tamer', 'samir', 'nawar', 'mogli'] },
  { file: 'video/out/harv-panini-arabic.mp4', teachers: ['reda', 'sayed'] },
  { file: 'video/out/harv-panini-languages.mp4', teachers: ['essam', 'abdelmoeez', 'nasser-lang', 'bardisi', 'elqot'] },
  { file: 'video/out/harv-panini-rest.mp4', teachers: ['haitham', 'tolba', 'shenawy', 'deif', 'sherbini', 'alisalah'] },
];

for (const v of videos) {
  const src = path.resolve(__dirname, v.file);
  if (!fs.existsSync(src)) { console.log('SKIP (not found): ' + v.file); continue; }

  for (let i = 0; i < v.teachers.length; i++) {
    const name = v.teachers[i];
    const { start, duration } = getCardSegment(i, v.teachers.length);
    const out = path.join(outDir, name + '.gif');

    // Two-pass: generate palette then use it for high-quality GIF
    const palette = path.join(outDir, '_palette.png');
    const filters = `fps=15,scale=360:-1:flags=lanczos`;

    try {
      execSync(`"${FF}" -y -ss ${start.toFixed(3)} -t ${duration.toFixed(3)} -i "${src}" -vf "${filters},palettegen=stats_mode=diff" "${palette}"`, { stdio: 'pipe' });
      execSync(`"${FF}" -y -ss ${start.toFixed(3)} -t ${duration.toFixed(3)} -i "${src}" -i "${palette}" -lavfi "${filters}[x];[x][1:v]paletteuse=dither=bayer:bayer_scale=3" "${out}"`, { stdio: 'pipe' });
      const size = (fs.statSync(out).size / 1024).toFixed(0);
      console.log(`  ${name}.gif — ${size} KB`);
    } catch (e) {
      console.log(`  ERROR: ${name} — ${e.message.split('\n')[0]}`);
    }
  }
}

// Cleanup
try { fs.unlinkSync(path.join(outDir, '_palette.png')); } catch {}
console.log('\nDone! GIFs in: ' + outDir);
