"use client"
export default function Footer() {
  const quickLinks = [
    { name: "Beranda", href: "#home" },
    { name: "Tentang Kami", href: "#about" },
    { name: "Program", href: "#programs" },
    { name: "Fasilitas", href: "#facilities" },
    { name: "Pendaftaran", href: "#admission" },
    { name: "Kontak", href: "#contact" }
  ];

  const programs = [
    "Early Years (Preschool)",
    "Primary (SD)",
    "Secondary (SMP)",
    "Pendidikan Inklusif",
    "Program Beasiswa"
  ];

  const contactInfo = [
    "Jl. Raya Depok No. 123",
    "Depok, West Java 16415",
    "+62 812-3456-7890",
    "info@kalycaazzahra.sch.id"
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-highlight rounded-lg flex items-center justify-center">
                <span className="text-primary font-heading font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-2xl">Kalyca Azzahra</h3>
                <p className="text-secondary-300 text-sm">Everyone Deserves a Good Education</p>
              </div>
            </div>
            <p className="text-secondary-300 mb-6 leading-relaxed">
              Sekolah inklusif Montessori yang mengintegrasikan teknologi untuk membentuk individu
              yang berempati, tangguh, dan berpikiran global dari usia dini hingga menengah.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-secondary-200 rounded-lg flex items-center justify-center hover:bg-secondary-300 transition-colors duration-200">
                <span className="text-primary text-lg">📷</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-200 rounded-lg flex items-center justify-center hover:bg-secondary-300 transition-colors duration-200">
                <span className="text-primary text-lg">🎵</span>
              </a>
              <a href="#" className="w-10 h-10 bg-secondary-200 rounded-lg flex items-center justify-center hover:bg-secondary-300 transition-colors duration-200">
                <span className="text-primary text-lg">📘</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Tautan Cepat</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Program</h4>
            <ul className="space-y-3">
              {programs.map((program, index) => (
                <li key={index}>
                  <span className="text-secondary-300">{program}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-secondary-700 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Lokasi</h5>
              <p className="text-secondary-300">Jl. Raya Depok No. 123<br />Depok, West Java 16415</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Telepon</h5>
              <p className="text-secondary-300">+62 812-3456-7890<br />+62 812-3456-7891</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Email</h5>
              <p className="text-secondary-300">info@kalycaazzahra.sch.id<br />admission@kalycaazzahra.sch.id</p>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Jam Operasional</h5>
              <p className="text-secondary-300">Senin - Jumat: 07:00 - 16:00<br />Sabtu: 08:00 - 12:00</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-300 text-sm">
              © 2024 Kalyca Azzahra School. Semua hak dilindungi.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors duration-200">
                Peta Situs
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
} 
