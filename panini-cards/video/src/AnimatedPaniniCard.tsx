import { useCurrentFrame, useVideoConfig, interpolate, spring, Img, staticFile } from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";
import { TeacherData } from "./PaniniCard";

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

const FLAGS: Record<string, { colors: string[]; direction: "row" | "column" }> = {
  GERMAN: { colors: ["#000", "#DD0000", "#FFCC00"], direction: "column" },
  FRENCH: { colors: ["#002395", "#fff", "#ED2939"], direction: "row" },
  ITALIAN: { colors: ["#009246", "#fff", "#CE2B37"], direction: "row" },
};

const SubjectFlag: React.FC<{ subject: string }> = ({ subject }) => {
  const flag = FLAGS[subject];
  if (!flag) return null;
  return (
    <div style={{ width: 48, height: 32, borderRadius: 4, overflow: "hidden", display: "flex", flexDirection: flag.direction, marginLeft: 14, marginRight: 14, boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
      <div style={{ flex: 1, background: flag.colors[0] }} />
      <div style={{ flex: 1, background: flag.colors[1] }} />
      <div style={{ flex: 1, background: flag.colors[2] }} />
    </div>
  );
};

export const AnimatedPaniniCard: React.FC<{ teacher: TeacherData }> = ({ teacher }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Tile pattern — fade in + continuous slow drift
  const tileOpacity = interpolate(frame, [0, 10], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const tileDrift = interpolate(frame, [0, 300], [-15, -12]);

  // Photo — dramatic scale entrance with spring
  const photoSpr = spring({ frame: frame - 3, fps, config: { damping: 11, stiffness: 100, mass: 0.7 } });
  const photoScale = interpolate(photoSpr, [0, 1], [1.35, 1]);
  const photoOpacity = interpolate(frame, [2, 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Header — fade in
  const headerOpacity = interpolate(frame, [0, 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Red accent line — expand from center
  const lineSpr = spring({ frame: frame - 5, fps, config: { damping: 15, stiffness: 80 } });
  const lineScaleX = interpolate(lineSpr, [0, 1], [0, 1]);

  // OVR shield — drop in with bounce
  const shieldSpr = spring({ frame: frame - 8, fps, config: { damping: 8, stiffness: 150, mass: 0.5 } });
  const shieldY = interpolate(shieldSpr, [0, 1], [-150, 0]);
  const shieldScale = interpolate(shieldSpr, [0, 1], [0.3, 1]);
  const shieldOpacity = interpolate(frame, [7, 12], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  // Subject banner — slides in from right
  const bannerSpr = spring({ frame: frame - 12, fps, config: { damping: 12, stiffness: 90 } });
  const bannerX = interpolate(bannerSpr, [0, 1], [400, 0]);

  // Name EN — spring up
  const nameEnSpr = spring({ frame: frame - 16, fps, config: { damping: 14, stiffness: 70 } });
  const nameEnY = interpolate(nameEnSpr, [0, 1], [50, 0]);
  const nameEnOp = interpolate(nameEnSpr, [0, 1], [0, 1]);

  // Name AR — staggered
  const nameArSpr = spring({ frame: frame - 19, fps, config: { damping: 14, stiffness: 70 } });
  const nameArY = interpolate(nameArSpr, [0, 1], [30, 0]);
  const nameArOp = interpolate(nameArSpr, [0, 1], [0, 1]);

  // Position tag — scale pop
  const tagSpr = spring({ frame: frame - 22, fps, config: { damping: 15, stiffness: 80 } });
  const tagScale = interpolate(tagSpr, [0, 1], [0.4, 1]);
  const tagOp = interpolate(tagSpr, [0, 1], [0, 1]);

  // Stats — staggered fill + count up
  const statsAnims = teacher.stats.map((s, i) => {
    const delay = 26 + i * 3;
    const prog = spring({ frame: frame - delay, fps, config: { damping: 14, stiffness: 60 } });
    return {
      barWidth: interpolate(prog, [0, 1], [0, s.val]),
      displayVal: Math.round(interpolate(prog, [0, 1], [0, s.val])),
      opacity: interpolate(frame, [delay - 1, delay + 4], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
      y: interpolate(prog, [0, 1], [20, 0]),
    };
  });

  // Shirt number watermark — slow fade + drift
  const shirtOp = interpolate(frame, [10, 25], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const shirtY = interpolate(frame, [0, 200], [160, 130]);

  // Footer — slides up
  const footerSpr = spring({ frame: frame - 32, fps, config: { damping: 15, stiffness: 60 } });
  const footerY = interpolate(footerSpr, [0, 1], [40, 0]);
  const footerOp = interpolate(footerSpr, [0, 1], [0, 1]);

  // Shimmer highlight sweep across the card
  const shimmerX = interpolate(frame, [40, 65], [-30, 130], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

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
          transform: `rotate(${tileDrift}deg)`,
          filter: "brightness(1.15)",
          opacity: tileOpacity,
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
          transform: `rotate(${tileDrift}deg)`,
          filter: "brightness(1.15)",
          opacity: tileOpacity,
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
          opacity: headerOpacity,
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
          opacity: headerOpacity,
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
          <div style={{ width: 44, height: 30, borderRadius: 3, overflow: "hidden", display: "flex", flexDirection: "column" }}>
            <div style={{ flex: 1, background: "#CE1126" }} />
            <div style={{ flex: 1, background: "#fff" }} />
            <div style={{ flex: 1, background: "#000" }} />
          </div>
          <Img src={staticFile("icons/harv-logo.png")} style={{ width: 80, height: 76, objectFit: "contain" }} />
        </div>
      </div>
      {/* Accent line — expands from center */}
      <div
        style={{
          position: "absolute",
          top: 95,
          left: 40,
          right: 40,
          height: 3,
          background: "#D42027",
          zIndex: 5,
          transform: `scaleX(${lineScaleX})`,
          transformOrigin: "center",
        }}
      />
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
          opacity: headerOpacity,
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
          opacity: photoOpacity,
        }}
      >
        <Img
          src={staticFile(`teachers/${teacher.id}.png`)}
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center 2%",
            transform: `scale(${photoScale})`,
          }}
        />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 160, background: "linear-gradient(180deg, #1A2744, transparent)", zIndex: 3 }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 250, background: "linear-gradient(0deg, #1A2744, rgba(26,39,68,0.4) 60%, transparent)", zIndex: 3 }} />
        <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 320, background: "linear-gradient(90deg, rgba(26,39,68,0.95), rgba(26,39,68,0.5) 50%, transparent)", zIndex: 3 }} />
      </div>
      {/* Shield — drops in with bounce */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: 50,
          zIndex: 8,
          width: 100,
          textAlign: "center",
          transform: `translateY(${shieldY}px) scale(${shieldScale})`,
          opacity: shieldOpacity,
        }}
      >
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
            boxShadow: "0 4px 30px rgba(212,32,39,0.5)",
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{teacher.ovr}</span>
          <span style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.85)", letterSpacing: 2, marginTop: -2 }}>{teacher.pos}</span>
        </div>
      </div>
      {/* Shirt number watermark */}
      <div
        style={{
          position: "absolute",
          top: shirtY,
          right: 40,
          fontSize: 260,
          fontWeight: 900,
          color: `rgba(212,32,39,${0.08 * shirtOp})`,
          zIndex: 1,
          lineHeight: 1,
        }}
      >
        {teacher.shirtNum}
      </div>
      {/* Subject banner — slides in from right */}
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
          transform: `translateX(${bannerX}px)`,
        }}
      >
        <SubjectFlag subject={teacher.subject} />
        <span style={{ fontSize: 30, fontWeight: 700, color: "#fff", letterSpacing: 4 }}>{teacher.subject} · </span>
        <span style={{ fontSize: 30, fontWeight: 700, color: "#fff", letterSpacing: 0 }}>{teacher.subjectAr}</span>
        <SubjectFlag subject={teacher.subject} />
      </div>
      {/* Name */}
      <div style={{ position: "absolute", top: 830, left: 0, right: 0, zIndex: 5, textAlign: "center", padding: "0 40px" }}>
        <div
          style={{
            fontSize: 58,
            fontWeight: 900,
            color: "#fff",
            letterSpacing: 2,
            lineHeight: 1.1,
            transform: `translateY(${nameEnY}px)`,
            opacity: nameEnOp,
          }}
        >
          {teacher.nameEn}
        </div>
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "rgba(255,255,255,0.5)",
            direction: "rtl",
            marginTop: 4,
            transform: `translateY(${nameArY}px)`,
            opacity: nameArOp,
          }}
        >
          {teacher.nameAr}
        </div>
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
            transform: `scale(${tagScale})`,
            opacity: tagOp,
          }}
        >
          #{teacher.shirtNum} · {teacher.posLabel}
        </div>
      </div>
      {/* Divider */}
      <div
        style={{
          position: "absolute",
          top: 1000,
          left: 60,
          right: 60,
          height: 1,
          background: "rgba(255,255,255,0.08)",
          zIndex: 5,
          transform: `scaleX(${lineScaleX})`,
          transformOrigin: "center",
        }}
      />
      {/* Stats — staggered entrance + count up */}
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
        {teacher.stats.map((s, i) => {
          const a = statsAnims[i];
          return (
            <div
              key={i}
              style={{
                textAlign: "center",
                opacity: a.opacity,
                transform: `translateY(${a.y}px)`,
              }}
            >
              <div style={{ fontSize: 38, fontWeight: 900, color: "#fff", lineHeight: 1.2 }}>{a.displayVal}</div>
              <div style={{ width: 180, height: 3, background: "rgba(255,255,255,0.1)", borderRadius: 2, margin: "2px auto 0", position: "relative" }}>
                <div style={{ height: "100%", width: `${a.barWidth}%`, background: "#D42027", borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#7D8AA0", direction: "rtl", marginTop: 4 }}>{s.label}</div>
            </div>
          );
        })}
      </div>
      {/* Footer — slides up */}
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
          transform: `translateY(${footerY}px)`,
          opacity: footerOp,
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
      {/* Shimmer highlight sweep */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 20,
          background: `linear-gradient(105deg, transparent ${shimmerX - 15}%, rgba(255,255,255,0.07) ${shimmerX}%, transparent ${shimmerX + 15}%)`,
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
