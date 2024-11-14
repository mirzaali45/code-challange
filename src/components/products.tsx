"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import necessary Swiper modules for navigation, pagination, and responsiveness
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const ProductsPage = () => {
  const router = useRouter();

  const products = [
    {
      name: "Breads",
      slug: "breads",
      image: "/TypesBread.jpg", // Gambar roti
    },
    {
      name: "Pastries and Desserts",
      slug: "pastries-desserts",
      image: "/dessert.jpg", // Gambar pastries
    },
    {
      name: "Cakes",
      slug: "cakes",
      image: "/cake.jpg", // Gambar kue
    },
    {
      name: "Drinks",
      slug: "drinks",
      image: "/Watermelon.jpg", // Gambar minuman
    },
  ];

  const handleNavigate = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <section className="py-16 px-3 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-10">
          Our Products
        </h1>

        {/* Swiper component with responsive behavior */}
        <Swiper
          spaceBetween={30} // Space between slides
          slidesPerView={1} // Default 1 slide per view
          breakpoints={{
            640: { slidesPerView: 2 }, // 2 slides for screens >= 640px
            1024: { slidesPerView: 3 }, // 3 slides for screens >= 1024px
          }}
          loop={true} // Infinite loop
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Autoplay every 2.5 seconds
          grabCursor={true} // Enable grab cursor for better interaction
          modules={[Navigation, Pagination, Autoplay]} // Enable necessary modules
          navigation // Show next/prev buttons
          pagination={{ clickable: true }} // Enable pagination dots
          aria-label="Product carousel"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div
                className="group bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all"
                onClick={() => handleNavigate(product.slug)}
                aria-label={`View details about ${product.name}`}
              >
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={product.image}
                    alt={`${product.name} thumbnail`} // Descriptive alt text for SEO
                    fill
                    className="object-cover rounded-md transition-transform transform group-hover:scale-105"
                    loading="lazy" // Enable lazy loading for images
                  />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-gray-600">
                  Discover the best {product.name} for your taste.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProductsPage;
