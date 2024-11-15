import { BrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import AuthLayout from "./layout/AuthLayout";
import "./global.css"

function App() {
  const user = null
  return (
    <>
      <BrowserRouter >
        <AuthLayout />
        <RootLayout />
      </BrowserRouter>
    </>
  );
}

export default App;
