const reviews = [
  {
    name: "Aisyah Nurul",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    testimonial: "Saya sangat senang belajar di sekolah ini. Guru-gurunya baik dan saya bisa belajar Al-Quran dengan mudah!"
  },
  {
    name: "Muhammad Fadhlan",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    testimonial: "Teman-teman di sini ramah dan banyak kegiatan seru, seperti panahan dan tahfidz Quran."
  },
  {
    name: "Siti Zahra",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    testimonial: "Sekolah ini membuat saya lebih percaya diri dan saya suka belajar bersama teman-teman."
  }
];

export default function Review() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="font-heading font-bold text-3xl text-primary mb-6">
            Testimoni Anak-anak
          </h3>
          <p className="text-lg text-primary/80 max-w-2xl mx-auto">
            Cerita dan pengalaman anak-anak di sekolah Islam yang inklusif dan menyenangkan
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-secondary-50 rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h4 className="font-heading font-semibold text-primary text-lg mb-2">{review.name}</h4>
              <p className="text-primary/80 text-center">"{review.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 