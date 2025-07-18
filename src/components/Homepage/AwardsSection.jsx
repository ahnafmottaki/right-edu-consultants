import { FaMedal } from "react-icons/fa";

const awards = [
  {
    title: "Best Student Placement Agency – 2024",
    organization: "Malaysia International Education Summit",
    image:
      "https://images.unsplash.com/photo-1532153955177-f59af40d6472?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Social Impact Through Education Award – 2023",
    organization: "ASEAN Edu Network",
    image:
      "https://images.unsplash.com/photo-1689617258240-9c929a399e85?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Top Performing Agent – 2022",
    organization: "Lincoln University College, Malaysia",
    image:
      "https://images.unsplash.com/photo-1689289850550-4205d7c4230c?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Educational Excellence in South Asia – 2021",
    organization: "Global Academic Leaders Forum",
    image:
      "https://images.unsplash.com/photo-1562232573-0305012a8818?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-white  px-4">
      <div className="container text-center">
        {/* Headline */}
        <h2 className="primary-heading mb-4">
          Recognized for Business and Social Excellence
        </h2>
        {/* Subheadline */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          At Right Edu Consultants, we are proud to be recognized not only for
          our commitment to educational success, but also for our contribution
          to society and ethical business practices. These awards reflect our
          dedication to quality, integrity, and impact.
        </p>

        {/* Awards Grid */}
        <div className="flex justify-center flex-wrap gap-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-[#f5f2e8] w-[300px] to-white shadow-md rounded-2xl px-5 py-7 transition transform hover:-translate-y-1 hover:shadow-xl group"
            >
              <img
                src={award.image}
                alt={award.title}
                className="h-25 w-25 mx-auto object-cover rounded-full ring ring-yellow-300/60  transition"
              />
              <div className="mt-4">
                <FaMedal className="text-yellow-500 text-2xl mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-[#0a2351] font-poppins group-hover:text-yellow-600 transition">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  {award.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
