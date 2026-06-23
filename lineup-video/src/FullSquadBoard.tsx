import { Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";
import { PLAYERS, MANAGERS, type Player, type Manager } from "./data";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

const BOARD_W = 940;
const BOARD_H = 1050;
const PHOTO_SIZE = 72;

const PlayerNode: React.FC<{ player: Player }> = ({ player }) => {
  const hasPhoto = player.photo !== "";

  return (
    <div
      style={{
        position: "absolute",
        left: `${player.fx}%`,
        top: `${player.fy}%`,
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
        fontFamily,
      }}
    >
      {/* Photo circle */}
      <div
        style={{
          width: PHOTO_SIZE,
          height: PHOTO_SIZE,
          borderRadius: "50%",
          border: "3px solid rgba(255,255,255,0.7)",
          boxShadow:
            "0 0 12px rgba(212,32,39,0.35), 0 4px 12px rgba(0,0,0,0.5)",
          overflow: "hidden",
          background: hasPhoto
            ? "#1A2744"
            : "linear-gradient(135deg, #D42027 0%, #a01a20 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {hasPhoto ? (
          <Img
            src={staticFile(`teachers/${player.photo}`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{
              fontSize: 28,
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1,
            }}
          >
            {player.number}
          </span>
        )}
      </div>

      {/* Number badge */}
      <div
        style={{
          position: "absolute",
          top: -4,
          right: -4,
          width: 24,
          height: 24,
          borderRadius: "50%",
          background: "#D42027",
          border: "2px solid #1A2744",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1,
          }}
        >
          {player.number}
        </span>
      </div>

      {/* Arabic name */}
      <span
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#fff",
          whiteSpace: "nowrap",
          textShadow: "0 2px 6px rgba(0,0,0,0.7)",
          direction: "rtl",
          letterSpacing: 0.3,
        }}
      >
        {player.nameAr}
      </span>

      {/* Subject tag */}
      <span
        style={{
          fontSize: 10,
          fontWeight: 600,
          color: "rgba(200,168,78,0.8)",
          whiteSpace: "nowrap",
          letterSpacing: 0.5,
        }}
      >
        {player.subjectAr}
      </span>
    </div>
  );
};

const ManagerNode: React.FC<{ manager: Manager }> = ({ manager }) => {
  const hasPhoto = manager.photo !== "";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
        fontFamily,
      }}
    >
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          border: "2px solid rgba(200,168,78,0.6)",
          boxShadow: "0 0 10px rgba(200,168,78,0.2), 0 4px 12px rgba(0,0,0,0.5)",
          overflow: "hidden",
          background: "#1A2744",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasPhoto ? (
          <Img
            src={staticFile(`teachers/${manager.photo}`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <span
            style={{ fontSize: 20, fontWeight: 900, color: "#C8A84E" }}
          >
            ?
          </span>
        )}
      </div>

      <span
        style={{
          fontSize: 14,
          fontWeight: 700,
          color: "#fff",
          whiteSpace: "nowrap",
          textShadow: "0 2px 6px rgba(0,0,0,0.7)",
          direction: "rtl",
        }}
      >
        {manager.nameAr}
      </span>

      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#C8A84E",
          whiteSpace: "nowrap",
          direction: "rtl",
        }}
      >
        {manager.titleAr}
      </span>
    </div>
  );
};

export const FullSquadBoard: React.FC = () => {
  return (
    <div
      style={{
        width: BOARD_W,
        height: BOARD_H,
        position: "relative",
        fontFamily,
      }}
    >
      {/* Pitch background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "#163016",
          borderRadius: 16,
          border: "2px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        {/* Grass stripes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${i * 8.33}%`,
              left: 0,
              right: 0,
              height: "4.17%",
              background:
                i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
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
            background: "rgba(255,255,255,0.08)",
          }}
        />

        {/* Center circle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.08)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Top penalty box */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "25%",
            width: "50%",
            height: "14%",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        {/* Bottom penalty box (GK) */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "25%",
            width: "50%",
            height: "14%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        {/* Top goal box */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "37%",
            width: "26%",
            height: "5%",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        />

        {/* Bottom goal box */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: "37%",
            width: "26%",
            height: "5%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(255,255,255,0.08)",
          }}
        />
      </div>

      {/* Player nodes */}
      {PLAYERS.map((player) => (
        <PlayerNode key={player.id} player={player} />
      ))}

      {/* Formation label */}
      <div
        style={{
          position: "absolute",
          bottom: 12,
          right: 16,
          fontSize: 14,
          fontWeight: 700,
          color: "rgba(255,255,255,0.18)",
          letterSpacing: 3,
        }}
      >
        4-3-3
      </div>

      {/* Management section below the pitch */}
      <div
        style={{
          position: "absolute",
          bottom: -120,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 100,
        }}
      >
        {MANAGERS.map((m) => (
          <ManagerNode key={m.id} manager={m} />
        ))}
      </div>
    </div>
  );
};
