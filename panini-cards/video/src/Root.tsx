import { Composition } from "remotion";
import { EnglishFlip, PhysicsFlip, ArabicFlip, LanguagesFlip, RestFlip } from "./FlipVideo";
import { SingleCardFlip, SINGLE_CARD_FRAMES, allTeachers } from "./SingleCardFlip";

const FPS = 30;

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* Group videos (existing) */}
      <Composition id="EnglishCards" component={EnglishFlip} durationInFrames={510} fps={FPS} width={1080} height={1350} />
      <Composition id="PhysicsCards" component={PhysicsFlip} durationInFrames={510} fps={FPS} width={1080} height={1350} />
      <Composition id="ArabicCards" component={ArabicFlip} durationInFrames={334} fps={FPS} width={1080} height={1350} />
      <Composition id="LanguagesCards" component={LanguagesFlip} durationInFrames={598} fps={FPS} width={1080} height={1350} />
      <Composition id="RestCards" component={RestFlip} durationInFrames={686} fps={FPS} width={1080} height={1350} />

      {/* Individual card flips */}
      {allTeachers.map((teacher) => (
        <Composition
          key={teacher.id}
          id={`card-${teacher.id}`}
          component={() => <SingleCardFlip teacher={teacher} />}
          durationInFrames={SINGLE_CARD_FRAMES}
          fps={FPS}
          width={1080}
          height={1350}
        />
      ))}
    </>
  );
};
