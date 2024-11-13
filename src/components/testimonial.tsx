"use client";

import Image from "next/image"; // Mengimpor komponen Image

export default function Testimonials() {
  const testimonials = [
    { name: 'Alice', feedback: 'The best bakery in town! Their croissants are amazing.', image: '/60.jpg' },
    { name: 'John', feedback: 'Great customer service and even better cakes!', image: '/54.jpg' },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2
          className="text-5xl font-bold mb-10 text-gray-800"
          data-aos="fade-up" // Judul fade-up
        >
          Customer Reviews
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md max-w-sm hover:shadow-lg transition-all"
              data-aos="flip-left" // Animasi flip-left
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={64} // Ukuran gambar (disesuaikan)
                height={64} // Ukuran gambar (disesuaikan)
                className="mx-auto rounded-full mb-4"
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
