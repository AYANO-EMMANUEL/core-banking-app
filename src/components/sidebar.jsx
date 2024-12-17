/* eslint-disable react/prop-types */
import { FaCube } from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { IoMdHelp } from "react-icons/io";
import { RiWallet3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const DashboardIcon = ({ color, colorTwo }) => {
    return (
      <svg
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.0756 0H17.4616C18.8639 0 20.0001 1.14585 20.0001 2.55996V5.97452C20.0001 7.38864 18.8639 8.53449 17.4616 8.53449H14.0756C12.6734 8.53449 11.5371 7.38864 11.5371 5.97452V2.55996C11.5371 1.14585 12.6734 0 14.0756 0Z"
          fill={color}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.53852 0H5.92449C7.32676 0 8.46301 1.14585 8.46301 2.55996V5.97452C8.46301 7.38864 7.32676 8.53449 5.92449 8.53449H2.53852C1.13626 8.53449 0 7.38864 0 5.97452V2.55996C0 1.14585 1.13626 0 2.53852 0ZM2.53852 11.4655H5.92449C7.32676 11.4655 8.46301 12.6114 8.46301 14.0255V17.44C8.46301 18.8532 7.32676 20 5.92449 20H2.53852C1.13626 20 0 18.8532 0 17.44V14.0255C0 12.6114 1.13626 11.4655 2.53852 11.4655ZM17.4615 11.4655H14.0755C12.6732 11.4655 11.537 12.6114 11.537 14.0255V17.44C11.537 18.8532 12.6732 20 14.0755 20H17.4615C18.8637 20 20 18.8532 20 17.44V14.0255C20 12.6114 18.8637 11.4655 17.4615 11.4655Z"
          fill={colorTwo}
        />
      </svg>
    );
  };

  const ActivityIcon = ({ color, colorTwo }) => {
    return (
      <svg
        width="35"
        height="35"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.2428 2.73756C13.2428 4.95855 15.0459 6.75902 17.2702 6.75902C17.5151 6.75782 17.7594 6.73431 18 6.68878V14.6615C18 18.0156 16.0215 20 12.6624 20H5.34636C1.97851 20 0 18.0156 0 14.6615V7.3561C0 4.00195 1.97851 2 5.34636 2H13.3131C13.2659 2.243 13.2423 2.49001 13.2428 2.73756ZM11.15 12.8966L14.0078 9.20878V9.19122C14.2525 8.86247 14.1901 8.39889 13.8671 8.14634C13.7108 8.02568 13.5122 7.97345 13.3167 8.00159C13.1211 8.02972 12.9453 8.1358 12.8295 8.29561L10.4201 11.3951L7.6766 9.23512C7.51997 9.11309 7.32071 9.05922 7.12381 9.08565C6.92691 9.11208 6.74898 9.2166 6.63019 9.37561L3.67562 13.1863C3.57177 13.3158 3.51586 13.4771 3.51734 13.6429C3.5002 13.9781 3.71187 14.2826 4.03238 14.3838C4.35288 14.485 4.70138 14.3573 4.88031 14.0732L7.35125 10.8771L10.0948 13.0283C10.2508 13.1541 10.4514 13.2111 10.6504 13.1863C10.8494 13.1615 11.0297 13.0569 11.15 12.8966Z"
          fill={colorTwo}
        />
        <circle cx="17.5" cy="2.5" r="2.5" fill={color} />
      </svg>
    );
  };

  return (
    <div className="hidden md:flex flex-1 border-r-[1px] border-gray-100 h-screen flex-col align-middle justify-between">
      <h1 className="text-6xl font-bold mt-10 text-center mb-20">core.</h1>
      <div className="flex-col space-y-4 mb-20">
        <Link to={'/app'} className="cursor-pointer block hover:bg-gray-100 px-10">
          <div className="flex align-middle p-4">
            <DashboardIcon color={"#200E32"} colorTwo={"#C0CCDA"} />
            <div className="ps-5 my-auto">Dashboard</div>
          </div>
        </Link>
        <Link to={'/app/activity'} className="cursor-pointer block hover:bg-gray-100 px-10">
          <div className="flex align-middle p-4">
            <ActivityIcon color={"#200E32"} colorTwo={"#C0CCDA"} />
            <div className="ps-5 my-auto">Activity</div>
          </div>
        </Link>
        <Link to={'/app/products'} className="cursor-pointer block hover:bg-gray-100 px-10">
          <div className="flex align-middle p-4">
            <FaCube color={"#C0CCDA"} size={"33"} />
            <div className="ps-5 my-auto">Products</div>
          </div>
        </Link>
        <Link to={'/app/settings'} className="cursor-pointer block hover:bg-gray-100 px-10">
          <div className="flex align-middle p-4">
            <FcSettings color={"#C0CCDA"} fill="#C0CCDA" size={"35"} />
            <div className="ps-5 my-auto">Settings</div>
          </div>
        </Link>
      </div>
      <div className="help mt-auto pb-4">
        <Link to={'/app/help'} className="flex align-middle ps-14 mt-5">
          <div className="bg-gray-300 p-2 rounded-3xl">
            <IoMdHelp color="#200E32" className="m-auto" />
          </div>
          <div className="cursor-pointer block ps-3 my-auto text-gray-400 hover:text-black">
            Help Center
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
