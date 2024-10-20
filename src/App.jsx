import { BrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import AuthLayout from "./layout/AuthLayout";
import "./global.css"

function App() {
  return (
    <>
      <BrowserRouter >
        <AuthLayout />
        <Layout />
      </BrowserRouter>
    </>
  );
}

export default App;
