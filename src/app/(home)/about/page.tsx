import Image from 'next/image';

export default function About() {
  const teamMembers = [
    {
      name: "Jane Doe",
      title: "Founder & Head Baker",
      description:
        "Jane has over 15 years of experience in the culinary arts and a passion for creating unique baked goods.",
      image: "/36.jpg",
    },
    {
      name: "John Smith",
      title: "Operations Manager",
      description:
        "John ensures everything runs smoothly, from sourcing ingredients to delivering fresh products to customers.",
      image: "/40.jpg",
    },
    {
      name: "Emily Johnson",
      title: "Pastry Chef",
      description:
        "Emily specializes in crafting stunning cakes and desserts, bringing creativity to every creation.",
      image: "/43.jpg",
    },
  ];

  return (
    <div id="about" className="mx-auto px-6 py-16">
      {/* Company History Section */}
      <section className="mb-12" data-aos="fade-up">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600">
          Our Bakery was founded in 2010 with a simple goal: to bring joy to our
          community through delicious, handcrafted baked goods. Over the years,
          we ve grown from a small family operation to a thriving business that
          serves customers far and wide. Our milestones include opening our
          first storefront in 2012, expanding to online delivery in 2018, and
          launching our signature line of custom cakes in 2020.
        </p>
      </section>

      {/* Team Section */}
      <section className="mb-12" data-aos="fade-right">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-lg p-6 text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={128}
                height={128}
                className="rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {member.name}
              </h3>
              <p className="text-yellow-500 font-semibold">{member.title}</p>
              <p className="text-gray-600 mt-4">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Culture Section */}
      <section data-aos="fade-left">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Culture</h2>
        <p className="text-lg text-gray-600">
          At Our Bakery, we believe in fostering a welcoming and inclusive
          environment. Our team works together like a family, valuing
          collaboration, creativity, and a shared passion for excellence. We are
          committed to sustainability, sourcing high-quality ingredients, and
          supporting our local community. We believe that every day is an
          opportunity to learn, grow, and make someone&apos;s day a little brighter
          with our baked goods.
        </p>
      </section>
    </div>
  );
}
