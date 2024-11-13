"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <div className="max-w-full mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <div className="relative w-full h-[600px] overflow-hidden">
              <Image
                src="/Background_Banner.png"
                alt="Banner Background Image slid"
                layout="fill"
                objectFit="cover"
                priority
                className="opacity-100"
              />
              <section
                className="absolute inset-0 flex items-center justify-center"
                data-aos="fade-up"
              >
                <div className="container mx-auto text-center relative bg-inherit backdrop-blur-lg p-10 md:p-14 rounded-[2rem] shadow-2xl max-w-3xl border border-transparent">
                  <h1 className="text-6xl font-extrabold text-black mb-4">
                    Welcome to{" "}
                    <span className="underline decoration-white">
                      Our Bakery
                    </span>
                  </h1>
                  {/* Tambahkan tagline */}
                  <p className="text-xl text-black italic mb-6 font-bold">
                    Where Every Bite Feels Like Home
                  </p>
                  <p className="text-lg text-gray-400 mb-6 font-bold">
                    Experience the joy of freshly baked goods, made with love
                    and care.
                  </p>
                  <Link
                    href={`/products`}
                    className=" font-semibold px-8 py-4 rounded-full shadow-lg  transition-all bg-purple-200 text-purple-950 hover:scale-105 hover:border-purple-950 hover:bg-purple-950 hover:text-white"
                  >
                    Explore Menu
                  </Link>
                </div>
              </section>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/* (==========================) */}
            <div className="relative w-full h-[600px] overflow-hidden">
              {/* Background Image */}
              <Image
                src="/background.jpg"
                alt="Banner Background Image"
                layout="fill"
                objectFit="cover"
                priority
                className="opacity-100"
              />

              {/* Text Overlay Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative bg-inherit backdrop-blur-lg p-10 md:p-14 rounded-[2rem] shadow-2xl max-w-3xl mx-auto text-center border border-transparent">
                  {/* Decorative Shape */}
                  <div className="absolute -z-10 inset-0 rounded-[2rem] bg-transparent shadow-lg"></div>

                  {/* Headline */}
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                    New! Frozen-To-Thaw Banana Pudding
                  </h1>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    Our biggest launch ever is here: frozen-to-thaw Banana
                    Pudding made with real bananas and whipped to perfection.
                  </p>

                  {/* Button */}
                  <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-500 transition transform hover:scale-105 focus:outline-none">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-gradient-to-br from-[#fef8f3] to-[#fdf1eb] p-8 rounded-lg shadow-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Kolom Kiri: Informasi Webinar */}
              <div className="flex flex-col justify-center space-y-6">
                {/* Webinar Header */}
                <div className="text-center lg:text-left">
                  <p className="text-sm font-semibold text-[#e27649] uppercase tracking-wide">
                    August 22
                  </p>
                  <h1 className="text-5xl font-bold text-[#773f2e] tracking-tight">
                    Webinar
                  </h1>
                </div>

                {/* Judul Utama */}
                <h2 className="text-4xl font-extrabold text-[#56342e] leading-tight">
                  Vegan Breads
                </h2>
                <p className="text-lg text-[#e27649] font-medium">
                  Learn how to prepare and bake different types of vegan breads!
                </p>

                {/* Deskripsi */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  Join us for an exclusive session where we explore the art of
                  making healthy, delicious, and creative bread for all vegan
                  enthusiasts.
                </p>

                {/* Tombol Daftar */}
                <a
                  href="#"
                  className="inline-block bg-[#e27649] text-white text-sm px-6 py-3 rounded-full font-medium shadow-lg hover:bg-[#c9603b] hover:scale-105 transition transform"
                >
                  Sign Up Here
                </a>
              </div>

              {/* Kolom Kanan: Gambar dengan Pola Latar Belakang */}
              <div className="relative flex justify-center items-center bg-[#f7e2d6] rounded-lg overflow-hidden">
                {/* Pola Oranye */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-20"
                  style={{ backgroundImage: "url('/wallpaper.jpg')" }}
                ></div>

                {/* Gambar Utama */}
                <Image
                  src="/download.jpg"
                  alt="Basket of Bread"
                  width={400}
                  height={400}
                  className="relative rounded-lg shadow-xl transform hover:scale-105 transition duration-300"
                />

                {/* Logo Bakery */}
                <div className="absolute bottom-4 right-4 bg-[#773f2e] text-white px-4 py-2 rounded-full flex items-center space-x-2 shadow-lg">
                  <div className="text-xs font-bold">Sinar Bulan Bakery</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
