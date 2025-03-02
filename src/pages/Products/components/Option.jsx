import { Link, useLocation } from "react-router-dom";

const Option = ({ icon, label, onClick, link }) => {
  
  const location = useLocation();

  return (
    <Link to={link} state={{ background: location }}
      onClick={onClick}
      className="flex flex-col items-center focus:outline-none max-w-fit"
    >
      <span className="text-3xl text-dark p-7 bg-gray-100 rounded-xl hover:bg-gray-200 transition-[all] duration-300 ease-out">{icon}</span>
      <span className="text-sm mt-2 font-semibold text-center">{label}</span>
    </Link>
  );
};

export default Option;
