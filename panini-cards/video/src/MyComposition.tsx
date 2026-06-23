import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming } from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { PaniniCard, TeacherData } from "./PaniniCard";
import { CardBackWithCTA } from "./CardBackWithCTA";

export const englishTeachers: TeacherData[] = [
  {
    id: "milad", nameEn: "MR. MILAD MOURAD", nameAr: "أ. ميلاد مراد",
    ovr: 89, pos: "RW", posLabel: "RIGHT WING", shirtNum: 7,
    subject: "ENGLISH", subjectAr: "لغة إنجليزية", tile: "tile-english.png",
    stats: [
      { val: 97, label: "شرح واضح" }, { val: 98, label: "صبر لامحدود" }, { val: 96, label: "أسلوب مميز" },
      { val: 97, label: "إتقان اللغة" }, { val: 98, label: "تشجيع الطلاب" }, { val: 95, label: "حماس دائم" },
    ],
  },
  {
    id: "salah", nameEn: "MR. MOHMED SALAH", nameAr: "أ. محمد صلاح",
    ovr: 94, pos: "LW", posLabel: "LEFT WING", shirtNum: 11,
    subject: "ENGLISH", subjectAr: "لغة إنجليزية", tile: "tile-english.png",
    stats: [
      { val: 99, label: "شرح احترافي" }, { val: 98, label: "صبر وتفاني" }, { val: 97, label: "أسلوب ممتع" },
      { val: 99, label: "إلمام بالمادة" }, { val: 98, label: "تحفيز عالي" }, { val: 97, label: "طاقة لا تنتهي" },
    ],
  },
  {
    id: "atef", nameEn: "MR. AHMED ATEF", nameAr: "أ. أحمد عاطف",
    ovr: 90, pos: "ST", posLabel: "STRIKER", shirtNum: 9,
    subject: "ENGLISH", subjectAr: "لغة إنجليزية", tile: "tile-english.png",
    stats: [
      { val: 97, label: "شرح سلس" }, { val: 96, label: "هدوء وثبات" }, { val: 99, label: "أسلوب راقي" },
      { val: 98, label: "معلومة دقيقة" }, { val: 97, label: "ثقة بالطلاب" }, { val: 96, label: "حضور قوي" },
    ],
  },
  {
    id: "adel", nameEn: "ADEL NABIL", nameAr: "عادل نبيل",
    ovr: 90, pos: "RB", posLabel: "RIGHT BACK", shirtNum: 14,
    subject: "ENGLISH", subjectAr: "لغة إنجليزية", tile: "tile-english.png",
    stats: [
      { val: 97, label: "شرح منظم" }, { val: 96, label: "صبر ودقة" }, { val: 98, label: "إتقان اللغة" },
      { val: 97, label: "تشجيع الطلاب" }, { val: 96, label: "أسلوب عملي" }, { val: 95, label: "حماس دائم" },
    ],
  },
];

export const physicsTeachers: TeacherData[] = [
  {
    id: "tamer", nameEn: "TAMER EL-QADI", nameAr: "تامر القاضي",
    ovr: 92, pos: "CB", posLabel: "CENTER BACK", shirtNum: 2,
    subject: "PHYSICS", subjectAr: "فيزياء", tile: "tile-physics.png",
    stats: [
      { val: 98, label: "شرح علمي" }, { val: 99, label: "تبسيط القوانين" }, { val: 97, label: "أسلوب تحليلي" },
      { val: 98, label: "إلمام شامل" }, { val: 97, label: "تحفيز عالي" }, { val: 96, label: "حضور قوي" },
    ],
  },
  {
    id: "samir", nameEn: "AHMED SAMIR", nameAr: "أحمد سمير",
    ovr: 91, pos: "CDM", posLabel: "DEF. MIDFIELD", shirtNum: 13,
    subject: "PHYSICS", subjectAr: "فيزياء", tile: "tile-physics.png",
    stats: [
      { val: 97, label: "شرح مبسط" }, { val: 98, label: "صبر لامحدود" }, { val: 96, label: "أسلوب عملي" },
      { val: 97, label: "دقة علمية" }, { val: 96, label: "تحفيز مستمر" }, { val: 95, label: "طاقة إيجابية" },
    ],
  },
  {
    id: "nawar", nameEn: "AHMED NAWAR", nameAr: "أحمد نوار",
    ovr: 90, pos: "CM", posLabel: "MIDFIELDER", shirtNum: 15,
    subject: "PHYSICS", subjectAr: "فيزياء", tile: "tile-physics.png",
    stats: [
      { val: 98, label: "شرح تفاعلي" }, { val: 97, label: "فهم عميق" }, { val: 96, label: "أسلوب ذكي" },
      { val: 97, label: "خبرة واسعة" }, { val: 98, label: "ثقة بالطلاب" }, { val: 96, label: "حماس دائم" },
    ],
  },
  {
    id: "mogli", nameEn: "AHMED SAMIR MOGLI", nameAr: "أحمد سمير مجلي",
    ovr: 92, pos: "LW", posLabel: "LEFT WING", shirtNum: 17,
    subject: "PHYSICS", subjectAr: "فيزياء", tile: "tile-physics.png",
    stats: [
      { val: 97, label: "شرح احترافي" }, { val: 98, label: "تبسيط المسائل" }, { val: 96, label: "أسلوب ممتع" },
      { val: 98, label: "معلومة دقيقة" }, { val: 97, label: "تحفيز عالي" }, { val: 96, label: "حضور قوي" },
    ],
  },
];

export const arabicTeachers: TeacherData[] = [
  {
    id: "reda", nameEn: "REDA EL-FAROUQ", nameAr: "أ. رضا الفاروق",
    ovr: 93, pos: "RB", posLabel: "RIGHT BACK", shirtNum: 5,
    subject: "ARABIC", subjectAr: "لغة عربية", tile: "tile-arabic.png",
    stats: [
      { val: 98, label: "شرح بليغ" }, { val: 97, label: "صبر وحكمة" }, { val: 99, label: "أسلوب أدبي" },
      { val: 98, label: "إتقان اللغة" }, { val: 97, label: "تشجيع الطلاب" }, { val: 96, label: "حماس دائم" },
    ],
  },
  {
    id: "sayed", nameEn: "SAYED ABDELAZIZ", nameAr: "أ. السيد عبدالعزيز",
    ovr: 91, pos: "CM", posLabel: "MIDFIELDER", shirtNum: 6,
    subject: "ARABIC", subjectAr: "لغة عربية", tile: "tile-arabic.png",
    stats: [
      { val: 97, label: "شرح واضح" }, { val: 98, label: "صبر لامحدود" }, { val: 96, label: "أسلوب مميز" },
      { val: 99, label: "إلمام بالمادة" }, { val: 97, label: "تحفيز عالي" }, { val: 96, label: "طاقة إيجابية" },
    ],
  },
];

export const languageTeachers: TeacherData[] = [
  {
    id: "essam", nameEn: "ESSAM KHATTAB", nameAr: "أ. عصام خطاب",
    ovr: 90, pos: "RB", posLabel: "RIGHT BACK", shirtNum: 2,
    subject: "GERMAN", subjectAr: "لغة ألمانية", tile: "tile-german.png",
    stats: [
      { val: 97, label: "شرح واضح" }, { val: 96, label: "صبر ودقة" }, { val: 98, label: "أسلوب مميز" },
      { val: 97, label: "إتقان اللغة" }, { val: 96, label: "تشجيع الطلاب" }, { val: 95, label: "حماس دائم" },
    ],
  },
  {
    id: "abdelmoeez", nameEn: "ABDELMOEEZ ISMAIL", nameAr: "أ. عبدالمعز اسماعيل",
    ovr: 89, pos: "CDM", posLabel: "DEF. MIDFIELD", shirtNum: 16,
    subject: "GERMAN", subjectAr: "لغة ألمانية", tile: "tile-german.png",
    stats: [
      { val: 96, label: "شرح منظم" }, { val: 98, label: "صبر لامحدود" }, { val: 95, label: "أسلوب عملي" },
      { val: 97, label: "إلمام بالمادة" }, { val: 96, label: "تحفيز عالي" }, { val: 95, label: "طاقة إيجابية" },
    ],
  },
  {
    id: "nasser", nameEn: "MAHMOUD NASR", nameAr: "أ. محمود نصر",
    ovr: 88, pos: "LB", posLabel: "LEFT BACK", shirtNum: 3,
    subject: "GERMAN", subjectAr: "لغة ألمانية", tile: "tile-german.png",
    stats: [
      { val: 95, label: "شرح سلس" }, { val: 97, label: "هدوء وثبات" }, { val: 96, label: "أسلوب ذكي" },
      { val: 98, label: "معلومة دقيقة" }, { val: 95, label: "ثقة بالطلاب" }, { val: 96, label: "حضور قوي" },
    ],
  },
  {
    id: "bardisi", nameEn: "MOHAMED EL-BARDISI", nameAr: "أ. محمد البرديسي",
    ovr: 91, pos: "CAM", posLabel: "ATT. MIDFIELD", shirtNum: 8,
    subject: "FRENCH", subjectAr: "لغة فرنسية", tile: "tile-french.png",
    stats: [
      { val: 98, label: "شرح احترافي" }, { val: 97, label: "صبر وتفاني" }, { val: 99, label: "أسلوب ممتع" },
      { val: 98, label: "إتقان اللغة" }, { val: 97, label: "تحفيز عالي" }, { val: 96, label: "طاقة لا تنتهي" },
    ],
  },
  {
    id: "elqot", nameEn: "MOHAMED EL-QOT", nameAr: "أ. محمد القط",
    ovr: 90, pos: "LW", posLabel: "LEFT WING", shirtNum: 22,
    subject: "ITALIAN", subjectAr: "لغة إيطالية", tile: "tile-italian.png",
    stats: [
      { val: 97, label: "شرح تفاعلي" }, { val: 96, label: "فهم عميق" }, { val: 98, label: "أسلوب راقي" },
      { val: 97, label: "خبرة واسعة" }, { val: 98, label: "تشجيع الطلاب" }, { val: 96, label: "حماس دائم" },
    ],
  },
];

export const restTeachers: TeacherData[] = [
  {
    id: "haitham", nameEn: "DR. HAITHAM ATIA", nameAr: "د. هيثم عطية",
    ovr: 91, pos: "CAM", posLabel: "ATT. MIDFIELD", shirtNum: 10,
    subject: "BUSINESS", subjectAr: "إدارة أعمال", tile: "tile-business.png",
    stats: [
      { val: 93, label: "شرح واضح" }, { val: 88, label: "صبر ودقة" }, { val: 95, label: "أسلوب مميز" },
      { val: 92, label: "إلمام بالمادة" }, { val: 89, label: "تحفيز عالي" }, { val: 87, label: "طاقة إيجابية" },
    ],
  },
  {
    id: "tolba", nameEn: "MOHAMED TOLBA", nameAr: "أ. محمد طلبة",
    ovr: 92, pos: "CB", posLabel: "CENTER BACK", shirtNum: 4,
    subject: "HISTORY", subjectAr: "تاريخ", tile: "tile-history.png",
    stats: [
      { val: 94, label: "شرح علمي" }, { val: 93, label: "صبر لامحدود" }, { val: 89, label: "أسلوب تحليلي" },
      { val: 95, label: "إلمام شامل" }, { val: 91, label: "تحفيز عالي" }, { val: 90, label: "حضور قوي" },
    ],
  },
  {
    id: "shenawy", nameEn: "EL-SHENAWY", nameAr: "أ. الشناوي",
    ovr: 93, pos: "GK", posLabel: "GOALKEEPER", shirtNum: 1,
    subject: "CHEMISTRY", subjectAr: "كيمياء", tile: "tile-chemistry.png",
    stats: [
      { val: 98, label: "شرح مبسط" }, { val: 99, label: "تبسيط المعادلات" }, { val: 97, label: "أسلوب عملي" },
      { val: 98, label: "دقة علمية" }, { val: 97, label: "تحفيز مستمر" }, { val: 96, label: "طاقة إيجابية" },
    ],
  },
  {
    id: "deif", nameEn: "DR. DEIF", nameAr: "د. ضيف",
    ovr: 90, pos: "CM", posLabel: "MIDFIELDER", shirtNum: 18,
    subject: "BIOLOGY", subjectAr: "أحياء", tile: "tile-biology.png",
    stats: [
      { val: 97, label: "شرح تفاعلي" }, { val: 96, label: "فهم عميق" }, { val: 98, label: "أسلوب علمي" },
      { val: 97, label: "خبرة واسعة" }, { val: 96, label: "ثقة بالطلاب" }, { val: 95, label: "حماس دائم" },
    ],
  },
  {
    id: "sherbini", nameEn: "OMAR EL-SHERBINI", nameAr: "أ. عمر الشربيني",
    ovr: 91, pos: "ST", posLabel: "STRIKER", shirtNum: 9,
    subject: "MATH", subjectAr: "رياضيات", tile: "tile-math.png",
    stats: [
      { val: 98, label: "شرح سلس" }, { val: 97, label: "تبسيط المسائل" }, { val: 96, label: "أسلوب ذكي" },
      { val: 99, label: "معلومة دقيقة" }, { val: 97, label: "تحفيز عالي" }, { val: 96, label: "حضور قوي" },
    ],
  },
  {
    id: "alisalah", nameEn: "ALI SALAH", nameAr: "أ. علي صلاح",
    ovr: 92, pos: "CF", posLabel: "CENTER FWD", shirtNum: 10,
    subject: "PHILOSOPHY", subjectAr: "فلسفة", tile: "tile-philosophy.png",
    stats: [
      { val: 98, label: "شرح بليغ" }, { val: 97, label: "صبر وحكمة" }, { val: 99, label: "أسلوب أدبي" },
      { val: 98, label: "إلمام شامل" }, { val: 97, label: "تشجيع الطلاب" }, { val: 96, label: "حماس دائم" },
    ],
  },
];

const TRANSITION_DURATION = 10;
const SCENE_DURATION = 68;

const CardSwipeVideo: React.FC<{ teachers: TeacherData[] }> = ({ teachers }) => {
  return (
    <AbsoluteFill style={{ background: "#0a0f1a" }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
          <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardBackWithCTA />
          </AbsoluteFill>
        </TransitionSeries.Sequence>

        {teachers.map((teacher, i) => (
          <>
            <TransitionSeries.Transition
              key={`t-${i}`}
              presentation={slide({ direction: "from-left" })}
              timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
            />
            <TransitionSeries.Sequence key={`card-${i}`} durationInFrames={SCENE_DURATION}>
              <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <PaniniCard teacher={teacher} />
              </AbsoluteFill>
            </TransitionSeries.Sequence>
          </>
        ))}

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={linearTiming({ durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE_DURATION}>
          <AbsoluteFill style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <CardBackWithCTA />
          </AbsoluteFill>
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

export const EnglishVideo: React.FC = () => <CardSwipeVideo teachers={englishTeachers} />;
export const PhysicsVideo: React.FC = () => <CardSwipeVideo teachers={physicsTeachers} />;
export const ArabicVideo: React.FC = () => <CardSwipeVideo teachers={arabicTeachers} />;
