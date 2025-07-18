import About from "../../components/AboutUs/About";
import MeetCEOAndFonder from "../../components/AboutUs/MeetCEOAndFonder";
import OurPartners from "../../components/AboutUs/OurPartners";
import VisionMission from "../../components/AboutUs/VisionMission";
import CTASection from "../../components/Homepage/CTASection";

const AboutUs = () => {
  return (
    <section>
      {/* about us  */}
      <About />
      {/* meet Ceo and Founder */}
      <MeetCEOAndFonder />
      {/* vision and mission */}
      <VisionMission />
      {/* our partners */}
      <OurPartners />
      {/* CTA Section */}
      <CTASection />
    </section>
  );
};

export default AboutUs;
