import React from "react";
import ProfileCard from "../../components/ProfileCard";

const teamMembers = [
  {
    name: "Dr. Nazneen Arif",
    jobTitle: "CEO",
    image: "/images/CEO.jpg",
  },
  {
    name: "Nur Hanie Nabila Binti Tajul Hashnan",
    jobTitle: "Director of Administration",
    image: "/images/DIRECTOROFADMINISTRATION.jpg",
  },
  {
    name: "Md Kowsar Ahmed (JAI)",
    jobTitle: "Financial Director",
    image: "/images/financial-advisor.jpg",
  },
  {
    name: "Syed Faizal Bin Dato'syed Abdullah",
    jobTitle: "Operational Director",
    image: "/images/OPERATIONALDIRECTOR.png",
  },
  {
    name: "Dr. Terekol Islam Maruf",
    jobTitle: "Board Advisor",
    image: "/images/board-advisor.png",
  },
  {
    name: "Nur Hafiza Binti Tajul Hashnan",
    jobTitle: "HR",
    image: "/images/hr.jpg",
  },
  {
    name: "Muhammad Shah Fadzli",
    jobTitle: "Marketing Admin Officer (IDO)",
    image: "/images/iso.png",
  },
  {
    name: "Dr. Bisma Asghar",
    jobTitle: "International Support Manager",
    image: "/images/int-student-support.jpg",
  },
  {
    name: "Muhammad Rizwan",
    jobTitle: "International Marketing Director",
    image: "/images/int-marketing-director.jpg",
  },
  {
    name: "Areeba Nadeem",
    jobTitle: "Overseas Project Manager",
    image: "/images/oversease-project-manager.jpg",
  },
  {
    name: "Martin",
    jobTitle: "International Student counsellor",
    image: "/images/student-counsellor.jpg",
  },
  {
    name: "Md Mashrur Mondol",
    jobTitle: "Marketing Executive",
    image: "/images/Mash.jpg",
  },
  {
    name: "Ahnaf Mottaki",
    jobTitle: "Web Developer",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
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
