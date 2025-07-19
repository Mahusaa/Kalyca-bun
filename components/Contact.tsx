export default function Contact() {
  const contactInfo = [
    {
      icon: "📍",
      title: "Lokasi",
      details: [
        "Jl. Kapitan 1 No.177, RT. 01 RW. 04",
        "Desa Babakan, Tapos, Sukatani, Depok",
        "Kota Depok, Jawa Barat 16454"
      ]
    },
    {
      icon: "📞",
      title: "Telepon",
      details: [
        "+62 812-3456-7890",
        "+62 812-3456-7891"
      ]
    },
    {
      icon: "✉️",
      title: "Email",
      details: [
        "info@kalycaazzahra.sch.id",
        "admission@kalycaazzahra.sch.id"
      ]
    },
    {
      icon: "🕒",
      title: "Jam Operasional",
      details: [
        "Senin - Jumat: 07:00 - 16:00",
        "Sabtu: 08:00 - 12:00",
        "Minggu: Tutup"
      ]
    }
  ];

  const socialMedia = [
    {
      name: "Instagram",
      handle: "@kalyca.azzahra",
      icon: "📷",
      color: "bg-gradient-to-r from-purple-500 to-pink-500"
    },
    {
      name: "TikTok",
      handle: "@kalyca.azzahra",
      icon: "🎵",
      color: "bg-gradient-to-r from-pink-500 to-red-500"
    },
    {
      name: "Facebook",
      handle: "@kalyca.azzahra",
      icon: "📘",
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Hubungi Kami
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Kami siap membantu Anda dan menjawab semua pertanyaan tentang program pendidikan kami
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="font-heading font-bold text-3xl text-primary mb-8">
              Informasi Kontak
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary text-lg mb-2">
                      {info.title}
                    </h4>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-primary/80">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h4 className="font-heading font-semibold text-primary text-xl mb-6">
                Ikuti Kami di Media Sosial
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${social.color} text-white rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
                  >
                    <div className="text-2xl mb-2">{social.icon}</div>
                    <h5 className="font-heading font-semibold text-sm mb-1">
                      {social.name}
                    </h5>
                    <p className="text-xs opacity-90">{social.handle}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-3xl text-primary mb-8">
              Kirim Pesan
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-primary font-medium mb-2">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Masukkan nama depan"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-primary font-medium mb-2">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                    placeholder="Masukkan nama belakang"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-primary font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="contoh@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-primary font-medium mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-primary font-medium mb-2">
                  Subjek
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                >
                  <option value="">Pilih subjek</option>
                  <option value="admission">Pendaftaran Siswa Baru</option>
                  <option value="information">Informasi Program</option>
                  <option value="facilities">Fasilitas Sekolah</option>
                  <option value="scholarship">Beasiswa</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-primary font-medium mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg hover:bg-primary-600 transition-colors duration-200 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-secondary-50 rounded-2xl p-8">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-8">
            Lokasi Kami
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="font-heading font-semibold text-primary text-xl mb-4">
                Kalyca Azzahra School
              </h4>
              <p className="text-primary/80 mb-6 leading-relaxed">
                Berada di lokasi strategis di Depok, West Java dengan akses yang mudah 
                dari berbagai arah. Lingkungan yang nyaman dan aman untuk kegiatan 
                pembelajaran yang optimal.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-primary/80">Jl. Kapitan 1 No.177, RT. 01 RW. 04, Desa Babakan, Tapos, Sukatani, Depok, Kota Depok, Jawa Barat 16454</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-primary/80">15 menit dari Stasiun Depok</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-primary/80">Parkir luas tersedia</span>
                </div>
              </div>
            </div>
            <div className="bg-secondary-200 rounded-xl h-64 flex items-center justify-center p-0 overflow-hidden">
              <iframe
                title="Kalyca Azzahra School Location"
                src="https://www.google.com/maps?q=Jl.+Kapitan+1+No.177,+RT.+01+RW.+04,+Desa+Babakan,+Tapos,+Sukatani,+Depok,+Kota+Depok,+Jawa+Barat+16454&hl=id&z=17&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, width: '100%', height: '100%', minHeight: '16rem', borderRadius: '0.75rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 