"use client";

export default function CompanyOverview() {
  return (
    <section
      className="py-16 bg-gray-50 text-center"
      id="about"
      data-aos="fade-right"
      aria-labelledby="company-overview"
    >
      <div className="container mx-auto px-6">
        <h2
          id="company-overview"
          className="text-3xl md:text-5xl font-bold mb-6 text-gray-800"
        >
          About Our Bakery
        </h2>
        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          Founded in 2010, Our Bakery is a family-owned business dedicated to
          crafting the finest baked goods. Our team combines tradition with
          innovation to deliver exceptional flavors and memorable experiences.
        </p>
      </div>
    </section>
  );
}
