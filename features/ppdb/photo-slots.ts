/**
 * Photo slots used on the page. Each slot is filled by dropping a photo named
 * `<slot>.jpg` (or .png/.webp) into /photos and running `npm run images`.
 * Until then, the slot renders a marked placeholder that shows `brief`.
 *
 * Only authentic Kalyca photos — no stock or AI images presented as Kalyca.
 * Identifiable children: make sure the school's media consent covers ads.
 */

export interface PhotoSlot {
  /** CSS aspect-ratio used for the frame (the photo is cropped to fit). */
  ratio: string;
  /** Alt text — update it if the chosen photo shows something different. */
  alt: string;
  /** What the photo should show (Indonesian, for whoever picks the photo). */
  brief: string;
  /** object-position focal point, e.g. "50% 30%" to keep faces in frame. */
  focus?: string;
}

const slots = {
  hero: {
    ratio: "4 / 3",
    alt: "Siswa Kalyca beraktivitas bersama guru di area kebun sekolah",
    brief:
      "Foto utama: 2–4 anak beraktivitas bersama guru di kebun / area outdoor sekolah. Ekspresi ceria & natural, cahaya pagi, landscape.",
  },
  "facility-garden": {
    ratio: "16 / 10",
    alt: "Area kebun sekolah Kalyca untuk belajar di alam",
    brief: "Area kebun sekolah yang hijau, idealnya ada anak sedang belajar / menanam (school without wall).",
  },
  "facility-minizoo": {
    ratio: "1 / 1",
    alt: "Siswa memberi makan hewan di mini zoo Kalyca",
    brief: "Anak memberi makan rusa / hewan di mini zoo (feeding animals).",
  },
  "facility-pool": {
    ratio: "1 / 1",
    alt: "Kolam renang sekolah Kalyca",
    brief: "Kolam renang sekolah (tanpa anak, foto fasilitas).",
  },
  "facility-classroom": {
    ratio: "1 / 1",
    alt: "Ruang kelas Montessori Kalyca dengan alat peraga",
    brief: "Kelas Montessori (ber-AC) dengan alat peraga; lebih bagus ada anak sedang belajar.",
  },
  "facility-robotic": {
    ratio: "1 / 1",
    alt: "Siswa merakit robot di Robotic Class Kalyca",
    brief: "Robotic Class: robot hasil rakitan siswa terlihat jelas (close-up).",
  },
  "facility-kebun": {
    ratio: "1 / 1",
    alt: "Kebun sekolah Kalyca yang rindang",
    brief: "Kebun sekolah yang rindang dan hijau.",
  },
  "facility-facade": {
    ratio: "1 / 1",
    alt: "Gedung Kalyca Azzahra School yang asri",
    brief: "Fasad gedung sekolah dengan pepohonan (tanpa mobil di depan).",
  },
  curriculum: {
    ratio: "4 / 3",
    alt: "Siswa belajar dengan alat peraga Montessori didampingi guru",
    brief: "Anak memakai alat peraga Montessori didampingi guru (close-up tangan + alat peraga juga bagus).",
  },
  "program-early": {
    ratio: "16 / 10",
    alt: "Siswa Early Years Kalyca beraktivitas di kelas",
    brief: "Anak Playgroup / TK beraktivitas: sensorial, seni, atau bermain di kelas / outdoor.",
  },
  "program-primary": {
    ratio: "16 / 10",
    alt: "Suasana kelas Primary Years Kalyca saat belajar",
    brief: "Suasana satu kelas SD secara keseluruhan (zoom out), siswa belajar bersama guru.",
  },
  "program-secondary": {
    ratio: "16 / 10",
    alt: "Siswa Secondary Years Kalyca mengerjakan proyek robotik",
    brief: "Siswa SMP: robotik / coding / presentasi proyek.",
  },
  "achievement-rak": {
    ratio: "4 / 3",
    alt: "Sertifikat validasi Program RAK Buku Digital Kalyca Azzahra School",
    brief:
      "Sertifikat validasi RAK Buku Digital (Dinas Kearsipan & Perpustakaan Depok), momen penyerahannya, atau kegiatan literasi.",
  },
  // Hero collage (as on the PPDB posters): distinct shots from the section photos.
  "collage-deer": {
    ratio: "1 / 1",
    alt: "Siswa Kalyca memberi makan rusa di mini zoo sekolah",
    brief: "Anak-anak memberi makan rusa bersama guru (feeding animals).",
  },
  "collage-pool": {
    ratio: "1 / 1",
    alt: "Siswa Kalyca berenang di kolam renang sekolah",
    brief: "Kegiatan renang siswa di kolam sekolah.",
  },
  "collage-stem": {
    ratio: "1 / 1",
    alt: "Siswa Kalyca merakit proyek STEM",
    brief: "Siswa merakit proyek STEM / robotik.",
  },
  "sit-in": {
    ratio: "4 / 3",
    alt: "Calon siswa mengikuti kelas Secondary Years yang sedang berlangsung di Kalyca",
    brief: "Kelas yang sedang berlangsung (guru di depan, siswa menyimak) — suasana KBM normal.",
    focus: "60% 40%",
  },
  "trial-class": {
    ratio: "4 / 3",
    alt: "Calon siswa memberi makan rusa saat Trial Class Kalyca",
    brief: "Kegiatan Trial Class: calon siswa bereksplorasi, mis. feeding animals.",
    focus: "50% 45%",
  },
  closing: {
    ratio: "4 / 3",
    alt: "Guru Kalyca menyambut siswa di sekolah",
    brief: "Suasana hangat: guru menyambut anak / keluarga, atau anak-anak berjalan bersama di area sekolah.",
  },
  // Student achievement appreciation designs (template header/footer cropped).
  "award-onsp-math": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Medali emas Matematika ONSP 2026",
    brief: "Desain apresiasi prestasi: Medali emas Matematika ONSP 2026.",
  },
  "award-tkd-gold": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Medali emas Pugnator International Open Taekwondo 2026",
    brief: "Desain apresiasi prestasi: Medali emas Pugnator International Open Taekwondo 2026.",
  },
  "award-swimming": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Juara 1 Fun Swimming BSparta Supreme 2026",
    brief: "Desain apresiasi prestasi: Juara 1 Fun Swimming BSparta Supreme 2026.",
  },
  "award-english-tka": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Juara 1 Lomba Bahasa Inggris Kompetisi Indonesia Season 1",
    brief: "Desain apresiasi prestasi: Juara 1 Lomba Bahasa Inggris Kompetisi Indonesia Season 1.",
  },
  "award-onsp-english": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Medali perak Bahasa Inggris ONSP 2026",
    brief: "Desain apresiasi prestasi: Medali perak Bahasa Inggris ONSP 2026.",
  },
  "award-onsp-pai": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Medali perak Pendidikan Agama Islam ONSP 2026",
    brief: "Desain apresiasi prestasi: Medali perak Pendidikan Agama Islam ONSP 2026.",
  },
  "award-tkd-silver": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Medali perak Pugnator International Open Taekwondo 2026",
    brief: "Desain apresiasi prestasi: Medali perak Pugnator International Open Taekwondo 2026.",
  },
  "award-o2sn": {
    ratio: "1080 / 1087",
    alt: "Desain apresiasi prestasi siswa Kalyca: Juara 3 O2SN Poomsae tingkat kecamatan",
    brief: "Desain apresiasi prestasi: Juara 3 O2SN Poomsae tingkat kecamatan.",
  },
  // Poster frames of the parent testimonial videos (frame from each video).
  "testimonial-1": {
    ratio: "4 / 5",
    alt: "Cuplikan video testimoni orang tua siswa Kalyca",
    brief: "Frame dari video testimoni orang tua #1.",
    focus: "50% 28%",
  },
  "testimonial-2": {
    ratio: "4 / 5",
    alt: "Cuplikan video testimoni orang tua siswa Kalyca",
    brief: "Frame dari video testimoni orang tua #2.",
    focus: "50% 28%",
  },
  "testimonial-3": {
    ratio: "4 / 5",
    alt: "Cuplikan video testimoni orang tua siswa Kalyca",
    brief: "Frame dari video testimoni orang tua #3.",
    focus: "50% 28%",
  },
} satisfies Record<string, PhotoSlot>;

export type PhotoSlotId = keyof typeof slots;
export const photoSlots: Record<PhotoSlotId, PhotoSlot> = slots;
