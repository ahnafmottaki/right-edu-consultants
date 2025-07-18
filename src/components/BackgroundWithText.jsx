const BackgroundWithText = ({
  backgroundImage,
  children,
  contentContainerClasses,
}) => {
  return (
    <div className={`h-[92vh] w-full relative overflow-y-auto`}>
      <div className="absolute inset-0 ">
        <img
          src={backgroundImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-r from-black/60 to-black/60 z-20 ${contentContainerClasses}`}
      >
        {children}
      </div>
    </div>
  );
};

export default BackgroundWithText;
