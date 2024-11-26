import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* SIDEBAR NAV */}
      <Sidebar />
      <div className=" mb-8 flex-[3.5]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
