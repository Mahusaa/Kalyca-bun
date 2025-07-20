"use client"
import { useState } from "react";

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
      name: "Ruang Seni",
      description: "Studio seni untuk mengembangkan kreativitas siswa",
      icon: "🎨",
      features: ["Alat lukis lengkap", "Area pameran", "Kelas musik"]
    },
    {
      name: "Musholla",
      description: "Tempat ibadah yang nyaman untuk kegiatan keagamaan",
      icon: "🕌",
      features: ["Kapasitas besar", "Suasana tenang", "Program tahfidz"]
    }
  ];

  const additionalFeatures = [
    "Ruang kelas ber-AC dan nyaman",
    "CCTV untuk keamanan 24 jam",
    "Kantin sehat dengan menu bergizi",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="font-heading font-bold text-3xl text-primary">
              Mengapa Memilih Fasilitas Kami?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary text-lg mb-2">Lengkap & Modern</h4>
                  <p className="text-primary/80">Semua fasilitas didesain dengan standar modern untuk mendukung pembelajaran optimal.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary text-lg mb-2">Aman & Terjaga</h4>
                  <p className="text-primary/80">Sistem keamanan 24 jam dengan CCTV dan petugas keamanan yang siap siaga.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-primary text-lg mb-2">Ramah Lingkungan</h4>
                  <p className="text-primary/80">Fasilitas yang didesain dengan mempertimbangkan kelestarian lingkungan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h4 className="font-heading font-semibold text-primary text-xl mb-2">
                Fasilitas Terpadu
              </h4>
              <p className="text-primary/70">
                Semua fasilitas terintegrasi untuk mendukung pembelajaran holistik dan pengembangan karakter siswa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
