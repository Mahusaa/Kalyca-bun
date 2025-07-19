export default function Admission() {
  const admissionSteps = [
    {
      step: "01",
      title: "Konsultasi",
      description: "Konsultasi dengan tim admission untuk memahami program dan kebutuhan anak"
    },
    {
      step: "02",
      title: "Pendaftaran",
      description: "Mengisi formulir pendaftaran dan menyiapkan dokumen yang diperlukan"
    },
    {
      step: "03",
      title: "Observasi",
      description: "Observasi kemampuan dan kesiapan anak untuk menentukan program yang tepat"
    },
    {
      step: "04",
      title: "Wawancara",
      description: "Wawancara dengan orang tua dan anak untuk memahami ekspektasi dan tujuan"
    },
    {
      step: "05",
      title: "Pengumuman",
      description: "Pengumuman hasil seleksi dan informasi selanjutnya"
    },
    {
      step: "06",
      title: "Daftar Ulang",
      description: "Pembayaran biaya pendaftaran dan persiapan masuk sekolah"
    }
  ];

  const requiredDocuments = [
    "Akta kelahiran (fotokopi)",
    "Kartu keluarga (fotokopi)",
    "Pas foto 3x4 (2 lembar)",
    "Surat keterangan sehat dari dokter",
    "Rapor/transkrip nilai (untuk pindahan)",
    "Surat pindah (untuk pindahan)",
    "Fotokopi ijazah (untuk pindahan)"
  ];

  const feeInfo = [
    {
      level: "Early Years (Preschool)",
      registration: "Rp 500.000",
      monthly: "Rp 800.000 - 1.200.000",
      note: "Biaya dapat dinegosiasikan"
    },
    {
      level: "Primary (SD)",
      registration: "Rp 750.000",
      monthly: "Rp 1.000.000 - 1.500.000",
      note: "Beasiswa tersedia untuk anak yatim"
    },
    {
      level: "Secondary (SMP)",
      registration: "Rp 1.000.000",
      monthly: "Rp 1.200.000 - 1.800.000",
      note: "Program beasiswa khusus tersedia"
    }
  ];

  return (
    <section id="admission" className="py-20 bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary mb-6">
            Pendaftaran Siswa Baru
          </h2>
          <p className="text-xl text-primary/80 max-w-3xl mx-auto">
            Proses pendaftaran yang mudah dan transparan untuk bergabung dengan keluarga besar Kalyca Azzahra School
          </p>
        </div>

        {/* Admission Process */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-12">
            Proses Pendaftaran
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-heading font-bold text-lg">{step.step}</span>
                  </div>
                  <h4 className="font-heading font-semibold text-primary text-xl">
                    {step.title}
                  </h4>
                </div>
                <p className="text-primary/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Fee Information */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-12">
            Informasi Biaya Pendidikan
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {feeInfo.map((fee, index) => (
                <div key={index} className="text-center">
                  <h4 className="font-heading font-semibold text-primary text-xl mb-4">
                    {fee.level}
                  </h4>
                  <div className="space-y-3">
                    <div className="bg-secondary-50 rounded-lg p-4">
                      <p className="text-primary/70 text-sm mb-1">Biaya Pendaftaran</p>
                      <p className="font-heading font-bold text-primary text-lg">{fee.registration}</p>
                    </div>
                    <div className="bg-accent/10 rounded-lg p-4">
                      <p className="text-primary/70 text-sm mb-1">SPP Bulanan</p>
                      <p className="font-heading font-bold text-accent text-lg">{fee.monthly}</p>
                    </div>
                    <p className="text-primary/60 text-sm italic">{fee.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-highlight/20 rounded-xl">
              <h4 className="font-heading font-semibold text-primary text-lg mb-3 text-center">
                💡 Informasi Penting
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-primary/80">
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Biaya dapat dinegosiasikan sesuai kemampuan ekonomi keluarga</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Beasiswa penuh tersedia untuk anak yatim dan keluarga kurang mampu</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Biaya sudah termasuk seragam, buku pelajaran, dan ekstrakurikuler</span>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-5 h-5 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Pembayaran dapat dilakukan secara bertahap atau cicilan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-3xl text-primary text-center mb-12">
            Dokumen yang Diperlukan
          </h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requiredDocuments.map((document, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <span className="text-primary/80">{document}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-600 rounded-2xl p-12 text-white">
            <h3 className="font-heading font-bold text-3xl mb-6">
              Siap Bergabung dengan Kami?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Daftarkan anak Anda sekarang dan berikan mereka pendidikan terbaik untuk masa depan yang cerah
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-highlight text-primary px-8 py-4 rounded-lg hover:bg-highlight/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Hubungi Kami Sekarang
              </a>
              <a
                href="tel:+6281234567890"
                className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📞 Telepon Langsung
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
