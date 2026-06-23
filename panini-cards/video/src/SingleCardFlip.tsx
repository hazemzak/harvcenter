import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { flip } from "@remotion/transitions/flip";
import { AnimatedPaniniCard } from "./AnimatedPaniniCard";
import { AnimatedCardBack } from "./AnimatedCardBack";
import { TeacherData } from "./PaniniCard";
import {
  englishTeachers,
  physicsTeachers,
  arabicTeachers,
  languageTeachers,
  restTeachers,
} from "./MyComposition";

const SCENE_BACK_SHORT = 50;
const SCENE_CARD = 120;
const FLIP_FRAMES = 22;

const wrap = (child: React.ReactNode) => (
  <AbsoluteFill
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#0a0f1a",
    }}
  >
    {child}
  </AbsoluteFill>
);

const flipTiming = springTiming({
  config: { damping: 15, stiffness: 80 },
  durationInFrames: FLIP_FRAMES,
});

export const SingleCardFlip: React.FC<{ teacher: TeacherData }> = ({
  teacher,
}) => (
  <AbsoluteFill style={{ background: "#0a0f1a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK_SHORT}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={flip({ direction: "from-left" })}
        timing={flipTiming}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_CARD}>
        {wrap(<AnimatedPaniniCard teacher={teacher} />)}
      </TransitionSeries.Sequence>

      <TransitionSeries.Transition
        presentation={flip({ direction: "from-left" })}
        timing={flipTiming}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK_SHORT}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

export const SINGLE_CARD_FRAMES =
  2 * SCENE_BACK_SHORT + SCENE_CARD - 2 * FLIP_FRAMES;

export const allTeachers: TeacherData[] = [
  ...englishTeachers,
  ...physicsTeachers,
  ...arabicTeachers,
  ...languageTeachers,
  ...restTeachers,
];
