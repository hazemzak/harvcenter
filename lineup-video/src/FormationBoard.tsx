import { STARTERS as PLAYERS } from "./data";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "700"],
  subsets: ["latin"],
});

const PITCH_W = 300;
const PITCH_H = 400;

export const FormationBoard: React.FC<{
  activeIndex: number;
  revealedCount: number;
}> = ({ activeIndex, revealedCount }) => {
  return (
    <div
      style={{
        width: PITCH_W,
        height: PITCH_H,
        background: "#163016",
        borderRadius: 10,
        position: "relative",
        border: "2px solid rgba(255,255,255,0.12)",
        overflow: "hidden",
        fontFamily,
      }}
    >
      {/* Pitch grass stripes */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${i * 12.5}%`,
            left: 0,
            right: 0,
            height: "6.25%",
            background: i % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent",
          }}
        />
      ))}

      {/* Center line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          height: 1,
          background: "rgba(255,255,255,0.12)",
        }}
      />

      {/* Center circle */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.12)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Center dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 4,
          height: 4,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.2)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Top penalty box (attacking end) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          width: "50%",
          height: "16%",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          borderRight: "1px solid rgba(255,255,255,0.12)",
        }}
      />

      {/* Bottom penalty box (GK end) */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "25%",
          width: "50%",
          height: "16%",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          borderRight: "1px solid rgba(255,255,255,0.12)",
        }}
      />

      {/* Top goal box */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "37%",
          width: "26%",
          height: "6%",
          borderBottom: "1px solid rgba(255,255,255,0.12)",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          borderRight: "1px solid rgba(255,255,255,0.12)",
        }}
      />

      {/* Bottom goal box */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "37%",
          width: "26%",
          height: "6%",
          borderTop: "1px solid rgba(255,255,255,0.12)",
          borderLeft: "1px solid rgba(255,255,255,0.12)",
          borderRight: "1px solid rgba(255,255,255,0.12)",
        }}
      />

      {/* Player dots */}
      {PLAYERS.map((player, i) => {
        if (i >= revealedCount) return null;
        const isActive = i === activeIndex;

        return (
          <div
            key={player.id}
            style={{
              position: "absolute",
              left: `${player.fx}%`,
              top: `${player.fy}%`,
              transform: "translate(-50%, -50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              zIndex: isActive ? 5 : 1,
            }}
          >
            {/* Glow ring for active */}
            {isActive && (
              <div
                style={{
                  position: "absolute",
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: "rgba(212,32,39,0.25)",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  marginTop: -6,
                }}
              />
            )}

            {/* Dot */}
            <div
              style={{
                width: isActive ? 14 : 8,
                height: isActive ? 14 : 8,
                borderRadius: "50%",
                background: isActive ? "#D42027" : "rgba(255,255,255,0.5)",
                border: isActive
                  ? "2px solid rgba(255,255,255,0.8)"
                  : "1px solid rgba(255,255,255,0.3)",
                boxShadow: isActive
                  ? "0 0 10px rgba(212,32,39,0.6)"
                  : "none",
              }}
            />

            {/* Name label */}
            <span
              style={{
                fontSize: 12,
                fontWeight: isActive ? 700 : 500,
                color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                whiteSpace: "nowrap",
                direction: "rtl",
                textShadow: "0 1px 4px rgba(0,0,0,0.7)",
              }}
            >
              {player.nameAr}
            </span>
          </div>
        );
      })}

      {/* Formation label */}
      <div
        style={{
          position: "absolute",
          bottom: 6,
          right: 8,
          fontSize: 9,
          fontWeight: 700,
          color: "rgba(255,255,255,0.25)",
          letterSpacing: 2,
        }}
      >
        4-3-3
      </div>
    </div>
  );
};
