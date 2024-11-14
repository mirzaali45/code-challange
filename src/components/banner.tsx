"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Banner() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true });
  }, []);

  // Set tinggi slide untuk menjaga konsistensi
  const slideHeight = "h-[500px] md:h-[600px] lg:h-[700px]";

  return (
    <div className="max-w-full mx-auto overflow-hidden">
      <Swiper
        navigation={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        speed={800}
        loop={true}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className={`relative w-full ${slideHeight}`}>
            <Image
              src="/Background_Banner.png"
              alt="Banner Background Image"
              fill
              className="object-cover"
              priority
            />
            <section
              className="absolute inset-0 flex items-center justify-center"
              data-aos="fade-up"
            >
              <div className="container mx-auto text-center bg-white/70 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-xl max-w-xl border">
                <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
                  Welcome to{" "}
                  <span className="underline decoration-purple-500">
                    Our Bakery
                  </span>
                </h1>
                <p className="text-sm sm:text-lg text-gray-800 italic mb-3">
                  Where Every Bite Feels Like Home
                </p>
                <p className="text-xs sm:text-base text-gray-500 mb-5">
                  Experience the joy of freshly baked goods, made with love and
                  care.
                </p>
                <Link
                  href={`/products`}
                  className="bg-purple-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 transition-transform transform hover:scale-105"
                >
                  Explore Menu
                </Link>
              </div>
            </section>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className={`relative w-full ${slideHeight}`}>
            <Image
              src="/background.jpg"
              alt="Banner Background Image"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0 flex items-center justify-center"
              data-aos="fade-up"
            >
              <div className="bg-black/50 backdrop-blur-md p-6 sm:p-10 rounded-xl shadow-xl max-w-xl text-center text-white">
                <h1 className="text-2xl sm:text-4xl font-bold mb-3">
                  New! Frozen-To-Thaw Banana Pudding
                </h1>
                <p className="text-sm sm:text-base mb-4">
                  Our biggest launch ever is here: frozen-to-thaw Banana Pudding
                  made with real bananas and whipped to perfection.
                </p>
                <Link
                  href={"/products"}
                  className="bg-green-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-semibold shadow-md hover:bg-green-500 transition-transform transform hover:scale-105"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
