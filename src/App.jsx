import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import MainLayout from "./layout/MainLayout";
import "./global.css";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Activity from "./pages/Activity/Activity";
import Login from "./pages/Auth/Login";
import Verification from "./pages/Auth/Verification";
import Signup from "./pages/Auth/Signup";

function App() {
  // const user = null
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/app" element={<MainLayout />}>
            <Route index  element={<Dashboard />} />
            <Route path="/app/activity" element={<Activity />} />
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
