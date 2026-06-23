import { useCurrentFrame, useVideoConfig, interpolate, spring, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

export const AnimatedCardBack: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Tile pattern — fade + drift
  const tileOp = interpolate(frame, [0, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const tileDrift = interpolate(frame, [0, 300], [-15, -12]);

  // Borders — fade in
  const borderOp = interpolate(frame, [4, 14], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // WC badge — spring scale
  const wcSpr = spring({ frame: frame - 8, fps, config: { damping: 10, stiffness: 100, mass: 0.6 } });
  const wcScale = interpolate(wcSpr, [0, 1], [0.3, 1]);

  // FIFA text — fade in
  const fifaOp = interpolate(frame, [12, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Divider lines — expand from center
  const divSpr = spring({ frame: frame - 14, fps, config: { damping: 15, stiffness: 80 } });
  const divScaleX = interpolate(divSpr, [0, 1], [0, 1]);

  // Logo — spring scale (bigger, hero moment)
  const logoSpr = spring({ frame: frame - 16, fps, config: { damping: 8, stiffness: 120, mass: 0.5 } });
  const logoScale = interpolate(logoSpr, [0, 1], [0.2, 1]);
  const logoOp = interpolate(frame, [15, 20], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // HARV FC text — spring up
  const harvSpr = spring({ frame: frame - 22, fps, config: { damping: 14, stiffness: 70 } });
  const harvY = interpolate(harvSpr, [0, 1], [30, 0]);
  const harvOp = interpolate(harvSpr, [0, 1], [0, 1]);

  // Tagline
  const tagSpr = spring({ frame: frame - 26, fps, config: { damping: 14, stiffness: 70 } });
  const tagOp = interpolate(tagSpr, [0, 1], [0, 1]);

  // CTA button — bounce in
  const ctaSpr = spring({ frame: frame - 30, fps, config: { damping: 8, stiffness: 130, mass: 0.5 } });
  const ctaScale = interpolate(ctaSpr, [0, 1], [0.3, 1]);
  const ctaOp = interpolate(frame, [29, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Phone numbers — staggered fade
  const phoneOp = interpolate(frame, [28, 36], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const phoneSpr = spring({ frame: frame - 28, fps, config: { damping: 15, stiffness: 60 } });
  const phoneY = interpolate(phoneSpr, [0, 1], [20, 0]);

  // Footer
  const footerOp = interpolate(frame, [32, 40], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Shimmer sweep
  const shimmerX = interpolate(frame, [45, 70], [-30, 130], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
          transform: `rotate(${tileDrift}deg)`,
          filter: "brightness(1.15)",
          opacity: tileOp,
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
          opacity: borderOp,
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
          opacity: borderOp,
        }}
      />
      {/* Corner accents */}
      {[
        { top: 40, left: 40, borderTop: "3px solid rgba(212,32,39,0.4)", borderLeft: "3px solid rgba(212,32,39,0.4)" },
        { top: 40, right: 40, borderTop: "3px solid rgba(212,32,39,0.4)", borderRight: "3px solid rgba(212,32,39,0.4)" },
        { bottom: 40, left: 40, borderBottom: "3px solid rgba(212,32,39,0.4)", borderLeft: "3px solid rgba(212,32,39,0.4)" },
        { bottom: 40, right: 40, borderBottom: "3px solid rgba(212,32,39,0.4)", borderRight: "3px solid rgba(212,32,39,0.4)" },
      ].map((style, i) => (
        <div key={i} style={{ position: "absolute", width: 60, height: 60, zIndex: 3, opacity: borderOp, ...style } as React.CSSProperties} />
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
          style={{
            width: 100,
            height: "auto",
            filter: "drop-shadow(0 2px 20px rgba(255,255,255,0.15))",
            transform: `scale(${wcScale})`,
          }}
        />
        <div style={{ fontSize: 32, fontWeight: 900, color: "#D42027", letterSpacing: 4, opacity: fifaOp }}>
          FIFA WORLD CUP 2026
        </div>
        <div
          style={{
            width: 120,
            height: 3,
            background: "#D42027",
            borderRadius: 2,
            transform: `scaleX(${divScaleX})`,
            transformOrigin: "center",
          }}
        />
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{
            width: 200,
            height: "auto",
            filter: "drop-shadow(0 4px 30px rgba(212,32,39,0.3))",
            transform: `scale(${logoScale})`,
            opacity: logoOp,
          }}
        />
        <div
          style={{
            fontSize: 32,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 6,
            transform: `translateY(${harvY}px)`,
            opacity: harvOp,
          }}
        >
          HARV FC
        </div>
        <div
          style={{
            width: 120,
            height: 3,
            background: "#D42027",
            borderRadius: 2,
            transform: `scaleX(${divScaleX})`,
            transformOrigin: "center",
          }}
        />
        <div
          style={{
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(255,255,255,0.4)",
            direction: "rtl" as const,
            opacity: tagOp,
          }}
        >
          معاك للنهاية
        </div>
      </div>
      {/* CTA button */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          zIndex: 20,
          display: "flex",
          justifyContent: "center",
          transform: `scale(${ctaScale})`,
          opacity: ctaOp,
        }}
      >
        <div
          style={{
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
          opacity: phoneOp,
          transform: `translateY(${phoneY}px)`,
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
          opacity: footerOp,
        }}
      >
        HARVARD EDUCATIONAL CENTER · مركز هارفورد التعليمي
      </div>
      {/* Shimmer sweep */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 25,
          background: `linear-gradient(105deg, transparent ${shimmerX - 15}%, rgba(255,255,255,0.06) ${shimmerX}%, transparent ${shimmerX + 15}%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
