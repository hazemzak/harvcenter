import { Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";
import { STARTERS, RESERVES, MANAGERS, type Player, type Manager } from "./data";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

const BOARD_W = 940;
const BOARD_H = 750;
const PHOTO_SIZE = 60;

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
        gap: 3,
        fontFamily,
      }}
    >
      <div
        style={{
          width: PHOTO_SIZE,
          height: PHOTO_SIZE,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.6)",
          boxShadow: "0 0 10px rgba(212,32,39,0.3), 0 3px 10px rgba(0,0,0,0.5)",
          overflow: "hidden",
          background: hasPhoto ? "#1A2744" : "linear-gradient(135deg, #D42027 0%, #a01a20 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasPhoto ? (
          <Img
            src={staticFile(`teachers/${player.photo}`)}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
            {player.id === "student" ? "?" : player.number}
          </span>
        )}
      </div>

      <div
        style={{
          position: "absolute",
          top: -3,
          right: -3,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#D42027",
          border: "2px solid #1A2744",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: 9, fontWeight: 900, color: "#fff", lineHeight: 1 }}>
          {player.number}
        </span>
      </div>

      <span
        style={{
          fontSize: 12,
          fontWeight: 700,
          color: "#fff",
          whiteSpace: "nowrap",
          textShadow: "0 2px 6px rgba(0,0,0,0.7)",
          direction: "rtl",
        }}
      >
        {player.nameAr}
      </span>
    </div>
  );
};

const ReserveRow: React.FC<{ player: Player | { nameAr: string; nameEn: string; subjectAr: string; number: number } }> = ({ player }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "6px 16px",
      direction: "rtl",
      fontFamily,
    }}
  >
    <span style={{ fontSize: 12, fontWeight: 700, color: "#D42027", minWidth: 24 }}>
      {"number" in player ? player.number : 0}
    </span>
    <span style={{ fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", flex: 1 }}>
      {player.nameAr}
    </span>
    <span style={{ fontSize: 10, fontWeight: 600, color: "rgba(200,168,78,0.6)" }}>
      {player.subjectAr}
    </span>
  </div>
);

export const FullSquadBoard: React.FC = () => {
  return (
    <div style={{ width: BOARD_W, height: BOARD_H + 320, position: "relative", fontFamily }}>
      {/* Pitch */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: BOARD_W,
          height: BOARD_H,
          background: "#163016",
          borderRadius: 14,
          border: "2px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              top: `${i * 12.5}%`,
              left: 0,
              right: 0,
              height: "6.25%",
              background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent",
            }}
          />
        ))}
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 1, background: "rgba(255,255,255,0.08)" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", width: 80, height: 80, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", transform: "translate(-50%, -50%)" }} />
      </div>

      {/* Starter nodes on the pitch */}
      {STARTERS.map((player) => (
        <PlayerNode key={player.id} player={player} />
      ))}

      {/* Formation label */}
      <div style={{ position: "absolute", top: BOARD_H - 28, right: 16, fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.15)", letterSpacing: 3 }}>
        4-3-3
      </div>

      {/* Reserves section below pitch */}
      <div style={{ position: "absolute", top: BOARD_H + 20, left: 0, right: 0 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#C8A84E", letterSpacing: 4, textAlign: "center", marginBottom: 10, fontFamily }}>
          SUBSTITUTES
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {RESERVES.map((r) => (
            <ReserveRow key={r.id} player={r} />
          ))}
        </div>
      </div>
    </div>
  );
};
