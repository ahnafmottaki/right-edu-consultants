import AwardsSection from "../../components/Homepage/AwardsSection";
import ContactUs from "../../components/Homepage/ContactUs";
import CTASection from "../../components/Homepage/CTASection";
import HeroWithYoutube from "../../components/Homepage/HeroWithYoutube";
import SliderComponent from "../../components/Homepage/Slider";

const Homepage = () => {
  return (
    <>
      <SliderComponent />
      <HeroWithYoutube />
      <AwardsSection />
      <ContactUs />
      <CTASection />
    </>
  );
};

export default Homepage;
