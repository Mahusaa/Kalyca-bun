export default function OurValue() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-heading font-bold text-3xl text-primary mb-8">
            Nilai-Nilai Kami
          </h3>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto mb-12">
            Fondasi pendidikan yang membentuk karakter unggul dan berakhlak mulia
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🕌",
                title: "Religius",
                description: "Membangun karakter sesuai nilai-nilai Islam yang menjadi landasan moral dan spiritual"
              },
              {
                icon: "🏠",
                title: "Islamic Montessori School",
                description: "Menggabungkan metode Montessori dengan nilai-nilai Islami dalam pembelajaran yang menyenangkan"
              },
              {
                icon: "🌍",
                title: "Berpengantar Bahasa Inggris",
                description: "Menggunakan Bahasa Inggris sebagai pengantar dalam kegiatan belajar untuk persiapan global"
              },
              {
                icon: "📚",
                title: "Tanpa Buku & PR",
                description: "Fokus pada pengalaman belajar langsung dan eksplorasi yang bermakna"
              },
              {
                icon: "🎯",
                title: "Project-Based Learning",
                description: "Belajar melalui proyek kreatif dan nyata yang mengembangkan keterampilan praktis"
              },
              {
                icon: "❤️",
                title: "Lingkungan Positif",
                description: "Suasana belajar yang aman, menyenangkan, dan bebas dari bullying"
              }
            ].map((value, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300 border border-secondary-200">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-heading font-semibold text-primary text-lg mb-3">
                  {value.title}
                </h4>
                <p className="text-primary/70 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 