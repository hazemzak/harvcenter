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
}

export interface Manager {
  id: string;
  nameAr: string;
  nameEn: string;
  titleAr: string;
  photo: string;
}

export const PLAYERS: Player[] = [
  // GK
  {
    id: "shenawy",
    nameAr: "الشناوي",
    nameEn: "EL SHENAWY",
    subject: "Chemistry",
    subjectAr: "كيمياء",
    number: 1,
    photo: "shenawy.png",
    fx: 50,
    fy: 90,
  },
  // DEF — 4-3-3
  {
    id: "essam",
    nameAr: "عصام خطاب",
    nameEn: "ESSAM KHATTAB",
    subject: "German",
    subjectAr: "ألماني",
    number: 2,
    photo: "essam.png",
    fx: 12,
    fy: 70,
  },
  {
    id: "tolba",
    nameAr: "محمد طلبة",
    nameEn: "MOHAMED TOLBA",
    subject: "History",
    subjectAr: "تاريخ",
    number: 3,
    photo: "tolba.png",
    video: "tolba.mp4",
    fx: 37,
    fy: 73,
  },
  {
    id: "milad",
    nameAr: "ميلاد ادوارد",
    nameEn: "MILAD EDWARD",
    subject: "English",
    subjectAr: "إنجليزي",
    number: 4,
    photo: "milad.png",
    fx: 63,
    fy: 73,
  },
  {
    id: "reda",
    nameAr: "رضا الفاروق",
    nameEn: "REDA EL FAROUK",
    subject: "Arabic",
    subjectAr: "عربي",
    number: 5,
    photo: "reda.png",
    fx: 88,
    fy: 70,
  },
  // MID
  {
    id: "sayed",
    nameAr: "السيد عبدالعزيز",
    nameEn: "EL SAYED ABDELAZIZ",
    subject: "Arabic",
    subjectAr: "عربي",
    number: 6,
    photo: "sayed.png",
    fx: 25,
    fy: 48,
  },
  {
    id: "elgyoshi",
    nameAr: "محمد الجيوشي",
    nameEn: "MOHAMED EL GYOSHI",
    subject: "Subject",
    subjectAr: "المادة",
    number: 7,
    photo: "",
    fx: 50,
    fy: 43,
  },
  {
    id: "sabry",
    nameAr: "محمد صبري",
    nameEn: "MOHAMED SABRY",
    subject: "Subject",
    subjectAr: "المادة",
    number: 8,
    photo: "",
    fx: 75,
    fy: 48,
  },
  // FWD
  {
    id: "mazen",
    nameAr: "مازن الحيوان",
    nameEn: "MAZEN EL HAYAWAN",
    subject: "Subject",
    subjectAr: "المادة",
    number: 9,
    photo: "",
    fx: 18,
    fy: 22,
  },
  {
    id: "alisalah",
    nameAr: "علي صلاح",
    nameEn: "ALI SALAH",
    subject: "Philosophy",
    subjectAr: "فلسفة",
    number: 10,
    photo: "alisalah.png",
    fx: 50,
    fy: 18,
  },
  // RW — like the real Salah
  {
    id: "salah",
    nameAr: "محمد صلاح",
    nameEn: "MOHAMED SALAH",
    subject: "English",
    subjectAr: "إنجليزي",
    number: 11,
    photo: "salah.png",
    video: "salah.mp4",
    fx: 82,
    fy: 22,
  },
];

export const MANAGERS: Manager[] = [
  {
    id: "ahmed",
    nameAr: "أحمد زكريا الحكيم",
    nameEn: "AHMED ZAKARIA",
    titleAr: "المدير الفني",
    photo: "ahmed.jpeg",
  },
  {
    id: "mahmoud",
    nameAr: "محمود عبدالمعطي",
    nameEn: "MAHMOUD ABDEL MOATY",
    titleAr: "مدير التعاقدات",
    photo: "mahmoud.jpeg",
  },
];

// Full reveal order: all 11 players by position (GK → DEF → MID → FWD)
export const REVEAL_ORDER = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const DEMO_ORDER = REVEAL_ORDER;
