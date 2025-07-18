import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const HeroWithYoutube = () => {
  return (
    <section className="container  grid grid-cols-2  items-center bg-white min-h-[380px] my-30 gap-10">
      {/* Left Column */}
      <div className=" text-left space-y-6 justify-self-center">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900">
          Your Trusted Partner in Global Education
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We help students find the right academic path, guiding them through
          every step - from counseling and admission to visa approval and travel
          support. Partnering with top universities across Malaysia and Europe,
          we make studying abroad easier, safer, and smarter.
        </p>
        <div className="flex gap-4 flex-wrap">
          <PrimaryButton>Explore Programs</PrimaryButton>
          <a
            href="#contact"
            className="border border-blue-600 text-indigo-600/90 px-6 py-3 rounded-lg hover:text-white hover:bg-indigo-700/90 transition"
          >
            Free Consultation
          </a>
        </div>
      </div>

      {/* Right Column - Responsive YouTube Video */}
      <div className="relative  h-full bg-red-400 rounded-lg overflow-hidden">
        <iframe
          className="h-full w-full"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/-guUCQMVZM0?si=9lHZssOMT0lPuYQG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
};

export default HeroWithYoutube;
