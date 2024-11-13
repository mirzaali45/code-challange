"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

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
      image: "/watermelon.jpg", // Gambar minuman
    },
  ];

  const handleNavigate = (slug: string) => {
    router.push(`/products/${slug}`);
  };

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Our Products
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all"
            onClick={() => handleNavigate(product.slug)}
          >
            <div className="relative w-full h-40 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-md transition-transform transform group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600">
              Discover the best {product.name} for your taste.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
