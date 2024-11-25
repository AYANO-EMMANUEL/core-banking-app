/* eslint-disable react/prop-types */
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const TopRightMenu = ({ styles }) => {
  return (
    <div className={`flex justify-end mb-9 mr-4 ${styles}`}>
      <div className="inline-flex rounded-lg bg-gray-50">
        <div className="p-1 m-3 rounded-lg bg-[#FFFFFF;]">
          <IoNotifications
            size={"25"}
            color="#231F20"
            className="cursor-pointer"
          />
        </div>
        <div className="flex align-middle">
          <div className="p-1 m-auto rounded-lg bg-[#9DA8B6;]">
            <CgProfile size={"25"} className="cursor-pointer" />
          </div>
          <div className="m-auto p-1 rounded-lg">
            <BiDotsVerticalRounded
              size={"25"}
              color="#B2B2B2"
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRightMenu;
