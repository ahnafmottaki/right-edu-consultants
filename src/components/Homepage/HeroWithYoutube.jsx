import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const HeroWithYoutube = () => {
  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center bg-white px-6 md:px-12 py-14 gap-10">
      {/* Left Column */}
      <div className="md:w-1/2 max-w-xl text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold font-poppins text-gray-900">
          Your Trusted Partner in Global Education
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          We help students find the right academic path, guiding them through
          every step — from counseling and admission to visa approval and travel
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
      <div className="md:w-1/2 w-full">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/8of5w7RgcTc?si=FzvQ2LnTbxtE7BDP&amp;autoplay=1&mute=1&loop=1&&controls=0&modestbranding=1&rel=0"
            title="Promotional Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroWithYoutube;
