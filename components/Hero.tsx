import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/kalyca-kids.jpg"
          alt="Kalyca Azzahra School Students"
          fill
          priority
          className="object-cover object-center w-full h-full"
          style={{ objectPosition: 'center 30%' }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6 md:space-y-8 text-white">
            <div className="space-y-3 md:space-y-4">
              <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight">
                Kalyca Azzahra
                <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-highlight font-medium mt-1 md:mt-2">
                  School
                </span>
              </h1>
            </div>

            {/* Description - Shorter on mobile */}
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <span className="hidden md:inline">
                Sekolah Islam Montessori di Depok dengan konsep Sekolah Alam Kebun. Menggabungkan kurikulum nasional dan Montessori Islam, menghadirkan pembelajaran Islami, bilingual, aktif, dan berbasis proyek. Lingkungan aman, nyaman, dan menyenangkan untuk menumbuhkan anak cerdas, kreatif, dan berakhlak mulia.
              </span>
              <span className="md:hidden">
                Sekolah inklusif Montessori dengan teknologi untuk membentuk individu
                yang berempati dan tangguh.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/6287775465406?text=Halo%20ini%20ingin%20bertanya..."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-highlight text-primary px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-yellow-300 transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Hubungi WhatsApp</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#programs"
                className="group bg-white/20 backdrop-blur-sm text-white border border-white/30 px-6 md:px-8 py-3 md:py-4 rounded-xl hover:bg-white/30 transition-all duration-300 font-medium text-base md:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <span>Pelajari Lebih Lanjut</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

          </div>

          {/* Right Content - Feature Cards - Hidden on mobile to reduce scrolling */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Feature Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">🌱</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Montessori</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Pendekatan pembelajaran yang berpusat pada anak
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-xl">💻</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Teknologi</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Integrasi teknologi dalam pembelajaran
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <span className="text-white text-xl">❤️</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Inklusif</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Pendidikan untuk semua anak
                </p>
              </div>

              {/* Feature Card 4 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-highlight rounded-xl flex items-center justify-center mb-4">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">Holistik</h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Pengembangan menyeluruh
                </p>
              </div>
            </div>

            {/* Floating Achievement Badge */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg">
              <div className="text-center">
                <div className="text-2xl mb-2">🏆</div>
                <p className="text-primary font-bold text-sm">Terakreditasi A</p>
                <p className="text-primary/60 text-xs">Kualitas Terjamin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Quick Features - Compact */}
        <div className="mt-8 lg:hidden">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-highlight rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-white/90 text-xs">Pendidikan Inklusif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-highlight rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-white/90 text-xs">Beasiswa Yatim</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-highlight rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-white/90 text-xs">Fasilitas Lengkap</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-highlight rounded-lg flex items-center justify-center">
                  <span className="text-primary text-xs">✓</span>
                </div>
                <span className="text-white/90 text-xs">Biaya Terjangkau</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-white rounded-full mt-1 md:mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile-specific decorative elements */}
      <div className="lg:hidden absolute top-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-highlight/20 rounded-full blur-xl"></div>
      <div className="lg:hidden absolute bottom-16 left-4 w-16 h-16 md:w-20 md:h-20 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
} 
