import imageOne from "/images/slide-1.jpg";

const MeetCEOAndFonder = () => {
  return (
    <section className="my-30">
      <h1 className="primary-heading mb-12">Meet CEO & Founder</h1>
      <div className="flex justify-center items-center gap-10  mb-8">
        <div className="w-full min-w-50 max-w-75 overflow-hidden flex flex-col items-center shadow-sm bg-gray-300/20 py-8 rounded-lg">
          <img
            src={imageOne}
            alt={"Ahnaf Mottaki"}
            className="rounded-full w-25 aspect-square "
          />
          <span className="text-lg font-medium my-2 font-poppins">
            Ahnaf Mottaki
          </span>
          <span>CEO</span>
        </div>
        <div className="w-full min-w-50 max-w-75 overflow-hidden flex flex-col items-center shadow-sm bg-gray-300/20 py-8 rounded-lg">
          <img
            src={imageOne}
            alt={"Ahnaf Mottaki"}
            className="rounded-full w-25 aspect-square "
          />
          <span className="text-lg font-medium my-2 font-poppins">
            Ahnaf Mottaki
          </span>
          <span>CEO</span>
        </div>
        <div className="w-full min-w-50 max-w-75 overflow-hidden flex flex-col items-center shadow-sm bg-gray-300/20 py-8 rounded-lg">
          <img
            src={imageOne}
            alt={"Ahnaf Mottaki"}
            className="rounded-full w-25 aspect-square "
          />
          <span className="text-lg font-medium my-2 font-poppins">
            Ahnaf Mottaki
          </span>
          <span>CEO</span>
        </div>
      </div>
      <div className="text-center">
        <button className="secondary-btn">Meet The Rest of Our Team</button>
      </div>
    </section>
  );
};

export default MeetCEOAndFonder;
