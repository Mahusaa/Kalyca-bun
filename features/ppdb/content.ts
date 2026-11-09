import type { PpdbContent } from "./types";

/**
 * All copy on the PPDB landing page. Edit text here, not in the components.
 *
 * Every block carries a `status` (see types.ts) and a `source`:
 *   - "approved" once Kalyca confirms it for PPDB 2027/2028,
 *   - production builds fail while anything visible is not "approved".
 * Words wrapped in *asterisks* get the yellow marker highlight.
 *
 * Primary source: Kalyca principal hearings for PPDB 2027/2028 (Aug 2026, per level).
 * kalycaazzahra.com is outdated and is NOT used as a source.
 * Prices and promos from 2026/2027 are deliberately NOT reused.
 */

const POSTER = "Poster & banner PPDB 2027/2028 (copy kampanye)";
const AWARDS = "Desain apresiasi prestasi siswa (feed Instagram Kalyca)";
const TESTI = "Testimoni dari tim — konfirmasi kutipan asli & izin tampil nama sebelum approve";
const VIDEO = "Video testimoni Kalyca; kutipan dari transkrip otomatis — cek kata per kata";
const H_EY = "Hearing kepsek Early Years, 21 Agu 2026";
const H_PY = "Hearing kepsek Primary Years, 21 Agu 2026";
const H_SY = "Hearing kepsek Secondary Years, 20 Agu 2026";
const BRIEFS = "Brief brosur/poster Kalyca 2026/2027";
const PHOTOS = "foto dokumentasi Kalyca";
const ADVANTAGE = "Brief section Keunggulan Kalyca, tim Grwrr 4 Nov 2026";
const PRICELIST = "Pricelist Kalyca TA 2026/2027 (PDF dari tim, 9 Nov 2026)";
const VISIT ="Penjelasan Sit In Program & Trial Class dari tim Grwrr, 9 Nov 2026";

export const content: PpdbContent = {
  school: {
    name: "Kalyca Azzahra School",
    foundation: "Yayasan Indonesia Tanah Pusaka",
    levels: [
      { name: "Early Years", detail: "PG – TK" },
      { name: "Primary Years", detail: "SD" },
      { name: "Secondary Years", detail: "SMP" },
    ],
    tagline: {
      text: "Everyone Deserves a Good Education",
      status: "approved",
      source: POSTER,
    },
    address: {
      street: "Jl. Kapitan I No. 177, RT 001/RW 04",
      area: "Kel. Sukatani, Kec. Tapos, Kota Depok, Jawa Barat 16454",
      line: "Jl. Kapitan 1 No. 177, Sukatani, Depok",
      short: "Sukatani, Depok",
      status: "approved",
      source: `${POSTER} · papan nama sekolah`,
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Kalyca%20Azzahra%20School%2C%20Jl.%20Kapitan%201%20No.%20177%2C%20Sukatani%2C%20Tapos%2C%20Depok",
    instagram: { handle: "@kalyca.azzahra", url: "https://www.instagram.com/kalyca.azzahra" },
  },

  hero: {
    badge: "PPDB 2027/2028 Telah Dibuka",
    title: "Everyone Deserves a Good Education",
    description:
      "Temukan lingkungan belajar yang tenang dan nyaman di *Sukatani, Depok*, dengan **fasilitas terbaik dan pendidikan berkualitas yang terjangkau** untuk mendampingi tumbuh kembang anak dari *Early Years – Primary Years – Secondary Years*.",
    primaryCta: { label: "Lihat Fasilitas", href: "#fasilitas" },
    promoCta: { label: "Lihat Promo & Biaya", href: "#biaya", teaser: "Promo *Early Bird* sedang berlangsung" },
    photos: ["hero", "collage-deer", "collage-pool", "collage-stem"],
    why: {
      title: "Why Kalyca?",
      items: [
        {
          icon: "award",
          title: "Affordable Excellence",
          text: "Pendidikan berkualitas dengan fasilitas dan pengalaman belajar terbaik, dengan biaya yang tetap terjangkau bagi keluarga.",
        },
        {
          icon: "school",
          title: "Premium Learning Environment",
          text: "Lingkungan belajar yang nyaman, aman, dan didukung fasilitas lengkap untuk mendukung tumbuh kembang anak secara optimal.",
        },
        {
          icon: "mosque",
          title: "Islamic Holistic Education",
          text: "Pendidikan holistik yang mengembangkan kemampuan akademik, karakter, kemandirian, dan keterampilan anak dengan nilai-nilai Islam sebagai landasan.",
        },
      ],
      status: "approved",
      source: POSTER,
    },
    status: "approved",
    source: POSTER,
  },

  facilities: {
    eyebrow: "Fasilitas",
    title: "Ruang Tumbuh yang *Dekat dengan Alam*",
    intro:
      "Lingkungan sekolah alam yang nyaman, aman, dan ramah anak — kebun, mini zoo, dan ruang kelas yang dirancang untuk eksplorasi dan kemandirian.",
    status: "approved",
    source: H_PY,
    feature: {
      title: "Belajar di Alam Terbuka",
      text: "Konsep School with Wall & School Without Wall: anak berkebun, mengamati, dan belajar langsung dari alam — bukan hanya di dalam kelas.",
      photo: "facility-garden",
      status: "approved",
      source: `${H_EY} · ${H_PY}`,
    },
    items: [
      {
        title: "Mini Zoo",
        text: "Kegiatan pagi memberi makan rusa dan hewan lain — pengalaman yang jarang ada di sekolah lain.",
        photo: "facility-minizoo",
        status: "approved",
        source: H_PY,
      },
      {
        title: "Kolam Renang",
        text: "Kegiatan renang untuk melatih kesehatan fisik, keberanian, dan rasa percaya diri.",
        photo: "facility-pool",
        status: "approved",
        source: `${BRIEFS} · ${PHOTOS}`,
      },
      {
        title: "Kelas Montessori",
        text: "Ruang kelas ber-AC dengan alat peraga Montessori untuk belajar lewat aktivitas konkret.",
        photo: "facility-classroom",
        status: "approved",
        source: `${BRIEFS} · ${PHOTOS}`,
      },
      {
        title: "Robotic Class",
        text: "Anak belajar merakit dan memprogram robot sebagai bagian dari pembelajaran STEM.",
        photo: "facility-robotic",
        status: "approved",
        source: `${PHOTOS} (Robotic Class) · ${H_SY} (STEM)`,
      },
      {
        title: "Kebun Kalyca",
        text: "Kebun rindang tempat anak berkebun, bermain, dan mengamati alam.",
        photo: "facility-kebun",
        status: "approved",
        source: `${H_EY} (gardening) · ${PHOTOS}`,
      },
      {
        title: "Lingkungan Belajar yang Asri",
        text: "Gedung sekolah yang teduh dan tenang, jauh dari keramaian — nyaman untuk belajar dan beraktivitas.",
        photo: "facility-facade",
        status: "approved",
        source: `${H_SY} (suasana tenang) · ${PHOTOS}`,
      },
    ],
    extras: {
      label: "Fasilitas pendukung",
      items: ["Perpustakaan", "Lab komputer", "Musholla", "Lapangan olahraga & futsal", "Playground", "Ruang musik", "CCTV"],
      status: "approved",
      source: `${BRIEFS} · ${H_EY} · ${PHOTOS}`,
    },
  },

  curriculum: {
    eyebrow: "Kurikulum & Pendekatan Belajar",
    title: "Kurikulum Nasional, Dipadukan dengan *Montessori Islam*",
    intro:
      "Kalyca memadukan Kurikulum Nasional dengan pendekatan Montessori Islam — pembelajaran yang aktif, holistik, menyenangkan, dan bermakna, dengan alam sebagai sumber belajar.",
    status: "approved",
    source: `${H_PY} · ${H_EY}`,
    photo: "curriculum",
    pillars: [
      {
        title: "Montessori Islam",
        text: "Kebebasan yang terarah: anak mengamati, menemukan, berdiskusi, lalu menyampaikan idenya — sambil membiasakan nilai Islam dalam keseharian.",
        status: "approved",
        source: `${H_PY} · ${H_EY}`,
      },
      {
        title: "School With & Without Wall",
        text: "Belajar di dalam kelas dan di alam — kebun, mini zoo, dan lingkungan sekitar menjadi ruang belajar yang konkret.",
        status: "approved",
        source: `${H_EY} · ${H_PY}`,
      },
      {
        title: "Bahasa Inggris Sejak Dini",
        text: "Early Years belajar dengan full English, Primary Years dengan bahasa pengantar bilingual.",
        status: "approved",
        source: `${H_EY} · ${H_PY}`,
      },
    ],
    daily: {
      title: "Keseharian di Kalyca",
      items: [
        "Feeding animals",
        "Gardening",
        "Sensory play",
        "Practical life",
        "Creative art",
        "Program keagamaan",
        "Tanpa PR di Primary Years",
        "Lingkungan Islami & zero bullying",
      ],
      status: "approved",
      source: `${H_EY} · ${H_PY}`,
    },
  },

  advantage: {
    // Hidden on request (9 Nov 2026). Set to true to bring the comparison table back.
    enabled: false,
    eyebrow: "The Kalyca Advantage",
    title: "*Lebih dari* Sekadar Pendidikan.",
    intro:
      "Pengalaman belajar yang lebih bermakna untuk masa depan anak. Kenali berbagai fasilitas, pengalaman, dan kesempatan yang bisa didapatkan anak bersama Kalyca.",
    status: "approved",
    source: ADVANTAGE,
    columns: {
      consideration: "Pertimbangan Orang Tua",
      kalyca: "Kalyca School",
      others: "Sekolah Swasta Lain",
    },
    rows: [
      {
        consideration: "Lingkungan Belajar",
        kalyca: "Natural Learning Environment",
        others: "Bervariasi sesuai sekolah",
        status: "approved",
      },
      {
        consideration: "Fasilitas Olahraga",
        kalyca: "Swimming Pool",
        others: "Bervariasi sesuai sekolah",
        status: "approved",
      },
      {
        consideration: "Teknologi & Inovasi",
        kalyca: "Robotics Learning",
        others: "Bervariasi sesuai program sekolah",
        status: "approved",
      },
      {
        consideration: "Pengalaman Belajar",
        kalyca: "Active & Experiential Learning",
        others: "Bervariasi sesuai metode pembelajaran",
        status: "approved",
      },
      {
        consideration: "Pemantauan Orang Tua",
        kalyca: "Digital LMS",
        others: "Bervariasi sesuai sistem sekolah",
        status: "approved",
      },
      {
        consideration: "Pengembangan Potensi Anak",
        kalyca: "Academic & Non-Academic Development",
        others: "Bervariasi sesuai program sekolah",
        status: "approved",
      },
      {
        consideration: "Keterjangkauan Biaya",
        kalyca: "Affordable Education",
        others: "Bervariasi sesuai sekolah",
        status: "approved",
      },
    ],
  },

  programs: {
    eyebrow: "Program Pendidikan",
    title: "Jenjang yang Tumbuh *Bersama Ananda*",
    intro:
      "Program terpadu dari Playgroup hingga SMP. Ketersediaan kursi di setiap jenjang dapat ditanyakan langsung ke Tim Admission.",
    status: "approved",
    items: [
      {
        id: "early-years",
        name: "Early Years",
        level: "Playgroup – Kindergarten",
        ages: "Playgroup · KG A · KG B",
        classes: "Montessori Islam · Full English",
        text: "Pengalaman belajar yang menyenangkan melalui Montessori Islam, full English learning, dan eksplorasi alam untuk membangun kemandirian, karakter, dan kemampuan dasar anak.",
        points: [
          "Vertical grouping (kelas lintas usia)",
          "Sensory play, gardening & feeding animal",
          "Practical life & phonics",
        ],
        photo: "program-early",
        status: "approved",
        source: H_EY,
      },
      {
        id: "primary-years",
        name: "Primary Years",
        level: "SD",
        ages: "Kelas 1–6",
        classes: "Kurikulum Nasional + Montessori Islam · Bilingual",
        text: "Belajar aktif di dalam dan di luar kelas, tanpa PR — membangun karakter, kemandirian, kepemimpinan, dan life skill.",
        points: [
          "Program karakter BASE CAMP & Buddy Program",
          "Literasi: menulis buku & RAK Buku Digital",
          "Adiwiyata, field trip & pramuka",
        ],
        photo: "program-primary",
        status: "approved",
        source: H_PY,
      },
      {
        id: "secondary-years",
        name: "Secondary Years",
        level: "SMP",
        ages: "Kelas 7–9",
        classes: "Sekolah berbasis kompetensi · Project Based Learning",
        text: "Bukan hanya soal nilai: siswa dibekali 7 kompetensi esensial — mandiri, peduli, tanggung jawab, komunikasi, kolaborasi, berpikir kritis, dan inovasi.",
        points: [
          "Quranic: hafalan & perbaikan bacaan Al-Qur'an",
          "Beyond Classroom: Project Humanity, Young Entrepreneurship, Beyond Graduation Portfolio",
          "STEM terintegrasi & Homeroom Session",
        ],
        photo: "program-secondary",
        status: "approved",
        source: H_SY,
      },
    ],
  },

  achievements: {
    enabled: true,
    eyebrow: "Prestasi & Pengakuan",
    title: "Bukti dari Proses yang *Konsisten*",
    intro: "Pencapaian yang tumbuh dari kebiasaan belajar sehari-hari.",
    status: "approved",
    slides: [
      { photo: "award-onsp-math", title: "Medali Emas Matematika", event: "ONSP 2026", name: "Ardiand Syaputra", status: "approved", source: AWARDS },
      {
        photo: "award-tkd-gold",
        title: "Medali Emas Poomsae Pra Cadet Male Individual",
        event: "Pugnator International Open Taekwondo 2026",
        name: "Hafizh Alim Arham",
        status: "approved",
        source: AWARDS,
      },
      {
        photo: "award-swimming",
        title: "Juara 1 Fun Swimming",
        event: "BSparta Supreme 2026 · B-Splash Grand Depok City, 10 Oktober 2026",
        name: "Abdullah Umar Syuhada",
        status: "approved",
        source: AWARDS,
      },
      {
        photo: "award-english-tka",
        title: "Juara 1 Lomba Bahasa Inggris",
        event: "Kompetisi Indonesia Season 1",
        name: "Nazia Vigi Zaina · TK-A",
        status: "approved",
        source: AWARDS,
      },
      { photo: "award-onsp-english", title: "Medali Perak Bahasa Inggris", event: "ONSP 2026", name: "Sabila Thalita Tanjung", status: "approved", source: AWARDS },
      { photo: "award-onsp-pai", title: "Medali Perak Pendidikan Agama Islam", event: "ONSP 2026", name: "Bram Al-Khalifi", status: "approved", source: AWARDS },
      {
        photo: "award-tkd-silver",
        title: "Medali Perak Poomsae Pra Cadet Male Individual",
        event: "Pugnator International Open Taekwondo 2026",
        name: "Rafardhan Arif",
        status: "approved",
        source: AWARDS,
      },
      {
        photo: "award-o2sn",
        title: "Juara 3 Poomsae Individu Putra (Taeguk 3)",
        event: "O2SN Tingkat Kecamatan",
        name: "Hafizh Alim Arham · Primary 5",
        status: "approved",
        source: AWARDS,
      },
    ],
  },

  testimonials: {
    enabled: true,
    eyebrow: "Cerita Orang Tua",
    title: "Kata Ayah & Bunda *di Kalyca*",
    intro: "Pengalaman langsung dari keluarga yang telah mempercayakan pendidikan Ananda di Kalyca.",
    status: "approved",
    items: [
      {
        kind: "video",
        title: "Testimoni orang tua",
        caption: "Video 1",
        excerpt: "Kalau sekali datang, biasanya itu jatuh cinta pada pandangan pertama.",
        poster: "testimonial-1",
        videoSrc: "/videos/testimonial-1.mp4",
        driveFileId: "1B8ah_RvI5RWCzl_YDt4N0SxW1Hbnl_dF",
        status: "approved",
        source: `${VIDEO} — konfirmasi boleh dipakai di iklan`,
      },
      {
        kind: "video",
        title: "Testimoni orang tua",
        caption: "Video 2",
        excerpt: "…yang paling menjadi perhatian adalah sekolah yang memang zero bullying.",
        poster: "testimonial-2",
        videoSrc: "/videos/testimonial-2.mp4",
        driveFileId: "1fnxNchojPuT5zq_12pG88GVMZo4P-8wk",
        status: "approved",
        source: VIDEO,
      },
      {
        kind: "video",
        title: "Testimoni orang tua",
        caption: "Video 3",
        excerpt: "…setiap anak memiliki karakter yang berbeda-beda, guru juga memiliki cara yang unik…",
        poster: "testimonial-3",
        videoSrc: "/videos/testimonial-3.mp4",
        driveFileId: "13q8BQAVS6VTRpIpHMTcUeVTE361iPa-F",
        status: "approved",
        source: VIDEO,
      },
      {
        kind: "quote",
        quote:
          "Awalnya kami cukup khawatir karena Aisyah belum terbiasa berinteraksi dengan banyak teman. Tapi sejak bersekolah di Kalyca, dia jadi lebih berani, mandiri, dan selalu antusias setiap kali berangkat sekolah.",
        name: "Ibu Sarah",
        meta: "Orang tua Aisyah · Playgroup",
        status: "approved",
        source: TESTI,
      },
      {
        kind: "quote",
        quote:
          "Kami senang melihat perkembangan Rafi. Sekarang dia semakin percaya diri, lebih mandiri, dan mulai menunjukkan rasa ingin tahu yang besar. Cara belajar yang menyenangkan membuatnya selalu semangat ke sekolah.",
        name: "Ibu Nadia",
        meta: "Orang tua Rafi · TK",
        status: "approved",
        source: TESTI,
      },
      {
        kind: "quote",
        quote:
          "Bagi kami, pendidikan bukan hanya soal nilai akademik. Kami ingin Kayla tumbuh menjadi anak yang berkarakter baik dan memiliki rasa percaya diri. Sejauh ini, kami melihat perkembangan positif tersebut di Kalyca.",
        name: "Bapak Andi",
        meta: "Orang tua Kayla · SD",
        status: "approved",
        source: TESTI,
      },
      {
        kind: "quote",
        quote:
          "Kami melihat Farhan semakin bertanggung jawab dan mampu mengembangkan potensinya. Lingkungan belajar yang positif dan dukungan para guru membuat kami merasa nyaman mempercayakan pendidikan Farhan di Kalyca.",
        name: "Ibu Rina",
        meta: "Orang tua Farhan · SMP",
        status: "approved",
        source: TESTI,
      },
    ],
  },

  visit: {
    enabled: true,
    eyebrow: "Sit In Program & Trial Class",
    title: "Rasakan Langsung *Belajar di Kalyca*",
    intro:
      "Sebelum memutuskan, Ananda bisa merasakan sendiri suasana belajar di Kalyca. Ada dua pilihan yang bisa disesuaikan dengan kebutuhan keluarga.",
    status: "approved",
    source: VISIT,
    programs: [
      {
        name: "Sit In Program",
        tag: "Setiap hari sekolah",
        summary:
          "Survei sekolah sekaligus ikut kelas yang sedang berlangsung pada hari itu juga, bersama siswa Kalyca.",
        facts: [
          { label: "Jadwal", text: "Setiap hari sekolah selama KBM normal" },
          { label: "Tidak tersedia", text: "Saat mid term, UAS, atau ada event sekolah" },
        ],
        photo: "sit-in",
        status: "approved",
        source: VISIT,
      },
      {
        name: "Trial Class",
        tag: "Lebih spesial",
        summary:
          "Sesi khusus calon siswa dengan kegiatan yang dirancang untuk bereksplorasi, dilengkapi asesmen.",
        facts: [
          { label: "Jadwal", text: "Hari Sabtu, 2 minggu sekali" },
          { label: "Peserta", text: "Khusus calon siswa" },
          { label: "Termasuk", text: "Kegiatan eksplorasi & asesmen" },
          { label: "Biaya", text: "Gratis" },
        ],
        photo: "trial-class",
        featured: true,
        badge: "Gratis",
        highlights: {
          title: "Contoh kegiatan Trial Class sebelumnya",
          items: [
            "Feeding animals & Sholat Dhuha",
            "Ice breaking",
            "Art & colouring",
            "Proyek Miniatur Kota Bebas Banjir",
            "Science experiment",
            "Smart City Challenge",
          ],
          status: "approved",
          source: "Poster Trial Class / Open House SD & SMP 2026 (Drive tim)",
        },
        status: "approved",
        source: VISIT,
      },
    ],
    note: "Detail program dan jadwal terdekat bisa ditanyakan langsung ke Tim Admission.",
  },

  investment: {
    eyebrow: "Investasi Pendidikan",
    title: "Gambaran Biaya yang *Jelas Sejak Awal*",
    intro:
      "Struktur biaya pendidikan di Kalyca berlaku untuk semua jenjang, dengan nominal yang berbeda per jenjang. Untuk pricelist lengkap sesuai jenjang Ananda, termasuk promo yang sedang berlaku, silakan hubungi Tim Admission.",
    status: "approved",
    source: `${PRICELIST} · nominal disensor atas arahan tim (9 Nov 2026)`,
    fees: [
      {
        title: "Biaya Pendaftaran",
        alias: "Registration form",
        text: "Dibayarkan saat formulir pendaftaran diserahkan.",
        amount: "Rp 500K",
        badge: "Early Bird",
        status: "approved",
        source: POSTER,
      },
      {
        title: "Development Fee",
        alias: "Uang pangkal",
        text: "Untuk pembangunan gedung & fasilitas. Dibayarkan satu kali.",
        badge: "Diskon hingga 55%",
        status: "approved",
        source: `${PRICELIST} · ${POSTER} (diskon)`,
      },
      {
        title: "Annual Fee",
        alias: "Biaya tahunan",
        text: "Mencakup seragam (2 set, satu kali), worksheet, alat tulis, dan kegiatan / ekstrakurikuler.",
        period: "per tahun",
        status: "approved",
        source: PRICELIST,
      },
      {
        title: "Tuition Fee",
        alias: "SPP",
        text: "Untuk biaya operasional sekolah.",
        period: "per bulan",
        status: "approved",
        source: PRICELIST,
      },
    ],
    lockedNote: "Tanyakan ke Tim Admission",
    levels: {
      title: "Usia & jam belajar per jenjang",
      items: [
        { name: "Playgroup", ages: "3–4 tahun", schedule: ["3 hari / minggu", "08.00–11.00"] },
        { name: "KG A & KG B", ages: "4–6 tahun", schedule: ["Senin–Kamis 07.30–12.00", "Jumat 07.30–11.00"] },
        { name: "Primary Years", ages: "6–12 tahun", schedule: ["Senin–Kamis 07.00–14.00", "Jumat 07.00–13.00"] },
        { name: "Secondary Years", ages: "13–15 tahun", schedule: ["Senin–Kamis 07.00–14.00", "Jumat 07.00–13.00"] },
      ],
      status: "approved",
      source: `${PRICELIST} (jadwal TA 2026/2027; hari Playgroup di PDF tidak konsisten: Sen/Rab/Kam vs Sen/Sel/Kam)`,
    },
    footnotes: [],
    payment: {
      title: "Skema pembayaran",
      text: "Program cicilan hingga 12×.",
      status: "approved",
      source: POSTER,
    },
    cta: { label: "Minta Pricelist via WhatsApp" },
    ctaNote: "Pricelist dikirim sesuai jenjang Ananda.",
  },

  earlyBird: {
    enabled: true,
    label: "Early Bird · PPDB 2027/2028",
    title: "Daftar Lebih Awal, Dapatkan Keuntungan *Early Bird*",
    description:
      "Keuntungan berikut berlaku selama periode Early Bird. Tanyakan periode, jenjang, dan syaratnya langsung ke Tim Admission.",
    status: "approved",
    source: `Judul & kalimat: copy LP (draft). Benefit: ${POSTER}`,
    promo: {
      sticker: "Early Bird",
      label: "Biaya Pendaftaran",
      value: "Rp 500K",
      offers: [
        { icon: "percent", kicker: "Up to", title: "55% Off", text: "Development Fee Discount", featured: true },
        { icon: "installment", kicker: "Cicilan", title: "12×", text: "Program cicilan hingga 12×" },
      ],
      status: "approved",
      source: POSTER,
    },
    urgency: {
      badge: "Segera Daftar",
      alert: "Keuntungan Early Bird hanya berlaku sampai periode berakhir — segera amankan kursi Ananda.",
    },
    /**
     * Real last day of the current Early Bird wave (yyyy-mm-dd, WIB). The page shows
     * "Berakhir pada bulan ini · tinggal N hari" while this date is in the current month,
     * the date itself otherwise, and "telah berakhir" after it — update it every wave.
     */
    deadline: {
      date: "2026-12-31",
      status: "approved",
      source: "Konfirmasi tim Grwrr, 4 Nov 2026: Early Bird berakhir 31 Desember",
    },
    levels: {
      text: "Semua jenjang: Early Years, Primary Years, Secondary Years",
      status: "approved",
      source: "Konfirmasi tim Grwrr, 4 Nov 2026",
    },
    /**
     * Early Bird seats are allotted per month (3 per month). Update `left` (and `month`)
     * whenever a seat is taken. In a new month the page shows `perMonth` again automatically.
     */
    quota: {
      perMonth: 3,
      left: 3,
      month: "2026-11",
      status: "approved",
      source: "Konfirmasi tim Grwrr, 4 Nov 2026: kuota Early Bird 3 per bulan — update `left` saat berkurang",
    },
    terms: {
      text: "Syarat & ketentuan berlaku. Detail promo dapat ditanyakan ke Tim Admission.",
      status: "approved",
      source: "Kalimat umum (tim Grwrr menyetujui konten preview sebagai final, 9 Nov 2026)",
    },
    cta: { label: "Tanya Promo Early Bird" },
  },

  faq: {
    enabled: true,
    eyebrow: "FAQ",
    title: "Pertanyaan yang *Sering Ditanyakan*",
    status: "approved",
    items: [
      {
        question: "Di mana lokasi Kalyca Azzahra School?",
        answer:
          "Kalyca berlokasi di Jl. Kapitan 1 No. 177, Sukatani, Tapos, Kota Depok — di lingkungan yang tenang, jauh dari keramaian jalan utama. Silakan cek rute dan jarak dari rumah Ayah/Bunda melalui Google Maps.",
        link: { label: "Buka Google Maps", href: "maps" },
        status: "approved",
        source: `Alamat: ${POSTER} · suasana: ${H_SY}`,
      },
      {
        question: "Apakah tersedia layanan antar-jemput?",
        answer:
          "Saat ini Kalyca belum menyediakan layanan antar-jemput. Layanan ini dapat dipertimbangkan ke depannya apabila kebutuhan dari orang tua cukup banyak.",
        status: "approved",
        source: `${H_EY} · ${H_PY}`,
      },
      {
        question: "Kurikulum apa yang digunakan?",
        answer:
          "Early Years menggunakan pendekatan Montessori Islam dengan pembelajaran full English. Primary Years memadukan Kurikulum Nasional dengan Montessori Islam dan bahasa pengantar bilingual. Secondary Years adalah sekolah berbasis kompetensi dengan Project Based Learning bertema setiap semester.",
        status: "approved",
        source: `${H_EY} · ${H_PY} · ${H_SY}`,
      },
      {
        question: "Apakah ada program wajib hafalan Al-Qur'an?",
        answer:
          "Ada program hafalan Al-Qur'an, tetapi tidak wajib — anak tidak dituntut harus hafal. Kalyca memulai dari hal yang paling fundamental, yaitu asesmen bacaan untuk memperbaiki bacaan Al-Qur'an anak terlebih dahulu.",
        status: "approved",
        source: "Konfirmasi tim Grwrr, 4 Nov 2026 (hafalan tidak wajib; asesmen & perbaikan bacaan dulu)",
      },
      {
        question: "Bagaimana cara mengetahui rincian biaya dan promo?",
        answer:
          "Rincian biaya per jenjang dikirimkan langsung oleh Tim Admission melalui WhatsApp, termasuk informasi promo yang sedang berlaku.",
        status: "approved",
        source: "Arahan Kalyca: nominal biaya tidak dipublikasikan di website",
      },
      {
        question: "Apakah Ananda bisa mencoba belajar di Kalyca terlebih dahulu?",
        answer:
          "Bisa. Ada Sit In Program, yaitu ikut kelas yang sedang berlangsung di setiap hari sekolah (kecuali saat mid term, UAS, atau event sekolah), dan Trial Class setiap hari Sabtu, 2 minggu sekali, khusus calon siswa dengan kegiatan eksplorasi dan asesmen. Jadwal terdekat dapat ditanyakan ke Tim Admission.",
        status: "approved",
        source: VISIT,
      },
      {
        question: "Bagaimana perkembangan anak dilaporkan kepada orang tua?",
        answer:
          "Kalyca menyediakan fitur Learning Management System (LMS) yang memungkinkan orang tua memantau perkembangan dan aktivitas belajar anak secara digital melalui website. Dengan begitu, orang tua dapat mengetahui kegiatan anak di sekolah dan mengikuti perkembangan belajarnya dengan lebih mudah.",
        status: "approved",
        source: "Jawaban tim Grwrr, 4 Nov 2026",
      },
      {
        question: "Apakah Kalyca menerima anak berkebutuhan khusus (program inklusi)?",
        answer:
          "Kalyca berkomitmen menghadirkan lingkungan belajar yang aman dan inklusif. Calon siswa berkebutuhan khusus mengikuti asesmen terlebih dahulu untuk memastikan program yang tepat. Selama pembelajaran di sekolah, anak didampingi oleh shadow teacher, dengan biaya shadow teacher ditanggung oleh orang tua.",
        status: "approved",
        source: "Konfirmasi tim Grwrr, 4 Nov 2026 (asesmen dulu; shadow teacher ditanggung orang tua)",
      },
    ],
  },

  closing: {
    title: "Diskusikan Kebutuhan Pendidikan Anak Anda Bersama *Tim Admission Kalyca*",
    text: "Ceritakan usia dan kebutuhan Ananda. Tim kami siap menjelaskan program, gambaran biaya, hingga jadwal trial class dan kunjungan ke sekolah.",
    cta: { label: "Konsultasi via WhatsApp" },
    photo: "closing",
    status: "approved",
    source: "Headline: CTA draft dari brief LPWA",
  },
};
