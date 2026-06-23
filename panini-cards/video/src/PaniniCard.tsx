import { Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

export type TeacherData = {
  id: string;
  nameEn: string;
  nameAr: string;
  ovr: number;
  pos: string;
  posLabel: string;
  shirtNum: number;
  subject: string;
  subjectAr: string;
  tile: string;
  stats: { val: number; label: string }[];
};

export const PaniniCard: React.FC<{ teacher: TeacherData }> = ({ teacher }) => {
  return (
    <div
      style={{
        width: 1080,
        height: 1350,
        position: "relative",
        overflow: "hidden",
        background: "#1A2744",
        fontFamily,
      }}
    >
      {/* Pattern top */}
      <div
        style={{
          position: "absolute",
          top: -300,
          left: -300,
          right: -300,
          bottom: 420,
          backgroundImage: `url(${staticFile(`tiles/${teacher.tile}`)})`,
          backgroundSize: "700px 700px",
          backgroundRepeat: "repeat",
          transform: "rotate(-15deg)",
          filter: "brightness(1.15)",
        }}
      />
      {/* Pattern bottom */}
      <div
        style={{
          position: "absolute",
          top: 740,
          left: -300,
          right: -300,
          bottom: -300,
          backgroundImage: `url(${staticFile("tiles/tile-logo.png")})`,
          backgroundSize: "700px 700px",
          backgroundRepeat: "repeat",
          transform: "rotate(-15deg)",
          filter: "brightness(1.15)",
        }}
      />
      {/* Inner frame */}
      <div
        style={{
          position: "absolute",
          inset: 20,
          borderRadius: 16,
          border: "1px solid rgba(255,255,255,0.06)",
          zIndex: 10,
          pointerEvents: "none",
        }}
      />
      {/* Header */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 95,
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 50px",
        }}
      >
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "#7D8AA0", letterSpacing: 3 }}>
            FIFA WORLD CUP
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#fff", letterSpacing: 2, display: "flex", alignItems: "center", gap: 10 }}>
            <Img src={staticFile("icons/wc2026.png")} style={{ height: 50, width: "auto" }} />
            2026
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* Egypt flag */}
          <div style={{ width: 44, height: 30, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, background: "#CE1126" }} />
            <div style={{ flex: 1, background: "#fff" }} />
            <div style={{ flex: 1, background: "#000" }} />
          </div>
          <Img src={staticFile("icons/harv-logo.png")} style={{ width: 80, height: 76, objectFit: "contain" }} />
        </div>
      </div>
      {/* Accent line */}
      <div style={{ position: "absolute", top: 95, left: 40, right: 40, height: 3, background: "#D42027", zIndex: 5 }} />
      {/* Center name bar */}
      <div
        style={{
          position: "absolute",
          top: 95,
          left: 0,
          right: 0,
          zIndex: 6,
          textAlign: "center",
          fontSize: 24,
          fontWeight: 700,
          color: "rgba(255,255,255,0.5)",
          padding: "14px 0",
          background: "rgba(26,39,68,0.8)",
        }}
      >
        <span style={{ letterSpacing: 3 }}>HARVARD EDUCATIONAL CENTER · </span>
        <span>مركز هارفورد التعليمي</span>
      </div>
      {/* Photo */}
      <div
        style={{
          position: "absolute",
          top: 95,
          left: 0,
          right: 0,
          height: 685,
          zIndex: 2,
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Img
          src={staticFile(`teachers/${teacher.id}.png`)}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center 2%",
          }}
        />
        {/* Gradients */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(180deg, #1A2744, transparent)", zIndex: 3 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 250, background: "linear-gradient(0deg, #1A2744, rgba(26,39,68,0.4) 60%, transparent)", zIndex: 3 }} />
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 320, background: "linear-gradient(90deg, rgba(26,39,68,0.95), rgba(26,39,68,0.5) 50%, transparent)", zIndex: 3 }} />
      </div>
      {/* Shield */}
      <div style={{ position: "absolute", top: 120, left: 50, zIndex: 8, width: 100, textAlign: "center" }}>
        <div
          style={{
            width: 100,
            height: 116,
            background: "#D42027",
            clipPath: "polygon(0 0,100% 0,100% 76%,50% 100%,0 76%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingBottom: 14,
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{teacher.ovr}</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 2, marginTop: -2 }}>{teacher.pos}</span>
        </div>
      </div>
      {/* Shirt number watermark */}
      <div style={{ position: "absolute", top: 140, right: 40, fontSize: 260, fontWeight: 900, color: "rgba(212,32,39,0.08)", zIndex: 1, lineHeight: 1 }}>
        {teacher.shirtNum}
      </div>
      {/* Subject banner */}
      <div
        style={{
          position: "absolute",
          top: 740,
          left: 0,
          right: 0,
          height: 80,
          background: "#D42027",
          zIndex: 5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "5px solid rgba(255,255,255,0.3)",
          borderRight: "5px solid rgba(255,255,255,0.3)",
        }}
      >
        <span style={{ fontSize: 30, fontWeight: 700, color: "#fff", letterSpacing: 4 }}>{teacher.subject} · </span>
        <span style={{ fontSize: 30, fontWeight: 700, color: "#fff", letterSpacing: 0 }}>{teacher.subjectAr}</span>
      </div>
      {/* Name */}
      <div style={{ position: "absolute", top: 830, left: 0, right: 0, zIndex: 5, textAlign: "center", padding: "0 40px" }}>
        <div style={{ fontSize: 58, fontWeight: 900, color: "#fff", letterSpacing: 2, lineHeight: 1.1 }}>{teacher.nameEn}</div>
        <div style={{ fontSize: 28, fontWeight: 600, color: "rgba(255,255,255,0.5)", direction: "rtl", marginTop: 4 }}>{teacher.nameAr}</div>
        <div
          style={{
            display: "inline-block",
            marginTop: 12,
            padding: "8px 32px",
            borderRadius: 19,
            background: "rgba(212,32,39,0.15)",
            border: "1px solid #D42027",
            fontSize: 14,
            fontWeight: 700,
            color: "#D42027",
            letterSpacing: 3,
          }}
        >
          #{teacher.shirtNum} · {teacher.posLabel}
        </div>
      </div>
      {/* Divider */}
      <div style={{ position: "absolute", top: 1000, left: 60, right: 60, height: 1, background: "rgba(255,255,255,0.08)", zIndex: 5 }} />
      {/* Stats */}
      <div
        style={{
          position: "absolute",
          top: 1015,
          left: 40,
          right: 40,
          zIndex: 5,
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "8px 20px",
        }}
      >
        {teacher.stats.map((s, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>{s.val}</div>
            <div style={{ width: 180, height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, margin: "2px auto 0", position: "relative" }}>
              <div style={{ height: "100%", width: `${s.val}%`, background: "#D42027", borderRadius: 2 }} />
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#7D8AA0", direction: "rtl", marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          zIndex: 5,
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Img src={staticFile("icons/harv-logo.png")} style={{ width: 48, height: 56, objectFit: "contain" }} />
          <span style={{ fontSize: 14, fontWeight: 600, color: "#5A6784" }}>معاك للنهاية</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 24px",
            height: 42,
            borderRadius: 21,
            background: "rgba(212,32,39,0.12)",
            border: "1px solid rgba(212,32,39,0.4)",
          }}
        >
          <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", letterSpacing: 2 }}>01064949395 · 01223463448 · 02-24734371</span>
        </div>
        <div style={{ fontSize: 12, fontWeight: 600, color: "#3D4C6B", letterSpacing: 1 }}>HARV FC</div>
      </div>
    </div>
  );
};
