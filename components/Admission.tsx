import { admissionProcess } from "@/app/admission/data";

export default function Admission() {
  const requiredDocuments = [
    "Akta kelahiran (fotokopi)",
    "Pas foto 3x4 background merah (3 lembar)",
    "Pas foto 4x6 background merah (2 lembar)",
    "Rapor/transkrip nilai",
    "Fotokopi KTP kedua orang tua",
    "Fotokopi Kartu keluarga ",
    "Fotokopi ijazah",
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
            {admissionProcess.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-heading font-bold text-lg">{`0${index + 1}`}</span>
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
