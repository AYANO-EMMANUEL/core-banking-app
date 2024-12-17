import BottomBar from "../components/BottomBar";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row justify-between">
      <Sidebar />
      <div className="flex-[4]">
        <Outlet />
      </div>
      <BottomBar />
    </div>
  );
};

export default MainLayout;
