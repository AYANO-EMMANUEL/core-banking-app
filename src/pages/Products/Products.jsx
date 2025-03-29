import { useState } from "react";
import TopRightMenu from "../../components/TopRightMenu";
import AllOptions from "./components/AllOptions"

const Products = () => {

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalView, setModalView] = useState("default");

  const openModal = (content) => {
    setModalView(content); // Set the desired modal content
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalView("default"); // Optional: Reset content on close
  };

  return (
    <div className="px-6 pt-10 md:overflow-y-scroll md:max-h-screen md:h-auto">
      <div className="flex justify-between align-middle items-center mb-6">
        <div className="text-3xl md:text-5xl">Products</div>
        <TopRightMenu styles="" />
      </div>
      <div className="w-full">
        <AllOptions /> 
      </div>
    </div>
  );
};

export default Products;
