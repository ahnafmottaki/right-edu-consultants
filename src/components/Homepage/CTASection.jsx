import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const CTASection = ({ backgroundClass = "bg-[#f5f6f8]" }) => {
  return (
    <section className={" py-40 px-4 w-full " + backgroundClass}>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="primary-heading mb-4">
          Start Your Study Abroad Journey
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          Allow us to assist you at every stage, from selecting the best
          university to obtaining approval for your visa. Become one of the
          thousands of accomplished students who have relied on our advisory
          services.
        </p>
        <PrimaryButton>Apply Now</PrimaryButton>
      </div>
    </section>
  );
};

export default CTASection;
