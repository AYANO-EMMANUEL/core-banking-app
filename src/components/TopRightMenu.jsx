/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";

const TopRightMenu = ({ styles }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className={`flex justify-end ${styles}`}>
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
          <div className="relative m-auto p-1 rounded-lg">
            <BiDotsVerticalRounded
              onClick={toggleMenu}
              size={"25"}
              color="#B2B2B2"
              className="cursor-pointer"
            />
            {showMenu && (
              <div className="absolute right-0 pt-3">
                <div className="bg-white rounded-lg shadow-md">
                  <div className="px-6 py-2">Profile</div>
                  <div className="px-6 py-2">Settings</div>
                  <div className="px-6 pt-2 pb-3">Logout</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRightMenu;
