import { Activity } from "lucide-react";
import Dashboard from "../pages/Dashboard/Dashboard";
import Sidebar from "../components/Sidebar";
import { Route, Routes, Outlet } from "react-router-dom";
import RightNav from "../components/RightNav";

const MainLayout = () => {
  return (
    <div className="flex">
      {/* SIDEBAR NAV */}
      <Sidebar />
      <div className="px-6 pt-12 mb-8 flex-[2.5]">
        <Routes>
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/activity" element={<Activity />} />
        </Routes>
      </div>
      <RightNav />
    </div>
  );
};

export default MainLayout;
