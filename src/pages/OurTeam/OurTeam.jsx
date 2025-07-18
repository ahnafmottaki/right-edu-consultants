import React from "react";
import ProfileCard from "../../components/ProfileCard";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    jobTitle: "CEO & Founder",
    image: "/images/slide-1.jpg",
  },
  {
    id: 2,
    name: "Sarah Lee",
    jobTitle: "Managing Director",
    image: "/images/slide-1.jpg",
  },
  {
    id: 3,
    name: "David Kim",
    jobTitle: "Head of Marketing",
    image: "/images/slide-1.jpg",
  },
  {
    id: 4,
    name: "Emily Clark",
    jobTitle: "Student Advisor",
    image: "/images/slide-1.jpg",
  },
];

const OurTeam = () => {
  return (
    <section className="bg-neutral-two py-16 font-inter min-h-screen">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-poppins font-semibold text-center text-primary mb-12">
          Meet Our Team
        </h2>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map(({ id, name, image, jobTitle }) => (
            <ProfileCard
              key={id}
              name={name}
              image={image}
              jobTitle={jobTitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
