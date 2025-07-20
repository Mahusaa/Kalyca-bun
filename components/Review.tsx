import Image from 'next/image'

const reviews = [
  {
    name: "Aisyah Nurul",
    image: "/empati_optimized_700.webp",
    testimonial: "Saya sangat senang belajar di sekolah ini. Guru-gurunya baik dan saya bisa belajar Al-Quran dengan mudah!"
  },
  {
    name: "Muhammad Fadhlan",
    image: "/holistik_optimized_700.webp",
    testimonial: "Teman-teman di sini ramah dan banyak kegiatan seru, seperti panahan dan tahfidz Quran."
  },
  {
    name: "Siti Zahra",
    image: "/inklusif_optimized_700.webp",
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
              <Image
                src={review.image}
                alt={review.name}
                width={96}
                height={96}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
                priority={idx === 0}
              />
              <h4 className="font-heading font-semibold text-primary text-lg mb-2">{review.name}</h4>
              <p className="text-primary/80 text-center">&quot;{review.testimonial}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 