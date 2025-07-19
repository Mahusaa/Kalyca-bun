export default function OurValue() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="font-heading font-bold text-3xl text-primary mb-8">
            Nilai-Nilai Kami
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🌱",
                title: "Inklusivitas",
                description: "Pendidikan untuk semua anak tanpa terkecuali"
              },
              {
                icon: "🎯",
                title: "Holistik",
                description: "Pengembangan menyeluruh dari semua aspek"
              },
              {
                icon: "🏠",
                title: "Montessori",
                description: "Pendekatan pembelajaran yang berpusat pada anak"
              },
              {
                icon: "💻",
                title: "Integrasi Teknologi",
                description: "Menggunakan teknologi untuk pembelajaran yang efektif"
              },
              {
                icon: "❤️",
                title: "Empati",
                description: "Mengembangkan rasa peduli dan kasih sayang"
              },
              {
                icon: "⭐",
                title: "Pengembangan Karakter",
                description: "Membentuk kepribadian yang unggul dan berakhlak"
              }
            ].map((value, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="font-heading font-semibold text-primary text-lg mb-2">
                  {value.title}
                </h4>
                <p className="text-primary/70">
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