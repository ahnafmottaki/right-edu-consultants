import BackgroundWithText from "../BackgroundWithText";

import AboutImage from "/images/slide-1.jpg";

const About = () => {
  return (
    <BackgroundWithText
      backgroundImage={AboutImage}
      contentContainerClasses={"flex flex-col justify-center"}
    >
      <h1 className="text-3xl text-center md:text-5xl font-poppins font-bold mb-4 text-white">
        About Our Company
      </h1>
      <div className="text-gray-200  container my-15 grid grid-cols-2 text-xl   gap-15">
        <p>
          Right Edu Consultants is your trusted gateway to global education.
          Established in 2014 as Smart Edu Tourism Malaysia, our journey evolved
          into a new chapter with the launch of Right Edu Consultants Sdn. Bhd.
          in 2023 — a private limited company under the Companies Act 2016
        </p>
        <p>
          Today, we work with 50+ universities in Malaysia and collaborate
          directly with partners in 10+ European countries. In 2024 alone, we
          guided thousands of students toward their dream institutions.
        </p>
        <p>
          With over a decade of experience in international student recruitment
          and education marketing, we have grown into a respected name in the
          industry.
        </p>

        <p>
          At our core is a culturally diverse, passionate team committed to
          personalized, transparent, and reliable support — from program
          selection to visa assistance.
        </p>
        <p className="col-span-full  text-center">
          At Right Edu Consultants, we don’t just open doors to higher education
          — we ignite futures and empower global success.
        </p>
      </div>
      <div className="text-center">
        <button className="secondary-btn">Read More About Our Story</button>
      </div>
    </BackgroundWithText>
  );
};

export default About;
