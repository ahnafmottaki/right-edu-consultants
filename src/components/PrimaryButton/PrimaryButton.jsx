const PrimaryButton = ({ children }) => {
  return (
    <button className="relative  px-6 py-3 text-sm font-semibold font-poppins text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90  transition-all duration-300 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity" />
      <span className="relative flex items-center gap-2 ">{children}</span>
    </button>
  );
};

export default PrimaryButton;
