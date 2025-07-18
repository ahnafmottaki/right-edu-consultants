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
      {/* our partners */}
      <OurPartners />
      {/* vision and mission */}
      <VisionMission />
      {/* CTA Section */}
      <CTASection backgroundClass="bg-white" />
    </section>
  );
};

export default AboutUs;
