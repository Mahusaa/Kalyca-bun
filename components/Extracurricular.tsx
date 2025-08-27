"use client"
import { useState } from "react";

export default function Extracurricular() {
  const [activeTab, setActiveTab] = useState('activities');

  const activities = [
    {
      name: "Feeding Animals",
      icon: "🦁",
      description: "Menumbuhkan kasih sayang dan kepedulian terhadap makhluk hidup"
    },
    {
      name: "Sholat Dhuha Berjamaah",
      icon: "🕌",
      description: "Membiasakan anak menjaga ibadah harian bersama teman-teman"
    },
    {
      name: "Swimming",
      icon: "🏊‍♂️",
      description: "Melatih kesehatan fisik, keberanian, dan rasa percaya diri di air"
    },
    {
      name: "Creative Art",
      icon: "🎨",
      description: "Mengembangkan imajinasi, seni, dan ekspresi diri anak"
    },
    {
      name: "Tahfidz Quran",
      icon: "📖",
      description: "Mendekatkan anak dengan Al-Qur'an melalui hafalan bertahap"
    },
    {
      name: "Field Trip",
      icon: "🚌",
      description: "Belajar langsung dari lingkungan nyata melalui kunjungan edukatif"
    },
    {
      name: "Fishing",
      icon: "🎣",
      description: "Mengajarkan kesabaran, ketelitian, dan rasa syukur lewat memancing"
    },
    {
      name: "Tech Club",
      icon: "💻",
      description: "Mengenalkan dunia teknologi dengan cara kreatif dan Islami"
    },
    {
      name: "Soccer",
      icon: "⚽",
      description: "Meningkatkan sportivitas, kerjasama, dan keterampilan motorik anak"
    }
  ];

  const extracurriculars = [
    {
      name: "Taekwondo",
      icon: "🥋",
      description: "Melatih kedisiplinan, fisik, dan kepercayaan diri"
    },
    {
      name: "Bimbingan Baca Quran (BBQ)",
      icon: "📖",
      description: "Meningkatkan kemampuan membaca Al-Qur'an"
    },
    {
      name: "English Conversation Class (ECC)",
      icon: "🗣️",
      description: "Membiasakan anak berbicara dalam bahasa Inggris"
    },
    {
      name: "Pramuka",
      icon: "🏕️",
      description: "Menumbuhkan kemandirian, kebersamaan, dan kepemimpinan"
    },
    {
      name: "Engineering & Automation Project",
      icon: "⚙️",
      description: "Belajar dasar rekayasa dan sistem otomatisasi"
    },
    {
      name: "Robotics Project",
      icon: "🤖",
      description: "Mengenal teknologi robotika secara menyenangkan"
    },
    {
      name: "Game Development Project",
      icon: "🎮",
      description: "Mengasah logika dan kreativitas lewat game"
    },
    {
      name: "3D Digital Art Project",
      icon: "🎨",
      description: "Mengembangkan seni dan imajinasi berbasis digital"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-primary mb-4">
            Aktivitas & Ekstrakurikuler
          </h3>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Berbagai aktivitas Islami, kreatif, dan menyatu dengan alam yang dirancang untuk menumbuhkan kemandirian, karakter Islami, kreativitas, serta keterampilan abad 21
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-secondary-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab('activities')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'activities'
                  ? 'bg-primary text-white'
                  : 'text-primary hover:text-primary/80'
              }`}
            >
              Aktivitas
            </button>
            <button
              onClick={() => setActiveTab('extracurriculars')}
              className={`px-6 py-2 rounded-md font-medium transition-colors ${
                activeTab === 'extracurriculars'
                  ? 'bg-primary text-white'
                  : 'text-primary hover:text-primary/80'
              }`}
            >
              Ekstrakurikuler
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(activeTab === 'activities' ? activities : extracurriculars).map((item, index) => (
            <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-secondary-200">
              <div className="text-3xl mb-3">{item.icon}</div>
              <h4 className="font-heading font-semibold text-primary text-lg mb-2">
                {item.name}
              </h4>
              <p className="text-primary/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}