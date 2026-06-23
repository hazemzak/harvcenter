import { useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { CardBack } from "./CardBack";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["700", "900"],
  subsets: ["arabic"],
});

export const CardBackWithCTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const ctaOpacity = interpolate(frame, [0.6 * fps, 1.2 * fps], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  const ctaY = interpolate(frame, [0.6 * fps, 1.2 * fps], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <div style={{ position: "relative", width: 1080, height: 1350 }}>
      <CardBack />
      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          opacity: ctaOpacity,
          transform: `translateY(${ctaY}px)`,
        }}
      >
        <div
          style={{
            fontFamily,
            fontSize: 38,
            fontWeight: 900,
            color: "#fff",
            background: "#D42027",
            padding: "14px 60px",
            borderRadius: 100,
            letterSpacing: 2,
            boxShadow: "0 4px 30px rgba(212,32,39,0.5)",
          }}
        >
          الحجز مفتوح 2027
        </div>
      </div>
    </div>
  );
};
