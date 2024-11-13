"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";

interface IShare {
  Icon: IconType;
  link: string;
}

const share: IShare[] = [
  {
    Icon: IoLogoFacebook,
    link: "https://www.facebook.com/share/sharer.php?u=",
  },
  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offsite/?url=",
  },
  { Icon: IoLogoTwitter, link: "https://www.twitter.com/intent/tweet?url=" },
  { Icon: IoLogoWhatsapp, link: "https://wa.me/?text=" },
];

export default function Footer({ slug }: { slug?: string }) {
  const domain = "https://blog-cms-mirza.vercel.app/blog/";
  return (
    <footer className="bg-gradient-to-r from-black to-black text-white py-12">
      <div className="container mx-auto px-6 text-center md:text-left md:flex md:justify-between items-center space-y-6 md:space-y-0">
        {/* Company Info */}
        <div data-aos="fade-right" className="flex flex-col items-center md:items-start">
          <h3 className="text-4xl font-bold mb-2 text-yellow-300">
            Our Bakery
          </h3>
          <p className="text-gray-300 text-sm max-w-md">
            Baking with love and passion since 2010. Indulge in our fresh and
            delightful creations made just for you.
          </p>
        </div>

        {/* Social Links */}
        <div data-aos="fade-left" className="flex flex-col items-center md:items-end">
          <h4 className="text-lg font-semibold mb-4">Share with friends</h4>
          <div className="flex space-x-6 justify-center md:justify-end">
            {share.map((item, idx) => (
              <Link
                key={idx}
                href={`${item.link}${domain}${slug}`}
                target="_blank"
                className="w-10 h-10 flex justify-center items-center text-white bg-purple-700 rounded-full border border-purple-500 hover:bg-yellow-400 hover:text-purple-900 transition duration-300"
              >
                <item.Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <p className="text-gray-500 text-sm mt-10 text-center">
        &copy; {new Date().getFullYear()} Our Bakery. All Rights Reserved.
      </p>
    </footer>
  );
}
