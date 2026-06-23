import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { wipe } from "@remotion/transitions/wipe";
import { flip } from "@remotion/transitions/flip";
import { filmBurn } from "@remotion/transitions/film-burn";
import { AnimatedPaniniCard } from "./AnimatedPaniniCard";
import { AnimatedCardBack } from "./AnimatedCardBack";
import { arabicTeachers } from "./MyComposition";

const SCENE_BACK = 90;
const SCENE_CARD = 110;

const wrap = (child: React.ReactNode) => (
  <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center", background: "#0a0f1a" }}>
    {child}
  </AbsoluteFill>
);

// ─── TRIAL A: Red Wipe ───
export const ArabicTrialWipe: React.FC = () => (
  <AbsoluteFill style={{ background: "#0a0f1a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>

      {arabicTeachers.map((teacher, i) => (
        <>
          <TransitionSeries.Transition
            key={`t-${i}`}
            presentation={wipe({ direction: "from-left" })}
            timing={linearTiming({ durationInFrames: 14 })}
          />
          <TransitionSeries.Sequence key={`c-${i}`} durationInFrames={SCENE_CARD}>
            {wrap(<AnimatedPaniniCard teacher={teacher} />)}
          </TransitionSeries.Sequence>
        </>
      ))}

      <TransitionSeries.Transition
        presentation={wipe({ direction: "from-left" })}
        timing={linearTiming({ durationInFrames: 14 })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

// ─── TRIAL B: 3D Flip ───
export const ArabicTrialFlip: React.FC = () => (
  <AbsoluteFill style={{ background: "#0a0f1a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>

      {arabicTeachers.map((teacher, i) => (
        <>
          <TransitionSeries.Transition
            key={`t-${i}`}
            presentation={flip({ direction: "from-left" })}
            timing={springTiming({ config: { damping: 15, stiffness: 80 }, durationInFrames: 22 })}
          />
          <TransitionSeries.Sequence key={`c-${i}`} durationInFrames={SCENE_CARD}>
            {wrap(<AnimatedPaniniCard teacher={teacher} />)}
          </TransitionSeries.Sequence>
        </>
      ))}

      <TransitionSeries.Transition
        presentation={flip({ direction: "from-left" })}
        timing={springTiming({ config: { damping: 15, stiffness: 80 }, durationInFrames: 22 })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);

// ─── TRIAL C: Film Burn ───
export const ArabicTrialBurn: React.FC = () => (
  <AbsoluteFill style={{ background: "#0a0f1a" }}>
    <TransitionSeries>
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>

      {arabicTeachers.map((teacher, i) => (
        <>
          <TransitionSeries.Transition
            key={`t-${i}`}
            presentation={filmBurn()}
            timing={linearTiming({ durationInFrames: 18 })}
          />
          <TransitionSeries.Sequence key={`c-${i}`} durationInFrames={SCENE_CARD}>
            {wrap(<AnimatedPaniniCard teacher={teacher} />)}
          </TransitionSeries.Sequence>
        </>
      ))}

      <TransitionSeries.Transition
        presentation={filmBurn()}
        timing={linearTiming({ durationInFrames: 18 })}
      />
      <TransitionSeries.Sequence durationInFrames={SCENE_BACK}>
        {wrap(<AnimatedCardBack />)}
      </TransitionSeries.Sequence>
    </TransitionSeries>
  </AbsoluteFill>
);
