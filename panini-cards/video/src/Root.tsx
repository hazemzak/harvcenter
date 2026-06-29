import { Composition } from "remotion";
import { EnglishFlip, PhysicsFlip, ArabicFlip, LanguagesFlip, RestFlip, SciencesFlip, HumanitiesFlip, MathFlip, calcFrames } from "./FlipVideo";
import { SingleCardFlip, SINGLE_CARD_FRAMES, allTeachers } from "./SingleCardFlip";
import { FreeGermanAd, AD_DURATION } from "./FreeGermanAd";
import { WhyGermanAd, CountdownAd, UrgencyAd } from "./GermanAdVariants";

const FPS = 30;
const AD_BODY = 300; // frames for the core ad content

export const RemotionRoot: React.FC = () => {
  return (
    <>
      {/* === AD VIDEOS === */}
      <Composition id="FreeGermanAd" component={FreeGermanAd} durationInFrames={AD_DURATION} fps={FPS} width={1080} height={1350} />
      <Composition id="WhyGermanAd" component={WhyGermanAd} durationInFrames={90 + AD_BODY} fps={FPS} width={1080} height={1350} />
      <Composition id="Countdown30" component={CountdownAd} defaultProps={{ daysLeft: 30 }} durationInFrames={68 + AD_BODY} fps={FPS} width={1080} height={1350} />
      <Composition id="Countdown14" component={CountdownAd} defaultProps={{ daysLeft: 14 }} durationInFrames={68 + AD_BODY} fps={FPS} width={1080} height={1350} />
      <Composition id="UrgencyAd" component={UrgencyAd} durationInFrames={AD_DURATION} fps={FPS} width={1080} height={1350} />

      {/* === SQUAD REELS (flip format — card back → cards → card back) === */}
      <Composition id="PhysicsReel" component={PhysicsFlip} durationInFrames={calcFrames(7)} fps={FPS} width={1080} height={1350} />
      <Composition id="EnglishReel" component={EnglishFlip} durationInFrames={calcFrames(4)} fps={FPS} width={1080} height={1350} />
      <Composition id="ArabicReel" component={ArabicFlip} durationInFrames={calcFrames(2)} fps={FPS} width={1080} height={1350} />
      <Composition id="LanguagesReel" component={LanguagesFlip} durationInFrames={calcFrames(4)} fps={FPS} width={1080} height={1350} />
      <Composition id="SciencesReel" component={SciencesFlip} durationInFrames={calcFrames(7)} fps={FPS} width={1080} height={1350} />
      <Composition id="HumanitiesReel" component={HumanitiesFlip} durationInFrames={calcFrames(6)} fps={FPS} width={1080} height={1350} />
      <Composition id="MathReel" component={MathFlip} durationInFrames={calcFrames(5)} fps={FPS} width={1080} height={1350} />

      {/* === OLD flip-style group videos (kept for reference) === */}
      <Composition id="EnglishCards" component={EnglishFlip} durationInFrames={510} fps={FPS} width={1080} height={1350} />
      <Composition id="PhysicsCards" component={PhysicsFlip} durationInFrames={calcFrames(7)} fps={FPS} width={1080} height={1350} />
      <Composition id="ArabicCards" component={ArabicFlip} durationInFrames={334} fps={FPS} width={1080} height={1350} />
      <Composition id="LanguagesCards" component={LanguagesFlip} durationInFrames={calcFrames(4)} fps={FPS} width={1080} height={1350} />
      <Composition id="RestCards" component={RestFlip} durationInFrames={calcFrames(13)} fps={FPS} width={1080} height={1350} />
      <Composition id="SciencesCards" component={SciencesFlip} durationInFrames={calcFrames(8)} fps={FPS} width={1080} height={1350} />
      <Composition id="HumanitiesCards" component={HumanitiesFlip} durationInFrames={calcFrames(6)} fps={FPS} width={1080} height={1350} />
      <Composition id="MathCards" component={MathFlip} durationInFrames={calcFrames(5)} fps={FPS} width={1080} height={1350} />

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
