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
      age: "3-6 tahun",
      description: "Program pendidikan usia dini yang memperkenalkan anak pada dunia sekolah dalam lingkungan Islami yang menyenangkan.",
      features: [
        "Kiddie Club (3-4 tahun) - Pengantar Bahasa Indonesia",
        "Kindergarten A & B (4-6 tahun) - Islamic Montessori School",
        "Stimulasi motorik dan sensorik",
        "Pengamatan alam ringan",
        "Bermain aktif & kolaboratif",
        "Pembelajaran holistik melalui pengalaman sehari-hari"
      ],
      icon: "👶",
      color: "bg-secondary-100"
    },
    {
      title: "Primary Years (SD)",
      age: "Kelas 1-6 (6-12 tahun)",
      description: "Sekolah Alam-Kebun Islami di Depok yang menstimulasi belajar aktif dan pengalaman langsung.",
      features: [
        "Pengamatan alam dan lingkungan sekitar",
        "Belajar aktif & kolaboratif (Active & Collaborative Learning)",
        "Pembelajaran holistik dan terpadu",
        "Pembelajaran bermakna & fungsional praktis",
        "Keteladanan dan prinsip keterampilan hidup",
        "Pembelajaran yang menyenangkan dan kreatif"
      ],
      icon: "🎒",
      color: "bg-primary/10"
    },
    {
      title: "Secondary Years (SMP)",
      age: "Kelas 7-9 (12-15 tahun)",
      description: "Sekolah Islam SMP Depok yang mengembangkan iman, karakter Islami, dan keterampilan abad 21.",
      features: [
        "Pembelajaran holistik dan terpadu",
        "Pengembangan kemampuan sains, teknologi, dan seni",
        "Keterampilan berpikir kritis dan kreatif",
        "Keterampilan kolaboratif & komunikasi",
        "Prinsip pemerolehan keterampilan hidup",
        "Pembentukan karakter Islami yang kuat"
      ],
      icon: "🎓",
      color: "bg-accent/10"
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
        <Extracurricular />
      </div>
    </section>
  );
} 
