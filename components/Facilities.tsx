"use client"
import { useState } from "react";
import { CheckCircle, Shield, BookOpen, Users, Heart, Building } from "lucide-react";

const facilityImages = [
  '/mini_zoo.webp', // Mini Zoo
  '/holistik_optimized_700.webp', // Kebun Sekolah
  '/kolam_renang_1_optimized_700.webp', // Kolam Renang
  '/perpustakaan.webp', // Perpustakaan
  '/lapangan_olahraga_optimized_700.webp', // Lapangan Olahraga
  '/lab_komputer_optimized_700.webp', // Lab Komputer
  '/ruang_seni.webp', // Ruang Seni
  '/musholla.webp', // Musholla
];

export default function Facilities() {
  const [current, setCurrent] = useState(0);
  const facilities = [
    {
      name: "Mini Zoo",
      description: "Taman satwa mini untuk pembelajaran tentang hewan dan alam",
      icon: "🦁",
      features: ["Berbagai jenis hewan", "Area pembelajaran outdoor", "Interaksi langsung dengan hewan"]
    },
    {
      name: "Kebun Sekolah",
      description: "Kebun organik untuk pembelajaran pertanian dan lingkungan",
      icon: "🌱",
      features: ["Tanaman sayuran", "Sistem hidroponik", "Pembelajaran sustainability"]
    },
    {
      name: "Kolam Renang",
      description: "Fasilitas renang untuk olahraga dan pengembangan motorik",
      icon: "🏊‍♂️",
      features: ["Kolam standar", "Pelatih profesional", "Program renang wajib"]
    },
    {
      name: "Perpustakaan",
      description: "Perpustakaan modern dengan koleksi buku yang lengkap",
      icon: "📚",
      features: ["Koleksi buku beragam", "Area membaca nyaman", "Sistem digital"]
    },
    {
      name: "Lapangan Olahraga",
      description: "Lapangan multi-fungsi untuk berbagai aktivitas olahraga",
      icon: "⚽",
      features: ["Lapangan futsal", "Basket", "Voli", "Atletik"]
    },
    {
      name: "Lab Komputer",
      description: "Laboratorium komputer dengan perangkat modern",
      icon: "💻",
      features: ["Komputer terbaru", "Software pendidikan", "Internet cepat"]
    },
    {
      name: "Ruang Musik",
      description: "Fasilitas yang digunakan untuk kegiatan pembelajaran dan latihan musik, dan sebagai bagian dari pengembangan seni dan keterampilan siswa",
      icon: "🎵",
      features: ["Instrumen Musik", "Peredam Suara (Soundproofing)", "Sound system"]
    },
    {
      name: "Musholla",
      description: "Fasilitas ibadah yang disediakan di lingkungan sekolah untuk digunakan oleh siswa, guru, dan staf dalam melaksanakan shalat, mengaji, atau kegiatan keagamaan lainnya.",
      icon: "🕌",
      features: [" Tempat wudhu", "Rak AlQuran & Karpet", "Pengeras suara & Kipas angin"]
    }
  ];

  const additionalFeatures = [
    "Ruang kelas ber-AC dan nyaman",
    "CCTV untuk keamanan 24 jam",
    "Kantin sehat dengan menu bergizi(Planning)",
    "Ruang UKS dengan tenaga medis",
    "Parkir luas untuk kendaraan",
    "WiFi gratis di seluruh area",
    "Sistem keamanan modern",
    "Taman bermain yang aman"
  ];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? facilities.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === facilities.length - 1 ? 0 : prev + 1));

  const featureLabels: Record<string, string> = {
    'Ruang kelas ber-AC dan nyaman': 'Ruang AC',
    'CCTV untuk keamanan 24 jam': 'CCTV',
    'Ruang UKS dengan tenaga medis': 'Ruang UKS',
    'Parkir luas untuk kendaraan': 'Parkir Luas',
    'WiFi gratis di seluruh area': 'WiFi Gratis',
    'Taman bermain yang aman': 'Taman Bermain',
  }

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Fasilitas Sekolah
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Fasilitas lengkap dan modern untuk mendukung pembelajaran yang optimal dan pengembangan potensi siswa
          </p>
        </div>

        {/* Main Facilities Slider */}
        <div className="mb-16">
          {/* Mobile Slider */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-full">
              <div
                className="relative rounded-2xl overflow-hidden group shadow-lg"
                style={{
                  backgroundImage: `url(${facilityImages[current]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 260,
                }}
              >
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300"></div>
                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-4 drop-shadow-lg">{facilities[current].icon}</div>
                    <h3 className="font-heading font-semibold text-white text-xl mb-2 drop-shadow-lg">
                      {facilities[current].name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed drop-shadow">
                      {facilities[current].description}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-2">
                    {facilities[current].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs drop-shadow">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Slider Buttons */}
              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition"
                  aria-label="Sebelumnya"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                {facilities.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-highlight border-highlight' : 'bg-white border-primary'} transition`}
                    aria-label={`Pilih slide ${idx + 1}`}
                  />
                ))}
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-accent transition"
                  aria-label="Berikutnya"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop: Show all cards */}
          <div className="hidden lg:grid grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  backgroundImage: `url(${facilityImages[index]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 260,
                }}
              >
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300"></div>
                <div className="relative z-10 p-6 flex flex-col h-full justify-between">
                  <div>
                    <div className="text-4xl mb-4 drop-shadow-lg">{facility.icon}</div>
                    <h3 className="font-heading font-semibold text-white text-xl mb-2 drop-shadow-lg">
                      {facility.name}
                    </h3>
                    <p className="text-white/90 text-sm mb-4 leading-relaxed drop-shadow">
                      {facility.description}
                    </p>
                  </div>
                  <ul className="space-y-2 mt-2">
                    {facility.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-2 h-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-xs drop-shadow">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Features */}
        <div className="bg-primary/5 rounded-2xl p-8 mb-16">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-8">
            Fasilitas Pendukung
          </h3>
          {/* Mobile: 2-column balanced grid cards */}
          <div className="grid grid-cols-2 gap-4 md:hidden items-stretch">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center bg-white rounded-xl p-4 shadow-md border border-secondary-100 h-full min-h-[110px] text-center"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-primary/80 text-sm font-semibold mb-0.5">
                  {featureLabels[feature] || feature.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="text-primary/70 text-xs">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          {/* Desktop: grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white rounded-lg p-4">
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-primary/80 text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Facility Highlights */}
        <div>
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-12">
            Mengapa Memilih <span className="text-accent">Kalyca</span> untuk anak anda?
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Pendidikan Montessori dengan Nilai Islam
                  </h4>
                  <p className="text-primary/80">
                    Menggabungkan pendekatan Montessori dan kurikulum nasional berbasis Islam untuk menumbuhkan anak yang cerdas, mandiri, dan berakhlak mulia.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Lingkungan Belajar Nyaman & Aman
                  </h4>
                  <p className="text-primary/80">
                    Konsep Sekolah Alam Kebun yang asri, Islami, bebas bullying, dan mendukung tumbuh kembang anak secara optimal.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Pembelajaran Bilingual & Berbasis Proyek
                  </h4>
                  <p className="text-primary/80">
                    Anak dibiasakan berbahasa Inggris sejak dini melalui pembelajaran aktif, kolaboratif, dan berbasis pengalaman nyata.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Item 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Mengutamakan Kebahagiaan Anak
                  </h4>
                  <p className="text-primary/80">
                    Setiap proses belajar dirancang menyenangkan agar anak tumbuh percaya diri, bahagia, dan mencintai proses belajar.
                  </p>
                </div>
              </div>

              {/* Item 5 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Fasilitas Lengkap & Modern
                  </h4>
                  <p className="text-primary/80">
                    Ruang kelas nyaman, area kebun luas, sarana olahraga, teknologi, serta lingkungan yang aman untuk eksplorasi anak.
                  </p>
                </div>
              </div>

              {/* Item 6 */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-primary mb-1">
                    Guru Profesional & Teladan
                  </h4>
                  <p className="text-primary/80">
                    Tenaga pendidik kompeten, ramah, dan berdedikasi memberikan bimbingan serta keteladanan terbaik bagi perkembangan anak.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
