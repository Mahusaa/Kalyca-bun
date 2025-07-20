export default function Keunggulan() {
  return (
    <section className="bg-primary/5 rounded-2xl p-8 my-12">
      <h3 className="font-heading font-bold text-3xl text-primary text-center mb-8">
        Keunggulan Kami
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Islamic Montessori Approach with CTA */}
        <div className="flex items-start space-x-3">
          <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-1">
            <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
            <p className="text-primary/80 mb-2 md:mb-0">Pendekatan <span className="font-semibold">Islamic Montessori</span> yang holistik dan berkarakter</p>
          </div>
        </div>
        {/* Existing points */}
        {[
          "Pendidikan inklusif untuk anak berkebutuhan khusus",
          "Beasiswa penuh untuk anak yatim",
          "Biaya pendidikan yang terjangkau dan dapat dinegosiasikan",
          "Program bilingual (Indonesia & Inggris)",
          "Integrasi teknologi dalam pembelajaran",
          "Fasilitas lengkap dan modern",
          "Buku dan materi pembelajaran disediakan oleh sekolah"
        ].map((point, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-highlight rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-primary/80">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 