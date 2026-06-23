import { Composition } from "remotion";
import { LineupVideo } from "./LineupVideo";

const FPS = 30;

// 90 intro + (11×210 players) + 90 mgmt title + 210 dual managers + 150 closing = 2850 frames (~95s)
const TOTAL_FRAMES = 2850;

export const RemotionRoot: React.FC = () => {
  return (
    <Composition
      id="LineupVideo"
      component={LineupVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1080}
      height={1920}
    />
  );
};
