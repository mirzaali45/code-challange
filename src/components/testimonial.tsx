"use client";

import Image from "next/image"; // Mengimpor komponen Image

export default function Testimonials() {
  const testimonials = [
    { name: 'Alice', feedback: 'The best bakery in town! Their croissants are amazing.', image: '/60.jpg' },
    { name: 'John', feedback: 'Great customer service and even better cakes!', image: '/54.jpg' },
    { name: 'John Cena', feedback: 'Great customer service and quality bread!', image: '/32.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-5xl font-bold mb-10 text-gray-800" data-aos="fade-up">
          Customer Reviews
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md max-w-xs w-full hover:shadow-lg transition-all"
              data-aos="flip-left"
            >
              <Image
                src={testimonial.image}
                alt={`Photo of ${testimonial.name}`}
                width={64} // Ukuran gambar (disesuaikan)
                height={64} // Ukuran gambar (disesuaikan)
                className="mx-auto rounded-full mb-4"
                priority={index === 0} // Menetapkan prioritas gambar pertama untuk pemuatan lebih cepat
                sizes="(max-width: 768px) 50vw, 64px" // Ukuran gambar responsif sesuai layar
                quality={75} // Menurunkan kualitas untuk mempercepat pemuatan
              />
              <p className="text-gray-700 italic">{testimonial.feedback}</p>
              <h3 className="text-lg font-bold mt-4">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
