import BottomBar from "../components/BottomBar";
import DynamicHeader from "../components/DynamicHeader";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col md:flex-row justify-between">
      <Sidebar />
      <div className="px-6 pt-10 flex-[4]">
        <DynamicHeader />
        <Outlet />
      </div>
      <BottomBar />
    </div>
  );
};

export default MainLayout;
