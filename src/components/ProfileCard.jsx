const ProfileCard = ({ name, image, jobTitle }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
      <img
        src={image}
        alt={name}
        className="w-28 h-28 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold text-primary">{name}</h3>
      <p className="text-sm text-primary-text-two">{jobTitle}</p>
    </div>
  );
};

export default ProfileCard;
