"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import "aos/dist/aos.css";
import AOS from "aos";

// Definisikan tipe data berdasarkan struktur API
interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    country: string;
  };
  email: string;
  picture: {
    large: string;
  };
}

const TeamsPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out", once: true }); // Tambahkan `once` untuk performa lebih baik

    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setTeamMembers(response.data.results);
      } catch (error) {
        console.error("Error fetching team data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600 border-solid mx-auto mb-4"></div>
          <p className="text-gray-600">Loading team members...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 px-6 bg-gradient-to-b from-gray-50 to-gray-200 mt-5">
      <div className="container mx-auto">
        <h1
          className="text-4xl font-extrabold text-center text-purple-700 mb-8"
          data-aos="fade-up"
        >
          Meet Our Team
        </h1>
        <p
          className="text-center text-gray-600 mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Get to know the amazing people who make our company extraordinary!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative mx-auto mb-4 w-28 h-28">
                <Image
                  src={member.picture.large}
                  alt={`${member.name.first} ${member.name.last}`}
                  fill
                  className="rounded-full border-4 border-purple-500 shadow-lg object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 text-center">
                {member.name.first} {member.name.last}
              </h2>
              <p className="text-gray-600 text-center">
                {member.location.city}, {member.location.country}
              </p>
              <p className="text-sm text-gray-500 text-center mb-4">
                {member.email}
              </p>
              <div className="text-center">
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
                  Contact
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsPage;
