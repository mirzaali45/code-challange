// "use client";

import { getProduct } from "@/lib/product";
import { IProductFields } from "@/types/product";
import Image from "next/image";
import React from "react";

export default async function ProductContentFull() {
  const products: IProductFields[] = await getProduct();

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        All Products
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="group bg-white rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition-all"
          >
            <Image
              src={`https:${item.fields.image.fields.file.url}`}
              alt={item.fields.name}
              width={300}
              height={200}
              className="w-full h-40 object-cover rounded-md mb-4 transition-transform transform group-hover:scale-105"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.fields.name}
            </h2>
            <p className="text-gray-600 text-sm mb-2">
              Price: <span className="text-green-500">${item.fields.price}</span>
            </p>
            <p className="text-gray-500 italic text-sm">
              {item.fields.tagline || "Delicious and fresh!"}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
