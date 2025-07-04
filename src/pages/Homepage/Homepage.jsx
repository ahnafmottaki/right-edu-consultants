import AwardsSection from "../../components/Homepage/AwardsSection";
import CTASection from "../../components/Homepage/CTASection";
import HeroWithYoutube from "../../components/Homepage/HeroWithYoutube";
import SliderComponent from "../../components/Homepage/Slider";

const Homepage = () => {
  return (
    <>
      <SliderComponent />
      <HeroWithYoutube />
      <CTASection />
      <AwardsSection />
    </>
  );
};

export default Homepage;
