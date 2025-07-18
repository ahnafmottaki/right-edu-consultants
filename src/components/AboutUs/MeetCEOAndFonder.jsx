import ProfileCard from "../ProfileCard";
import imageOne from "/images/slide-1.jpg";

const MeetCEOAndFonder = () => {
  return (
    <section className="py-30 bg-gray-300/20">
      <h1 className="primary-heading mb-12">Meet CEO & Founder</h1>
      <div className="grid grid-cols-3 max-w-3xl mx-auto gap-10  mb-8">
        <ProfileCard name={"Ahnaf Mottaki"} jobTitle={"CEO"} image={imageOne} />
        <ProfileCard name={"Ahnaf Mottaki"} jobTitle={"CEO"} image={imageOne} />
        <ProfileCard name={"Ahnaf Mottaki"} jobTitle={"CEO"} image={imageOne} />
      </div>
      <div className="text-center">
        <button className="secondary-btn">Meet The Rest of Our Team</button>
      </div>
    </section>
  );
};

export default MeetCEOAndFonder;
