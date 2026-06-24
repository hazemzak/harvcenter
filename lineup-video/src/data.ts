export interface Player {
  id: string;
  nameAr: string;
  nameEn: string;
  subject: string;
  subjectAr: string;
  number: number;
  photo: string;
  video?: string;
  fx: number;
  fy: number;
  isReserve?: boolean;
}

export interface Manager {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  photo: string;
}

export const STARTERS: Player[] = [
  // GK
  {
    id: "shenawy", nameAr: "أشرف الشناوي", nameEn: "EL SHENAWY",
    subject: "Chemistry", subjectAr: "كيمياء", number: 1,
    photo: "shenawy ai.png", fx: 50, fy: 90,
  },
  // DEF — 4 back
  {
    id: "reda", nameAr: "رضا الفاروق", nameEn: "REDA EL FAROUK",
    subject: "Arabic", subjectAr: "عربي", number: 3,
    photo: "reda 2.png", fx: 38, fy: 75,
  },
  {
    id: "sayed", nameAr: "السيد عبدالعزيز", nameEn: "EL SAYED ABDELAZIZ",
    subject: "Arabic", subjectAr: "عربي", number: 5,
    photo: "sayed ai.png", fx: 62, fy: 75,
  },
  {
    id: "nasser", nameAr: "ناصر البطل", nameEn: "NASSER EL BATAL",
    subject: "Chemistry", subjectAr: "كيمياء", number: 6,
    photo: "nasser ai.png", fx: 15, fy: 72,
  },
  {
    id: "abdelmoeez", nameAr: "عبدالمعز إسماعيل", nameEn: "ABDELMOEEZ ISMAIL",
    subject: "German", subjectAr: "ألماني", number: 9,
    photo: "abdelmoeez ai.png", fx: 85, fy: 72,
  },
  // MID — 3
  {
    id: "tamer", nameAr: "تامر القاضي", nameEn: "TAMER EL QADI",
    subject: "Physics", subjectAr: "فيزياء", number: 2,
    photo: "tamer el qady ai.png", fx: 25, fy: 50,
  },
  {
    id: "deif", nameAr: "د. ضيف", nameEn: "DR. DEIF",
    subject: "Biology", subjectAr: "أحياء", number: 8,
    photo: "deif ai.png", fx: 50, fy: 45,
  },
  {
    id: "tolba", nameAr: "محمد طلبة", nameEn: "MOHAMED TOLBA",
    subject: "History", subjectAr: "تاريخ", number: 4,
    photo: "tolba ai.png", fx: 75, fy: 50,
  },
  // FWD — 3
  {
    id: "raeia", nameAr: "عمر رعية", nameEn: "OMAR RAEIA",
    subject: "Physics", subjectAr: "فيزياء", number: 23,
    photo: "raeia ai.png", fx: 20, fy: 25,
  },
  {
    id: "salah", nameAr: "محمد صلاح", nameEn: "MOHAMED SALAH",
    subject: "English", subjectAr: "إنجليزي", number: 11,
    photo: "salah ai.png", fx: 80, fy: 25,
  },
  {
    id: "student", nameAr: "‏؟؟؟؟؟؟", nameEn: "??????",
    subject: "‏؟؟؟", subjectAr: "أنت", number: 10,
    photo: "default-avatar.png", fx: 50, fy: 18,
  },
];

export const RESERVES: Player[] = [
  {
    id: "bardisi", nameAr: "محمد البرديسي", nameEn: "EL BARDISI",
    subject: "French", subjectAr: "فرنسي", number: 20,
    photo: "bardeesy ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "alisalah", nameAr: "علي صلاح", nameEn: "ALI SALAH",
    subject: "Psychology", subjectAr: "علم نفس", number: 21,
    photo: "ali salah ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "tarek", nameAr: "طارق عصام", nameEn: "TAREK ESSAM",
    subject: "Chemistry", subjectAr: "كيمياء", number: 27,
    photo: "tarek ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "magd", nameAr: "محمد مجد", nameEn: "MOHAMED MAGD",
    subject: "Math", subjectAr: "رياضيات", number: 28,
    photo: "magd ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "mazen", nameAr: "مازن الحيوان", nameEn: "MAZEN ELHAIWAN",
    subject: "Statistics", subjectAr: "إحصاء", number: 26,
    photo: "mazen 2.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "sabry", nameAr: "محمد صبري", nameEn: "MOHAMED SABRY",
    subject: "Math", subjectAr: "رياضيات", number: 24,
    photo: "sabry ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "gioushy", nameAr: "محمد الجيوشي", nameEn: "EL GIOSHY",
    subject: "Physics", subjectAr: "فيزياء", number: 12,
    photo: "gioushy ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "abdelmaboud", nameAr: "محمد عبدالمعبود", nameEn: "ABDELMAABOUD",
    subject: "Physics", subjectAr: "فيزياء", number: 25,
    photo: "abdelmaaboud ai.png", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "ahmed", nameAr: "أحمد زكريا الحكيم", nameEn: "AHMED ZAKARIA",
    subject: "", subjectAr: "المدير الفني", number: 0,
    photo: "ahmed.jpeg", fx: 0, fy: 0, isReserve: true,
  },
  {
    id: "mahmoud", nameAr: "محمود عبدالمعطي", nameEn: "MAHMOUD ABDEL MOATY",
    subject: "", subjectAr: "مدير التعاقدات", number: 0,
    photo: "mahmoud.jpeg", fx: 0, fy: 0, isReserve: true,
  },
];

export const PLAYERS: Player[] = [...STARTERS, ...RESERVES];

export const MANAGERS: Manager[] = [
  {
    id: "ahmed", nameAr: "أحمد زكريا الحكيم", nameEn: "AHMED ZAKARIA",
    titleAr: "المدير الفني", photo: "ahmed.jpeg",
  },
  {
    id: "mahmoud", nameAr: "محمود عبدالمعطي", nameEn: "MAHMOUD ABDEL MOATY",
    titleAr: "مدير التعاقدات", photo: "mahmoud.jpeg",
  },
];

// Reveal order: starters by position (GK → DEF → MID → FWD), then reserves
export const REVEAL_ORDER = Array.from({ length: STARTERS.length }, (_, i) => i);
export const DEMO_ORDER = REVEAL_ORDER;
