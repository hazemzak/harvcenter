import { AbsoluteFill } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { flip } from "@remotion/transitions/flip";
import { AnimatedPaniniCard } from "./AnimatedPaniniCard";
import { AnimatedCardBack } from "./AnimatedCardBack";
import { TeacherData } from "./PaniniCard";
import { englishTeachers, physicsTeachers, arabicTeachers, languageTeachers, restTeachers } from "./MyComposition";

const SCENE_BACK = 90;
const SCENE_CARD = 110;
const FLIP_FRAMES = 22;

const wrap = (child: React.ReactNode) => (
  <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#0a0f1a" }}>
    {child}
  </AbsoluteFill>
);

const flipTiming = springTiming({ config: { damping: 15, stiffness: 80 }, durationInFrames: FLIP_FRAMES });

export const FlipVideo: React.FC<{ teachers: TeacherData[] }> = ({ teachers }) => (
  <AbsoluteFill style={{ background: "#0a0f1a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>

      {teachers.map((teacher, i) => (
        <>
          <TransitionSeries.Transition
            key={`t-${i}`}
            presentation={flip({ direction: "from-left" })}
            timing={flipTiming}
          />
          <TransitionSeries.Sequence key={`c-${i}`} durationInFrames={SCENE_CARD}>
            {wrap(<AnimatedPaniniCard teacher={teacher} />)}
          </TransitionSeries.Sequence>
        </>
      ))}

      <TransitionSeries.Transition
        presentation={flip({ direction: "from-left" })}
        timing={flipTiming}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

export const calcFrames = (teacherCount: number) =>
  2 * SCENE_BACK + teacherCount * SCENE_CARD - (teacherCount + 1) * FLIP_FRAMES;

export const EnglishFlip: React.FC = () => <FlipVideo teachers={englishTeachers} />;
export const PhysicsFlip: React.FC = () => <FlipVideo teachers={physicsTeachers} />;
export const ArabicFlip: React.FC = () => <FlipVideo teachers={arabicTeachers} />;
export const LanguagesFlip: React.FC = () => <FlipVideo teachers={languageTeachers} />;
export const RestFlip: React.FC = () => <FlipVideo teachers={restTeachers} />;
