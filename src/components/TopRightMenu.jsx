/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const TopRightMenu = ({ styles }) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const dropDownRef = useRef(null);

  if (setShowMenu) {
    document.addEventListener("click", (e) => {
      if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    })
  }

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
          <div className="relative m-auto p-1 rounded-lg" ref={dropDownRef}>
            <BiDotsVerticalRounded
              onClick={toggleMenu}
              size={"25"}
              className="cursor-pointer text-gray-400 hover:text-gray-700"
              style={{ 
                transform: showMenu ? "rotate(90deg)" : "rotate(0deg)"
               }}
            />
            {showMenu && (
              <div className="absolute right-0 pt-3">
                <div className="bg-white rounded-lg shadow-md">
                  <NavLink to={'/Settings'}> 
                    <div className="px-6 py-2 hover:bg-slate-200">Profile</div>
                  </NavLink>
                  <NavLink to={'/Settings'}> 
                    <div className="px-6 py-2 hover:bg-slate-200">Settings </div>
                  </NavLink>
                  <NavLink to={'/Settings'}> 
                    <div className="px-6 pt-2 pb-3 hover:bg-slate-200">Logout</div>
                  </NavLink>
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
