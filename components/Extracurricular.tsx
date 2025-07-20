interface ExtracurricularProps {
  extracurriculars: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
}

const extracurricularImages = [
  '/google_panahan_optimized_700.webp', // Panahan
  '/berenang_optimized_700.webp', // Berenang
  '/google_musik_optimized_700.webp', // Musik
  '/techclub-ezgif.com-jpg-to-webp-converter.webp', // Tech Club
  '/tahfidzquran.webp', // Tahfidz Quran
  '/seni_dan_kerajinan.webp', // Seni & Kerajinan
];

export default function Extracurricular({ extracurriculars }: ExtracurricularProps) {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h3 className="font-heading font-bold text-3xl text-primary mb-6">
          Aktivitas Ekstrakurikuler
        </h3>
        <p className="text-lg text-primary/80 max-w-2xl mx-auto">
          Mengembangkan bakat, minat, dan keterampilan di luar pembelajaran akademik
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {extracurriculars.map((activity, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden text-center shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            style={{
              backgroundImage: `url(${extracurricularImages[index]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: 180,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/50 transition-all duration-300"></div>
            <div className="relative z-10 p-6 flex flex-col h-full justify-between items-center">
              <div className="text-4xl mb-2 drop-shadow-lg">{activity.icon}</div>
              <h4 className="font-heading font-semibold text-white text-lg mb-1 drop-shadow-lg">
                {activity.name}
              </h4>
              <p className="text-white/80 text-sm drop-shadow text-center">
                {activity.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 