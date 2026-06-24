import { Composition } from "remotion";
import { LineupVideo } from "./LineupVideo";

const FPS = 30;

// 90 intro + (11×90 starters) + (10×45 reserves+mgmt) + 120 closing + 60 logo = 1710 frames (57s)
const TOTAL_FRAMES = 1710;

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
