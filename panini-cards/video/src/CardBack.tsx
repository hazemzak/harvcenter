import { Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

export const CardBack: React.FC = () => {
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
      {/* Logo tile pattern */}
      <div
        style={{
          position: "absolute",
          inset: -300,
          backgroundImage: `url(${staticFile("tiles/tile-logo.png")})`,
          backgroundSize: "500px 500px",
          backgroundRepeat: "repeat",
          transform: "rotate(-15deg)",
          filter: "brightness(1.15)",
        }}
      />
      {/* Outer border */}
      <div
        style={{
          position: "absolute",
          inset: 16,
          borderRadius: 20,
          border: "3px solid #D42027",
          zIndex: 2,
        }}
      />
      {/* Inner border */}
      <div
        style={{
          position: "absolute",
          inset: 28,
          borderRadius: 14,
          border: "1px solid rgba(255,255,255,0.08)",
          zIndex: 2,
        }}
      />
      {/* Corner accents */}
      {[
        { top: 40, left: 40, borderTop: "3px solid rgba(212,32,39,0.4)", borderLeft: "3px solid rgba(212,32,39,0.4)" },
        { top: 40, right: 40, borderTop: "3px solid rgba(212,32,39,0.4)", borderRight: "3px solid rgba(212,32,39,0.4)" },
        { bottom: 40, left: 40, borderBottom: "3px solid rgba(212,32,39,0.4)", borderLeft: "3px solid rgba(212,32,39,0.4)" },
        { bottom: 40, right: 40, borderBottom: "3px solid rgba(212,32,39,0.4)", borderRight: "3px solid rgba(212,32,39,0.4)" },
      ].map((style, i) => (
        <div key={i} style={{ position: "absolute", width: 60, height: 60, zIndex: 3, ...style } as React.CSSProperties} />
      ))}
      {/* Center content */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 24,
        }}
      >
        <Img
          src={staticFile("icons/wc2026.png")}
          style={{ width: 100, height: "auto", filter: "drop-shadow(0 2px 20px rgba(255,255,255,0.15))" }}
        />
        <div style={{ fontSize: 32, fontWeight: 900, color: "#D42027", letterSpacing: 4 }}>
          FIFA WORLD CUP 2026
        </div>
        <div style={{ width: 120, height: 3, background: "#D42027", borderRadius: 2 }} />
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{ width: 200, height: "auto", filter: "drop-shadow(0 4px 30px rgba(212,32,39,0.3))" }}
        />
        <div style={{ fontSize: 32, fontWeight: 900, color: "#fff", letterSpacing: 6 }}>
          HARV FC
        </div>
        <div style={{ width: 120, height: 3, background: "#D42027", borderRadius: 2 }} />
        <div style={{ fontSize: 22, fontWeight: 600, color: "rgba(255,255,255,0.4)", direction: "rtl" as const }}>
          معاك للنهاية
        </div>
      </div>
      {/* Phone numbers */}
      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 0,
          right: 0,
          zIndex: 5,
          display: "flex",
          justifyContent: "center",
          gap: 24,
          direction: "ltr" as const,
        }}
      >
        {[
          { label: "واتساب", num: "01064949395" },
          { label: "موبايل", num: "01223463448" },
          { label: "أرضي", num: "02-24734371" },
        ].map((p, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#5A6784", direction: "rtl" as const }}>{p.label}</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 1 }}>{p.num}</div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          zIndex: 5,
          textAlign: "center",
          fontSize: 14,
          fontWeight: 600,
          color: "#3D4C6B",
          letterSpacing: 2,
        }}
      >
        HARVARD EDUCATIONAL CENTER · مركز هارفورد التعليمي
      </div>
    </div>
  );
};
