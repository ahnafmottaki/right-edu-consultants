const Column = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 border-t-4 border-primary">
      <h3 className="text-2xl font-poppins font-semibold text-primary-two mb-4">
        {title}
      </h3>
      <p className="text-primary-text-two leading-relaxed mb-6">
        {description}
      </p>
      <button className="secondary-btn">Read More</button>
    </div>
  );
};

const VisionMission = () => {
  return (
    <section className="bg-neutral-two py-30 font-inter">
      <div className="container px-4">
        <h2 className="primary-heading mb-12">Vision & Mission 🎯</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <Column
            title={" Vision 🪞"}
            description={
              "To be a leading force in global education, inspiring students to achieve a global success beyond borders"
            }
          />
          {/* Mission */}
          <Column
            title={"Mission 🚀"}
            description={
              "Empowering students with trusted guidance and global opportunities through personalized, transparent, and reliable education consultancy services."
            }
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
