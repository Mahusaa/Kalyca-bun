"use client"
import { useState } from "react";
import Extracurricular from "@/components/Extracurricular";

const programImages = [
  '/early_years_optimized_700.webp', // Early Years (Preschool)
  '/primary.webp', // Primary (SD)
  '/secondary_optimized.webp', // Secondary (SMP)
];


export default function Programs() {
  const [current, setCurrent] = useState(0);
  const programs = [
    {
      title: "Early Years (Preschool)",
      age: "2-6 tahun",
      description: "Program pendidikan usia dini yang mengembangkan fondasi belajar melalui pendekatan Montessori yang menyenangkan dan inklusif.",
      features: [
        "Pembelajaran berbasis bermain",
        "Pengembangan motorik halus dan kasar",
        "Pengenalan bahasa Indonesia dan Inggris",
        "Aktivitas sensorial Montessori",
        "Pengembangan keterampilan sosial"
      ],
      icon: "👶",
      color: "bg-secondary-100"
    },
    {
      title: "Primary (SD)",
      age: "Kelas 1-6",
      description: "Pendidikan dasar yang mengintegrasikan kurikulum nasional dengan pendekatan Montessori dan teknologi untuk pembelajaran yang efektif.",
      features: [
        "Kurikulum nasional terintegrasi Montessori",
        "Program bilingual intensif",
        "Integrasi teknologi dalam pembelajaran",
        "Pengembangan karakter dan akhlak",
        "Aktivitas ekstrakurikuler beragam"
      ],
      icon: "🎒",
      color: "bg-primary/10"
    },
    {
      title: "Secondary (SMP)",
      age: "Kelas 7-9",
      description: "Pendidikan menengah yang mempersiapkan siswa untuk jenjang pendidikan selanjutnya dengan fokus pada pengembangan potensi unik setiap individu.",
      features: [
        "Kurikulum nasional dengan pengayaan",
        "Program STEM dan teknologi",
        "Pengembangan leadership dan soft skills",
        "Persiapan ujian nasional",
        "Bimbingan karir dan minat bakat"
      ],
      icon: "🎓",
      color: "bg-accent/10"
    }
  ];

  const extracurriculars = [
    {
      name: "Panahan",
      icon: "🏹",
      description: "Mengembangkan fokus, ketepatan, dan disiplin"
    },
    {
      name: "Berenang",
      icon: "🏊‍♂️",
      description: "Meningkatkan kebugaran dan kepercayaan diri"
    },
    {
      name: "Musik & Band",
      icon: "🎵",
      description: "Mengembangkan kreativitas dan apresiasi seni"
    },
    {
      name: "Tech Club",
      icon: "💻",
      description: "Mengasah kemampuan teknologi dan coding"
    },
    {
      name: "Tahfidz Quran",
      icon: "📖",
      description: "Menghafal Al-Quran dengan metode yang efektif"
    },
    {
      name: "Seni & Kerajinan",
      icon: "🎨",
      description: "Mengembangkan kreativitas dan keterampilan tangan"
    }
  ];

  const handlePrev = () => setCurrent((prev) => (prev === 0 ? programs.length - 1 : prev - 1));
  const handleNext = () => setCurrent((prev) => (prev === programs.length - 1 ? 0 : prev + 1));

  return (
    <section id="programs" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Program Pendidikan
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">Program pendidikan komprehensif dari usia dini hingga menengah dengan pendekatan <span className="font-extrabold">Islamic montessori</span> yang mengutamakan kebahagiaan anak dan pengembangan karakter</p>
        </div>

        {/* Main Programs Slider */}
        <div className="mb-20">
          {/* Mobile Slider */}
          <div className="lg:hidden flex flex-col items-center">
            <div className="relative w-full">
              <div
                className="relative rounded-2xl overflow-hidden shadow-lg group"
                style={{
                  backgroundImage: `url(${programImages[current]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 340,
                }}
              >
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center mb-6 text-3xl drop-shadow-lg">
                      {programs[current].icon}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      {programs[current].title}
                    </h3>
                    <p className="text-highlight font-medium mb-4 drop-shadow-lg">{programs[current].age}</p>
                    <p className="text-white/90 mb-6 leading-relaxed drop-shadow">
                      {programs[current].description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {programs[current].features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm drop-shadow">{feature}</span>
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
                {programs.map((_, idx) => (
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
          <div className="hidden lg:grid grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                style={{
                  backgroundImage: `url(${programImages[index]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: 340,
                }}
              >
                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300"></div>
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="w-16 h-16 bg-white/30 rounded-xl flex items-center justify-center mb-6 text-3xl drop-shadow-lg">
                      {program.icon}
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-white mb-2 drop-shadow-lg">
                      {program.title}
                    </h3>
                    <p className="text-highlight font-medium mb-4 drop-shadow-lg">{program.age}</p>
                    <p className="text-white/90 mb-6 leading-relaxed drop-shadow">
                      {program.description}
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {program.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white/90 text-sm drop-shadow">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extracurricular Activities */}
        <Extracurricular extracurriculars={extracurriculars} />

        {/* Special Programs */}
        <div className="mt-20 bg-primary/5 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-8">
            Program Khusus
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-primary text-xl">Program Tumbuh Bahagia</h4>
              </div>
              <p className="text-primary/80 leading-relaxed">
                Program Tumbuh Bahagia adalah ruang belajar yang ramah untuk anak-anak, fokus pada pengembangan karakter, potensi, dan
              </p>
            </div>

            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-primary text-xl">Beasiswa Yatim</h4>
              </div>
              <p className="text-primary/80 leading-relaxed">
                Program beasiswa penuh untuk anak yatim dengan dukungan komprehensif
                termasuk biaya pendidikan, seragam, dan kebutuhan sekolah lainnya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
