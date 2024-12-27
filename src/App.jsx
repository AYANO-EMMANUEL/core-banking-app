import { BrowserRouter, Route, Routes } from "react-router-dom";
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

function App() {
  // const user = null
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route path="/app" element={<Dashboard />} />
            <Route path="/activity" exact element={<Activity />} />
            <Route path="/products" exact element={<Products />} />
            {/* <Route path="/app/Profile" element={<Profile />} /> */}
            <Route path="/app/settings" element={<Settings />} />
          </Route>
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="/auth/login" exact element={<Login />} />
            <Route path="/auth/signup" exact element={<Signup />} />
            <Route path="/auth/verification" exact element={<Verification />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
