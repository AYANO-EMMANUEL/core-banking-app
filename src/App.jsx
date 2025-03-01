import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import "./global.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Activity from "./pages/Activity/Activity";
import Settings from "./pages/Settings/Settings";
import Login from "./pages/Auth/Login";
import Verification from "./pages/Auth/Verification";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products/Products";
import CoreTransfer from "./pages/Transfer/CoreTransfer";
import Airtime from "./pages/Airtime/Airtime";

function App() {
  // const user = null
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <>
      
        <Routes location={background || location}>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/app" element={<Dashboard />} />
            <Route path="/activity" exact element={<Activity />} />
            <Route path="/products" exact element={<Products />} />
            {/* <Route path="/app/Profile" element={<Profile />} /> */}
            <Route path="/settings" exact element={<Settings />} />
            <Route path="/coretransfer" exact element={<CoreTransfer />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" exact element={<Login />} />
            <Route path="/auth/signup" exact element={<Signup />} />
            <Route path="/auth/verification" exact element={<Verification />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/coretransfer" element={<CoreTransfer />} />
            <Route path="/airtime" element={<Airtime />} />
          </Routes>
        )}
      
    </>
  );
}

export default App;
