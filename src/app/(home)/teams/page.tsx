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
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]); // Berikan tipe data di sini
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initialize AOS animation
    AOS.init({ duration: 800, easing: "ease-in-out" });

    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?results=6"
        );
        setTeamMembers(response.data.results); // Simpan data ke state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching team data:", error);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading team members...</div>;
  }

  return (
    <section className="py-10 px-6 p-4 bg-gradient-to-b from-gray-100 to-gray-200">
      <h1
        className="text-4xl font-bold text-center text-gray-800 mb-8"
        data-aos="fade-up"
      >
        Meet Our Team
      </h1>
      <p
        className="text-center text-gray-600 mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Get to know the amazing people who make our company extraordinary!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="w-24 h-24 relative mx-auto mb-4">
              <Image
                src={member.picture.large}
                alt={`${member.name.first} ${member.name.last}`}
                fill
                className="rounded-full border-4 border-purple-500 shadow-sm object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              {member.name.first} {member.name.last}
            </h2>
            <p className="text-gray-600">
              {member.location.city}, {member.location.country}
            </p>
            <p className="text-sm text-gray-500 mb-4">{member.email}</p>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-purple-700 transition duration-300">
              Contact
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamsPage;
