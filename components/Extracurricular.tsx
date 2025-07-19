interface ExtracurricularProps {
  extracurriculars: Array<{
    name: string;
    icon: string;
    description: string;
  }>;
}

const extracurricularImages = [
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
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