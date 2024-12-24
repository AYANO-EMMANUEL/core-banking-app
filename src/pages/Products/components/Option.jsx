
const Option = ({ icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center focus:outline-none"
    >
      <span className="text-3xl text-dark p-7 bg-gray-100 rounded-xl hover:bg-gray-200 transition-[all] duration-300 ease-out">{icon}</span>
      <span className="text-sm mt-2 font-semibold">{label}</span>
    </button>
  );
};

export default Option;
