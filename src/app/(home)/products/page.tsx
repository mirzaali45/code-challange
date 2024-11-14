"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProductsPage = () => {
  const router = useRouter();

  // Data produk
  const products = [
    {
      name: "Breads",
      slug: "breads",
      image: "/TypesBread.jpg",
    },
    {
      name: "Pastries and Desserts",
      slug: "pastries-desserts",
      image: "/dessert.jpg",
    },
    {
      name: "Cakes",
      slug: "cakes",
      image: "/cake.jpg",
    },
    {
      name: "Drinks",
      slug: "drinks",
      image: "/watermelon.jpg",
    },
  ];

  // Navigasi ke halaman detail produk
  const handleNavigate = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      {/* Judul */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>

      {/* Daftar produk */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-4 cursor-pointer"
            onClick={() => handleNavigate(product.slug)}
          >
            {/* Gambar produk */}
            <div className="relative w-full h-40 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md transition-transform transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                priority={index === 0} // Beri prioritas pada gambar pertama
              />
            </div>

            {/* Nama produk */}
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>

            {/* Deskripsi produk */}
            <p className="text-sm text-gray-600">
              Discover the best {product.name} for your taste.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
