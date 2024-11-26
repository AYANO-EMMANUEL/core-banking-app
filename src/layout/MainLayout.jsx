import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* SIDEBAR NAV */}
      <Sidebar />
      <div className=" flex-[4]">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
