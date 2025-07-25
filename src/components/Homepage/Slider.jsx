import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slideOne from "/images/slide-1.jpg";
import slideTwo from "/images/slide-2.jpg";
import slideThree from "/images/slide-3.jpg";
import BackgroundWithText from "../BackgroundWithText";

const slides = [
  {
    backgroundImage: slideOne, // replace with real paths
    // backgroundVideo: "/videos/hero-banner-03.mp4",
    headline: "Study Abroad with Confidence",
    subheadline: "Trusted support for admissions, visas & scholarships",
    buttons: ["Explore Destinations", "Free Consultation"],
  },
  {
    backgroundImage: slideTwo,
    // backgroundVideo: "/videos/hero-banner-03.mp4",
    headline: "We Connect You to Top Universities",
    subheadline: "In Malaysia, Germany, France, and beyond",
    buttons: ["View University List", "Apply Now"],
  },
  {
    backgroundImage: slideThree,
    // backgroundVideo: "/videos/hero-banner-03.mp4",
    headline: "Visa Approved? Let’s Get You There.",
    subheadline: "Complete support from application to arrival",
    buttons: ["Start Application", "Talk to Consultant"],
  },
];

const SliderComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Slider {...settings} className="w-full">
        {slides.map((slide, index) => (
          <BackgroundWithText
            key={index}
            backgroundImage={slide.backgroundImage}
            contentContainerClasses={"flex justify-center items-center"}
          >
            <div className="text-white text-center max-w-2xl px-6 ">
              <h1 className="text-3xl md:text-5xl font-poppins font-bold mb-4">
                {slide.headline}
              </h1>
              <h3 className="text-lg md:text-2xl mb-6 font-poppins">
                {slide.subheadline}
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {slide.buttons.map((btnText, idx) => (
                  <button
                    key={idx}
                    className="bg-white text-black px-5 py-2 rounded-lg hover:bg-indigo-700/90 hover:text-white transition-colors"
                  >
                    {btnText}
                  </button>
                ))}
              </div>
            </div>
          </BackgroundWithText>
        ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
