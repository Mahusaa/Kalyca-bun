const aboutImages = {
  mission: '/misi kami.webp',
  vision: '/visi_kami.webp',
  school: '/pendidikan holistik.webp',
};

export default function AboutUs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Tentang Kami
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Building Moslems Generation
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${aboutImages.mission})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 180,
              }}
            >
              <div className="absolute inset-0 bg-primary/70"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">Misi Kami</h3>
                </div>
                <div className="text-white/90 leading-relaxed space-y-3">
                  <p>
                    Menanamkan keimanan dan Ketaqwaan kepada Tuhan YME melalui Ajaran Agama Islam yang Rahmatan Lil Alamin.
                  </p>
                  <p>
                    Mengembangkan bidang Ilmu Pengetahuan, Teknologi dan Seni berdasarkan minat, bakat dan potensi peserta didik.
                  </p>
                  <p>
                    Mengembangkan karakter diri, kewirausahaan, kepemimpinan kemandirian melalui pembiasaan dengan pendekatan Montessori Islam.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="relative rounded-2xl overflow-hidden shadow-lg"
              style={{
                backgroundImage: `url(${aboutImages.vision})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: 180,
              }}
            >
              <div className="absolute inset-0 bg-accent/80"></div>
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">Visi Kami</h3>
                </div>
                <p className="text-white/90 leading-relaxed">
                  Menjadi tempat pendidikan terbaik bagi anak-anak untuk mengembangkan diri, membangun karakter,
                  menemukan minat dan bakat, dalam suasana kekeluargaan dan kebahagiaan.
                </p>
              </div>
            </div>
          </div>
          {/* School Image/Illustration */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <div
              className="relative bg-gradient-to-br from-secondary-100 to-secondary-200 h-96 flex items-center justify-center"
              style={{
                backgroundImage: `url(${aboutImages.school})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-primary/60"></div>
              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h4 className="font-heading font-semibold text-white text-xl mb-2">
                  Pendidikan Holistik
                </h4>
                <p className="text-white/80">
                  Pembelajaran secara Holistik dan terkait
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
