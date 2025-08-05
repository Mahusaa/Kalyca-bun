"use client"
import Image from 'next/image'
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

  const socialMedia = [
    {
      name: "Instagram",
      icon: "📷",
      url: "https://www.instagram.com/kalyca.azzahra"
    },
    {
      name: "YouTube",
      icon: "📺",
      url: "https://youtube.com/@kalycaazzahraschool?si=iaOGn8qmO1-0JxUq"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/6287775465406?text=Halo%20ini%20ingin%20bertanya..."
    }
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo-kalyca-azzahra.png"
                  alt="Kalyca Azzahra School Logo"
                  fill
                  className="object-contain"
                  priority
                />
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
              {socialMedia.map((social, idx) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-secondary-200 rounded-lg flex items-center justify-center hover:bg-secondary-300 transition-colors duration-200"
                  aria-label={social.name}
                >
                  <span className="text-primary text-lg">{social.icon}</span>
                </a>
              ))}
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
        <div className="border-t border-secondary-700 pt-8 mb-8" id="contact">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Lokasi</h5>
              <a
                href="https://www.google.com/maps?um=1&ie=UTF-8&fb=1&gl=id&sa=X&geocode=Kd1N-Tdl62kuMTjHhGqmE1J2&daddr=Jl.+Kapitan+1+No.177,+RT.+01+RW.+04,+Desa+Babakan,+Tapos,+Sukatani,+Depok,+Kota+Depok,+Jawa+Barat+16454"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 block"
              >
                Jl. Kapitan 1 No.177, RT. 01 RW. 04<br />Desa Babakan, Tapos, Sukatani, Depok<br />Kota Depok, Jawa Barat 16454
              </a>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">WhatsApp</h5>
              <a
                href="https://wa.me/6287775465406?text=Halo%20ini%20ingin%20bertanya..."
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-300 hover:text-white transition-colors duration-200 block"
              >
                +62 877-7546-5406
              </a>
            </div>
            <div>
              <h5 className="font-heading font-semibold text-lg mb-4">Email</h5>
              <a
                href="mailto:info@kalycaazzahra.sch.id"
                className="text-secondary-300 hover:text-white transition-colors duration-200 block"
              >
                info@kalycaazzahra.sch.id
              </a>
              <a
                href="mailto:admission@kalycaazzahra.sch.id"
                className="text-secondary-300 hover:text-white transition-colors duration-200 block"
              >
                admission@kalycaazzahra.sch.id
              </a>
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
