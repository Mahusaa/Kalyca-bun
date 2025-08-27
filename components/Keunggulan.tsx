export default function Keunggulan() {
  return (
    <section className="bg-primary/5 rounded-2xl p-8 my-12">
      <h3 className="font-heading font-bold text-3xl text-primary text-center mb-8">
        Keunggulan Kami
      </h3>
      <p className="text-center text-primary/80 mb-8 max-w-4xl mx-auto">
        Sekolah Islam terdepan di Depok yang mengintegrasikan pendidikan alam, teknologi, dan nilai-nilai Islami
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: "Sekolah Alam-Kebun",
            description: "Sekolah Islam di Depok dengan konsep alam-kebun yang asri dan menyatu dengan lingkungan"
          },
          {
            title: "Lingkungan Belajar Variatif",
            description: "Menghadirkan pengalaman belajar unik melalui School with Wall dan School without Wall"
          },
          {
            title: "Kurikulum Nasional & Montessori Islam",
            description: "Mengintegrasikan Kurikulum Nasional dengan kurikulum unggulan Montessori Islam di Depok"
          },
          {
            title: "Lingkungan Islami & Aman",
            description: "Suasana Islami, zero bullying, dengan fasilitas lengkap dan lingkungan yang nyaman untuk anak"
          },
          {
            title: "Program Relevan dengan Zaman",
            description: "Program unggulan sekolah Islam Depok yang disesuaikan dengan kebutuhan masa kini dan perkembangan anak"
          },
          {
            title: "Tenaga Pendidik Profesional",
            description: "Guru profesional, ramah, dan berpengalaman mendampingi anak tumbuh menjadi generasi berprestasi"
          }
        ].map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <h4 className="font-heading font-semibold text-primary text-lg mb-1">
                {point.title}
              </h4>
              <p className="text-primary/80 leading-relaxed">
                {point.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 