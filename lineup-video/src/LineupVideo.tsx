import {
  useCurrentFrame,
  interpolate,
  Easing,
  Img,
  OffthreadVideo,
  Sequence,
  staticFile,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Cairo";
import { FormationBoard } from "./FormationBoard";
import { FullSquadBoard } from "./FullSquadBoard";
import { STARTERS, RESERVES, MANAGERS, DEMO_ORDER, type Player, type Manager } from "./data";

const PLAYERS = STARTERS;

const { fontFamily } = loadFont("normal", {
  weights: ["400", "600", "700", "900"],
  subsets: ["arabic", "latin"],
});

const INTRO_FRAMES = 90;
const REVEAL_FRAMES = 90;
const RESERVE_HIGHLIGHT_FRAMES = 45; // 1.5 sec each
const LOGO_END_FRAMES = 60;
const CLOSING_FRAMES = 120;

const STARTERS_END = INTRO_FRAMES + DEMO_ORDER.length * REVEAL_FRAMES;
const RESERVES_START = STARTERS_END;
const RESERVES_END = RESERVES_START + RESERVES.length * RESERVE_HIGHLIGHT_FRAMES;
const CLOSING_START = RESERVES_END;
const LOGO_START = CLOSING_START + CLOSING_FRAMES;

const MGMT_START = RESERVES_START;
const PLAYERS_END = STARTERS_END;

// =============================================
//  PLAYER REVEAL
// =============================================
const TypewriterText: React.FC<{ text: string; startFrame: number; charsPerFrame?: number }> = ({ text, startFrame, charsPerFrame = 0.8 }) => {
  const frame = useCurrentFrame();
  const elapsed = Math.max(0, frame - startFrame);
  const visibleChars = Math.min(Math.floor(elapsed * charsPerFrame), text.length);
  const showCursor = elapsed % 16 < 10;
  return (
    <span>
      {text.slice(0, visibleChars)}
      {visibleChars < text.length && showCursor && <span style={{ opacity: 0.7 }}>|</span>}
    </span>
  );
};

const PlayerReveal: React.FC<{ player: Player }> = ({ player }) => {
  const frame = useCurrentFrame();
  const isStudent = player.id === "student";
  const hasVideo = !!player.video;
  const hasPhoto = player.photo !== "";

  const mediaOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const mediaScale = interpolate(frame, [0, 60], [1.06, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const nameX = interpolate(frame, [8, 28], [300, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const nameOpacity = interpolate(frame, [8, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tagOpacity = interpolate(frame, [22, 36], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const numberOpacity = interpolate(frame, [4, 18], [0, 0.06], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const barWidth = interpolate(frame, [0, 20], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const barOpacity = interpolate(frame, [0, 10, 25, 35], [0, 0.8, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 0,
          width: barWidth,
          height: 4,
          background: "#D42027",
          zIndex: 28,
          opacity: barOpacity,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          right: 0,
          bottom: 440,
          zIndex: 8,
          opacity: mediaOpacity,
          overflow: "hidden",
        }}
      >
        {hasVideo ? (
          <OffthreadVideo
            src={staticFile(`videos/${player.video}`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 15%",
              transform: `scale(${mediaScale})`,
            }}
          />
        ) : hasPhoto ? (
          <Img
            src={staticFile(`teachers/${player.photo}`)}
            style={{
              width: isStudent ? "40%" : "100%",
              height: isStudent ? "40%" : "100%",
              objectFit: isStudent ? "contain" : "cover",
              objectPosition: "center center",
              transform: `scale(${mediaScale})`,
              margin: isStudent ? "auto" : undefined,
              position: isStudent ? "absolute" : undefined,
              top: isStudent ? "50%" : undefined,
              left: isStudent ? "50%" : undefined,
              ...(isStudent ? { transform: `translate(-50%, -50%) scale(${mediaScale})` } : {}),
              opacity: isStudent ? 0.4 : 1,
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(160deg, #1A2744 0%, #243558 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 320,
                fontWeight: 900,
                color: "rgba(212,32,39,0.08)",
                lineHeight: 1,
              }}
            >
              {player.number}
            </span>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 400,
            background:
              "linear-gradient(0deg, #1A2744 0%, rgba(26,39,68,0.6) 50%, transparent 100%)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 200,
            background:
              "linear-gradient(180deg, rgba(26,39,68,0.7) 0%, transparent 100%)",
            zIndex: 2,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 280,
            background:
              "linear-gradient(90deg, rgba(26,39,68,0.85) 0%, transparent 100%)",
            zIndex: 2,
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          right: 20,
          top: 180,
          fontSize: 340,
          fontWeight: 900,
          color: `rgba(212,32,39,${numberOpacity})`,
          zIndex: 9,
          lineHeight: 1,
          letterSpacing: -10,
          fontFamily,
        }}
      >
        {player.number}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 140,
          left: 0,
          right: 0,
          zIndex: 20,
          padding: "0 50px",
          direction: "rtl",
          transform: `translateX(${-nameX}px)`,
          opacity: nameOpacity,
          fontFamily,
        }}
      >
        <div
          style={{
            width: 50,
            height: 4,
            background: "#D42027",
            marginBottom: 18,
            borderRadius: 2,
          }}
        />
        {/* Name row: Arabic name on right, booking CTA on left */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: isStudent ? 42 : 88,
              fontWeight: 900,
              color: "#fff",
              lineHeight: isStudent ? 1.5 : 1.1,
              textShadow: "0 4px 30px rgba(0,0,0,0.5)",
              flex: "0 0 auto",
              direction: "rtl",
            }}
          >
            {isStudent ? (
              <>
                <span dir="rtl"><TypewriterText text="تفتكر مين المهاجم بتاعنا ؟؟؟" startFrame={10} charsPerFrame={1.2} /></span>
                <br />
                <span style={{ color: "#D42027" }} dir="rtl">
                  <TypewriterText text="... جاهز ؟؟؟؟؟" startFrame={45} charsPerFrame={0.8} />
                </span>
              </>
            ) : (
              player.nameAr
            )}
          </div>

          {/* Booking CTA — two stacked buttons */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 10,
              opacity: tagOpacity,
              direction: "rtl",
            }}
          >
            <div
              style={{
                position: "relative",
                padding: "18px 36px",
                borderRadius: 16,
                background: "rgba(212,32,39,0.9)",
                border: "2px solid rgba(255,255,255,0.2)",
                boxShadow: "0 8px 32px rgba(212,32,39,0.4)",
                textAlign: "center",
                overflow: "hidden",
              }}
            >
              <Img
                src={staticFile("icons/harv-logo.png")}
                style={{
                  position: "absolute",
                  left: -10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 90,
                  height: 85,
                  objectFit: "contain",
                  opacity: 0.12,
                  filter: "brightness(0) invert(1)",
                }}
              />
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 900,
                  color: "#fff",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                حجز هارفورد بدأ
              </span>
            </div>
            <div
              style={{
                padding: "14px 36px",
                borderRadius: 16,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                textAlign: "center",
              }}
            >
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                الحق إحجز مكانك 2027
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: 6,
            direction: "ltr",
            textAlign: "right",
            marginTop: 6,
          }}
        >
          {player.nameEn}
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            marginTop: 22,
            padding: "16px 40px",
            borderRadius: 28,
            background: "rgba(212,32,39,0.12)",
            border: "1px solid rgba(212,32,39,0.35)",
            opacity: tagOpacity,
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Shimmer flair */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)`,
              backgroundSize: "200% 100%",
              backgroundPosition: `${interpolate(frame % 45, [0, 35], [-100, 200], { extrapolateLeft: "clamp", extrapolateRight: "clamp" })}% 0`,
              pointerEvents: "none",
            }}
          />
          <span style={{ fontSize: 30, fontWeight: 700, color: "#D42027", position: "relative", zIndex: 1 }}>
            {player.subjectAr}
          </span>
          <span
            style={{
              fontSize: 20,
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              letterSpacing: 3,
              position: "relative",
              zIndex: 1,
            }}
          >
            {player.subject}
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          zIndex: 20,
          opacity: tagOpacity,
          fontFamily,
        }}
      >
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{ width: 32, height: 30, objectFit: "contain" }}
        />
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#4A5B78",
            direction: "rtl",
          }}
        >
          معاك للنهاية
        </span>
      </div>
    </>
  );
};

// =============================================
//  MANAGEMENT TITLE CARD
// =============================================
const ManagementTitle: React.FC = () => {
  const frame = useCurrentFrame();

  const barWidth = interpolate(frame, [0, 25], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const barOpacity = interpolate(frame, [0, 10, 60, 80], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleOpacity = interpolate(frame, [10, 25, 60, 80], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [10, 30], [50, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subOpacity = interpolate(frame, [20, 35, 60, 80], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [15, 40], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          width: barWidth,
          height: 3,
          background: "linear-gradient(90deg, #C8A84E, #E8D48B, #C8A84E)",
          zIndex: 28,
          opacity: barOpacity,
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 20,
          fontFamily,
        }}
      >
        <div
          style={{
            width: lineWidth,
            height: 3,
            background: "linear-gradient(90deg, transparent, #C8A84E, transparent)",
            marginBottom: 30,
            borderRadius: 2,
          }}
        />
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: "#fff",
              direction: "rtl",
              lineHeight: 1.2,
            }}
          >
            الدكة
          </div>
        </div>
        <div style={{ opacity: subOpacity, marginTop: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "12px 40px",
              borderRadius: 28,
              border: "1px solid rgba(200,168,78,0.3)",
              background: "rgba(200,168,78,0.08)",
            }}
          >
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#C8A84E",
                letterSpacing: 8,
              }}
            >
              SUBSTITUTES
            </span>
          </div>
        </div>
        <div
          style={{
            width: lineWidth,
            height: 3,
            background: "linear-gradient(90deg, transparent, #C8A84E, transparent)",
            marginTop: 30,
            borderRadius: 2,
          }}
        />
      </div>
    </>
  );
};

// =============================================
//  SINGLE MANAGER CARD (used in dual layout)
// =============================================
const ManagerCard: React.FC<{
  manager: Manager;
  side: "left" | "right";
}> = ({ manager, side }) => {
  const frame = useCurrentFrame();
  const hasPhoto = manager.photo !== "";

  const slideFrom = side === "left" ? -540 : 540;
  const slideX = interpolate(frame, [side === "left" ? 5 : 12, side === "left" ? 30 : 37], [slideFrom, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const cardOpacity = interpolate(frame, [side === "left" ? 5 : 12, side === "left" ? 20 : 27], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const nameOpacity = interpolate(frame, [30, 45], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const tagOpacity = interpolate(frame, [40, 55], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: side === "left" ? 0 : "50%",
        width: "50%",
        transform: `translateX(${slideX}px)`,
        opacity: cardOpacity,
        overflow: "hidden",
      }}
    >
      {/* Photo area */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 20,
          right: 20,
          bottom: 520,
          borderRadius: 16,
          overflow: "hidden",
        }}
      >
        {hasPhoto ? (
          <Img
            src={staticFile(`teachers/${manager.photo}`)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 10%",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "linear-gradient(160deg, #1A2744 0%, #243558 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("icons/harv-logo.png")}
              style={{ width: 120, height: 113, objectFit: "contain", opacity: 0.08 }}
            />
          </div>
        )}

        {/* Bottom gradient */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 300,
            background:
              "linear-gradient(0deg, #1A2744 0%, rgba(26,39,68,0.6) 50%, transparent 100%)",
          }}
        />
        {/* Top gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 120,
            background:
              "linear-gradient(180deg, rgba(26,39,68,0.6) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* Name and title */}
      <div
        style={{
          position: "absolute",
          bottom: 220,
          left: 20,
          right: 20,
          zIndex: 20,
          direction: "rtl",
          textAlign: "center",
          opacity: nameOpacity,
          fontFamily,
        }}
      >
        <div
          style={{
            width: 40,
            height: 3,
            background: "#C8A84E",
            margin: "0 auto 14px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: "#fff",
            lineHeight: 1.15,
            textShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          {manager.nameAr}
        </div>
        <div
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: 4,
            direction: "ltr",
            marginTop: 6,
          }}
        >
          {manager.nameEn}
        </div>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            marginTop: 18,
            padding: "12px 28px",
            borderRadius: 24,
            background: "rgba(200,168,78,0.12)",
            border: "1px solid rgba(200,168,78,0.35)",
            opacity: tagOpacity,
          }}
        >
          <span style={{ fontSize: 22, fontWeight: 700, color: "#C8A84E" }}>
            {manager.titleAr}
          </span>
        </div>
      </div>
    </div>
  );
};

// =============================================
//  DUAL MANAGER REVEAL
// =============================================
const DualManagerReveal: React.FC = () => {
  const frame = useCurrentFrame();

  const barWidth = interpolate(frame, [0, 20], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const barOpacity = interpolate(frame, [0, 10, 25, 35], [0, 0.8, 0.8, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const dividerOpacity = interpolate(frame, [20, 40], [0, 0.15], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const footerOpacity = interpolate(frame, [50, 65], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      {/* Gold sweep bar */}
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 0,
          width: barWidth,
          height: 4,
          background: "linear-gradient(90deg, #C8A84E, #E8D48B, #C8A84E)",
          zIndex: 28,
          opacity: barOpacity,
        }}
      />

      {/* Center divider line */}
      <div
        style={{
          position: "absolute",
          top: 140,
          bottom: 200,
          left: "50%",
          width: 1,
          background: "linear-gradient(180deg, transparent, rgba(200,168,78,0.5), transparent)",
          opacity: dividerOpacity,
          zIndex: 15,
        }}
      />

      {/* Left manager */}
      <ManagerCard manager={MANAGERS[0]} side="left" />

      {/* Right manager */}
      <ManagerCard manager={MANAGERS[1]} side="right" />

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 44,
          left: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 14,
          zIndex: 20,
          opacity: footerOpacity,
          fontFamily,
        }}
      >
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{ width: 32, height: 30, objectFit: "contain" }}
        />
        <span
          style={{
            fontSize: 16,
            fontWeight: 600,
            color: "#4A5B78",
            direction: "rtl",
          }}
        >
          معاك للنهاية
        </span>
      </div>
    </>
  );
};

// =============================================
//  CLOSING SLIDE — Full Squad Reveal
// =============================================
const ClosingSlide: React.FC = () => {
  const frame = useCurrentFrame();

  const boardScale = interpolate(frame, [0, 40], [0.85, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const boardOpacity = interpolate(frame, [0, 25], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [15, 35], [30, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const lineWidth = interpolate(frame, [10, 40], [0, 160], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const footerOpacity = interpolate(frame, [50, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      {/* Title */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          textAlign: "center",
          zIndex: 30,
          fontFamily,
        }}
      >
        <div
          style={{
            width: lineWidth,
            height: 3,
            background: "linear-gradient(90deg, transparent, #D42027, transparent)",
            margin: "0 auto 20px",
            borderRadius: 2,
          }}
        />
        <div
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          <div
            style={{
              fontSize: 48,
              fontWeight: 900,
              color: "#fff",
              direction: "rtl",
              lineHeight: 1.2,
            }}
          >
            التشكيلة الكاملة
          </div>
          <div
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "rgba(255,255,255,0.4)",
              direction: "rtl",
              marginTop: 6,
            }}
          >
            موسم 2026/2027
          </div>
        </div>
        <div style={{ opacity: subOpacity, marginTop: 16 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 16,
              padding: "10px 36px",
              borderRadius: 28,
              border: "1px solid rgba(212,32,39,0.3)",
              background: "rgba(212,32,39,0.08)",
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#D42027",
                letterSpacing: 8,
              }}
            >
              FULL SQUAD
            </span>
            <span
              style={{
                fontSize: 16,
                fontWeight: 700,
                color: "rgba(255,255,255,0.4)",
                letterSpacing: 4,
              }}
            >
              4 — 3 — 3
            </span>
          </div>
        </div>
      </div>

      {/* Full squad board — centered */}
      <div
        style={{
          position: "absolute",
          top: 320,
          left: "50%",
          transform: `translateX(-50%) scale(${boardScale})`,
          transformOrigin: "top center",
          zIndex: 25,
          opacity: boardOpacity,
        }}
      >
        <FullSquadBoard />
      </div>

      {/* Footer */}
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          zIndex: 30,
          opacity: footerOpacity,
          fontFamily,
        }}
      >
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{ width: 64, height: 60, objectFit: "contain" }}
        />
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "rgba(255,255,255,0.35)",
            direction: "rtl",
          }}
        >
          معاك للنهاية
        </span>
      </div>
    </>
  );
};

// =============================================
//  RESERVES TABLE — full screen, highlight scrolls
// =============================================
const ReservesTable: React.FC<{ items: { nameAr: string; nameEn: string; subjectAr: string; photo: string; number: number }[]; highlightFrames: number; label: string }> = ({ items, highlightFrames, label }) => {
  const frame = useCurrentFrame();
  const activeIdx = Math.min(Math.floor(frame / highlightFrames), items.length - 1);

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 20, fontFamily, direction: "rtl" }}>
      {/* Section label */}
      <div style={{ position: "absolute", top: 110, left: 0, right: 0, textAlign: "center", opacity: titleOpacity }}>
        <span style={{ fontSize: 36, fontWeight: 900, color: "#C8A84E", letterSpacing: 2 }}>{label}</span>
      </div>

      {/* Active player photo — large on the right */}
      <div style={{ position: "absolute", top: 160, left: 40, width: 400, height: 500, overflow: "hidden", borderRadius: 20 }}>
        {items[activeIdx]?.photo && (
          <Img
            src={staticFile(`teachers/${items[activeIdx].photo}`)}
            style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center",
              opacity: interpolate(frame % highlightFrames, [0, 8], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
              transform: `scale(${interpolate(frame % highlightFrames, [0, 15], [1.05, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) })})`,
            }}
          />
        )}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 200, background: "linear-gradient(0deg, #1A2744, transparent)" }} />
      </div>

      {/* Table list on the left */}
      <div style={{ position: "absolute", top: 700, left: 40, right: 40, display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => {
          const isActive = i === activeIdx;
          return (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "center", gap: 16, padding: isActive ? "16px 24px" : "10px 24px",
                borderRadius: 14,
                background: isActive ? "rgba(212,32,39,0.15)" : "rgba(255,255,255,0.03)",
                border: isActive ? "1px solid rgba(212,32,39,0.4)" : "1px solid rgba(255,255,255,0.06)",
                transition: "none",
              }}
            >
              <span style={{ fontSize: 18, fontWeight: 700, color: isActive ? "#D42027" : "rgba(255,255,255,0.3)", minWidth: 36 }}>
                {item.number}
              </span>
              <span style={{ fontSize: isActive ? 32 : 22, fontWeight: isActive ? 900 : 600, color: isActive ? "#fff" : "rgba(255,255,255,0.5)", flex: 1 }}>
                {item.nameAr}
              </span>
              <span style={{ fontSize: 14, fontWeight: 600, color: isActive ? "#C8A84E" : "rgba(255,255,255,0.2)" }}>
                {item.subjectAr}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// =============================================
//  LOGO END CARD
// =============================================
const LogoEndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const logoScale = interpolate(frame, [0, 30], [0.5, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp", easing: Easing.out(Easing.cubic) });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const taglineOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 30, zIndex: 20, fontFamily }}>
      <Img src={staticFile("icons/harv-logo.png")} style={{ width: 160, height: 150, objectFit: "contain", opacity: logoOpacity, transform: `scale(${logoScale})` }} />
      <div style={{ opacity: taglineOpacity, textAlign: "center", direction: "rtl" }}>
        <div style={{ fontSize: 38, fontWeight: 900, color: "#fff" }}>
          <TypewriterText text="جاهز تنضم للفريق؟" startFrame={0} charsPerFrame={1.5} />
        </div>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#D42027", marginTop: 16 }}>
          <TypewriterText text="الحق مكانك معانا · حجز 2027" startFrame={15} charsPerFrame={1.2} />
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: 6, marginTop: 20 }}>HARV FC 2027</div>
      </div>
    </div>
  );
};

// =============================================
//  MAIN COMPOSITION
// =============================================
export const LineupVideo: React.FC = () => {
  const frame = useCurrentFrame();

  const isIntro = frame < INTRO_FRAMES;
  const isBenchOrLater = frame >= BENCH_TITLE_START;
  const isManagement = isBenchOrLater;
  const isClosing = frame >= CLOSING_START;

  const revealIdx = isIntro
    ? -1
    : Math.min(
        Math.floor((frame - INTRO_FRAMES) / REVEAL_FRAMES),
        DEMO_ORDER.length - 1,
      );
  const activePlayerIdx =
    revealIdx >= 0 && !isManagement ? DEMO_ORDER[revealIdx] : -1;

  // =============================================
  //  INTRO ANIMATIONS
  // =============================================

  // Red sweep bar — immediate visual hook at frame 0
  const introBarWidth = interpolate(frame, [0, 15], [0, 1080], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const introBarOpacity = interpolate(frame, [0, 5, 20, 30], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Logo — appears immediately at top center, then moves to header
  const logoIntroScale = interpolate(
    frame,
    [0, 10, 65, 85],
    [0.6, 0.6, 0.6, 0.38],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );
  const logoIntroOpacity = interpolate(frame, [0, 6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const logoTopCenterX = 540 - 36;
  const logoTopCenterY = 80;
  const logoHeaderX = 44;
  const logoHeaderY = 18;
  const logoX = interpolate(frame, [65, 85], [logoTopCenterX, logoHeaderX], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });
  const logoY = interpolate(frame, [65, 85], [logoTopCenterY, logoHeaderY], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  // Title text — appears fast, sits above the big board
  const titleOpacity = interpolate(frame, [4, 14, 60, 75], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const titleY = interpolate(frame, [4, 14], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.cubic),
  });
  const subOpacity = interpolate(frame, [10, 20, 60, 75], [0, 1, 1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Header elements — appear during transition to player reveals
  const headerOtherOpacity = interpolate(frame, [70, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const headerLineOpacity = interpolate(frame, [75, 85], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // =============================================
  //  FORMATION BOARD — BIG and centered in intro, shrinks to corner
  // =============================================

  // Board starts BIG (2.5x) centered, then shrinks to 0.95x in corner
  const boardIntroOpacity = interpolate(frame, [8, 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Scale: 2.5x centered → 0.95x corner
  const boardIntroCenterX = (1080 - 300 * 2.5) / 2; // ~165
  const boardIntroCenterY = 420;
  const boardCornerX = 24;
  const boardCornerY = 100;

  const boardScale = interpolate(
    frame,
    [8, 18, 65, INTRO_FRAMES],
    [2.2, 2.5, 2.5, 0.95],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
  );
  const boardX = interpolate(
    frame,
    [65, INTRO_FRAMES],
    [boardIntroCenterX, boardCornerX],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
  );
  const boardY = interpolate(
    frame,
    [65, INTRO_FRAMES],
    [boardIntroCenterY, boardCornerY],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
  );

  const boardMgmtOpacity = isClosing
    ? 0
    : interpolate(
        frame,
        [MGMT_START, MGMT_START + 30],
        [1, 0.3],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      );

  // Dots appear one by one starting at frame 12
  const dotsRevealed = isIntro
    ? Math.min(11, Math.max(0, Math.floor((frame - 12) / 3)))
    : 11;

  return (
    <div
      style={{
        width: 1080,
        height: 1920,
        background: "#1A2744",
        fontFamily,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* ===== LARGE WATERMARK LOGO PATTERN ===== */}
      <div
        style={{
          position: "absolute",
          inset: "-20%",
          backgroundImage: `url(${staticFile("tiles/mark.png")})`,
          backgroundSize: "700px auto",
          backgroundRepeat: "repeat",
          backgroundPosition: "center center",
          transform: "rotate(-8deg)",
          opacity: 0.012,
          filter: "brightness(10)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(212,32,39,0.04) 0%, transparent 65%)",
        }}
      />

      {/* ===== INTRO RED SWEEP BAR — immediate visual hook ===== */}
      {isIntro && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            width: introBarWidth,
            height: 4,
            background: "#D42027",
            zIndex: 28,
            opacity: introBarOpacity,
          }}
        />
      )}
      {/* ===== HEADER ===== */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 88,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 44px",
          zIndex: 30,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            opacity: headerOtherOpacity,
          }}
        >
          <div style={{ width: 52, height: 49 }} />
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 900,
                color: "#fff",
                letterSpacing: 5,
                lineHeight: 1,
              }}
            >
              HARV FC
            </div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 600,
                color: "#7D8AA0",
                letterSpacing: 2,
              }}
            >
              مركز هارفورد التعليمي
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            opacity: headerOtherOpacity,
          }}
        >
          <div
            style={{
              width: 38,
              height: 26,
              borderRadius: 3,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ flex: 1, background: "#CE1126" }} />
            <div style={{ flex: 1, background: "#fff" }} />
            <div style={{ flex: 1, background: "#000" }} />
          </div>
          <Img
            src={staticFile("icons/wc2026.png")}
            style={{ height: 44, width: "auto" }}
            from={-89} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 88,
          left: 34,
          right: 34,
          height: 2,
          background: "#D42027",
          zIndex: 30,
          opacity: headerLineOpacity,
        }}
      />
      {/* ===== ANIMATED LOGO ===== */}
      <div
        style={{
          position: "absolute",
          left: logoX,
          top: logoY,
          zIndex: 35,
          opacity: logoIntroOpacity,
          transform: `scale(${logoIntroScale})`,
          transformOrigin: "top left",
        }}
      >
        <Img
          src={staticFile("icons/harv-logo.png")}
          style={{ width: 120, height: 113, objectFit: "contain" }}
        />
      </div>
      {/* ===== INTRO TEXT — sits above the big formation board ===== */}
      {isIntro && (
        <div
          style={{
            position: "absolute",
            top: 180,
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 20,
          }}
        >
          <div
            style={{
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
            }}
          >
            <div
              style={{
                fontSize: 52,
                fontWeight: 900,
                color: "#fff",
                direction: "rtl",
                lineHeight: 1.2,
              }}
            >
              تشكيلة هارفورد
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "rgba(255,255,255,0.5)",
                direction: "rtl",
                marginTop: 8,
              }}
            >
              موسم 2026/2027
            </div>
          </div>
          <div style={{ opacity: subOpacity, marginTop: 24 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 16,
                padding: "12px 40px",
                borderRadius: 28,
                border: "1px solid rgba(212,32,39,0.3)",
                background: "rgba(212,32,39,0.08)",
              }}
            >
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#D42027",
                  letterSpacing: 8,
                }}
              >
                STARTING XI
              </span>
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.4)",
                  letterSpacing: 4,
                }}
              >
                4 — 3 — 3
              </span>
            </div>
          </div>
        </div>
      )}
      {/* ===== FORMATION BOARD ===== */}
      <div
        style={{
          position: "absolute",
          left: boardX,
          top: boardY,
          transform: `scale(${boardScale})`,
          transformOrigin: "top left",
          zIndex: 25,
          opacity: boardIntroOpacity * boardMgmtOpacity,
        }}
      >
        <FormationBoard
          activeIndex={activePlayerIdx}
          revealedCount={dotsRevealed}
        />
      </div>
      {/* ===== STARTER REVEALS ===== */}
      {DEMO_ORDER.map((playerIdx, i) => (
        <Sequence
          key={`player-${playerIdx}`}
          from={INTRO_FRAMES + i * REVEAL_FRAMES}
          durationInFrames={REVEAL_FRAMES}
        >
          <PlayerReveal player={PLAYERS[playerIdx]} />
        </Sequence>
      ))}
      {/* ===== RESERVE + MANAGER REVEALS — same treatment, 1.5 sec each ===== */}
      {RESERVES.map((reserve, i) => (
        <Sequence
          key={`reserve-${reserve.id}`}
          from={RESERVES_START + i * RESERVE_HIGHLIGHT_FRAMES}
          durationInFrames={RESERVE_HIGHLIGHT_FRAMES}
        >
          <PlayerReveal player={reserve} />
        </Sequence>
      ))}
      {/* ===== CLOSING — Full Squad Board ===== */}
      <Sequence key="closing" from={CLOSING_START} durationInFrames={CLOSING_FRAMES}>
        <ClosingSlide />
      </Sequence>
      {/* ===== LOGO END CARD ===== */}
      <Sequence key="logo-end" from={LOGO_START} durationInFrames={LOGO_END_FRAMES}>
        <LogoEndCard />
      </Sequence>

      {/* ===== PERSISTENT CONTACT STRIP — always visible after intro ===== */}
      {!isIntro && (
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 56,
            background: "#D42027",
            zIndex: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 32px",
            fontFamily,
          }}
        >
          {/* Left: inverted logo + center name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              direction: "rtl",
            }}
          >
            <Img
              src={staticFile("icons/harv-logo.png")}
              style={{
                width: 28,
                height: 26,
                objectFit: "contain",
                filter: "brightness(0) invert(1)",
              }}
            />
            <span
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              سنتر هارفارد التعليمي
            </span>
          </div>

          {/* Right: phone numbers */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              direction: "ltr",
            }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: 0.5,
              }}
            >
              01064949395
            </span>
            <div
              style={{
                width: 1,
                height: 14,
                background: "rgba(255,255,255,0.3)",
              }}
            />
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: 0.5,
              }}
            >
              01223463448
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
