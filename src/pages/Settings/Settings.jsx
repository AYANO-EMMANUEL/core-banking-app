import { useState } from "react";
import TopRightMenu from "../../components/TopRightMenu";
import RightNav from "../../components/RightNav";
import { AiOutlineCamera, AiOutlineCopy, AiOutlineLock } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { RiInboxUnarchiveLine, RiMessage2Line } from "react-icons/ri";
import { BsQuestionDiamond, BsQuestionDiamondFill } from "react-icons/bs";
import { MdSecurity, MdTextsms } from "react-icons/md";
import { GrFormNext, GrPower } from "react-icons/gr";
import { CgInfo } from "react-icons/cg";
import ProfileTab from "../Settings/ProfileTab";

const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const handleModalContent = () => {
    switch(modalContent) {
      case 'login': 
        return (
          <div>
            <h2>Login</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Login</button>
            </form>
          </div>
        );
      case 'payment': 
        return (
          <div>
            <h2>Payment</h2>
            <form>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit">Payment</button>
            </form>
          </div>
        );
      default : 
        return null;
    };
  }
    return (
      <div className="flex cursor-context-menu">
      <div className="flex-[2] px-6 pt-12">
        <div className="flex justify-between items-center">
        <h1 className="text-5xl">Settings</h1>
        <TopRightMenu styles="block lg:hidden" />
        </div>
        <div className="my-6">
        {[
          { icon: <FiKey size={30} />, label: "Login Settings", modal: "login" },
          { icon: <AiOutlineLock size={30} />, label: "Payment Settings", modal: "payment" },
          { icon: <RiInboxUnarchiveLine size={30} />, label: "Savings Settings", modal: "savings" },
          { icon: <BsQuestionDiamond size={30} />, label: "Security Questions", modal: "security" },
          { icon: <RiMessage2Line size={30} />, label: "SMS Alert Subscription", modal: "sms" },
          { icon: <GrPower size={30} />, label: "Close Account", modal: "close" },
          { icon: <MdSecurity size={30} />, label: "Security Center", modal: "security" },
          { icon: <CgInfo size={30} />, label: "About", modal: "about", extra: "Version 1.0" },
        ].map(({ icon, label, modal, extra }, index) => (
          <div
          key={index}
          className="bg-slate-50 rounded-2xl p-3 flex justify-between items-center my-2 hover:bg-green-500 hover:text-white cursor-pointer"
          onClick={() => openModal(modal)}
          >
          <div className="flex items-center">
            {icon}
            <span className="pl-4 text-xl opacity-70">{label}</span>
          </div>
          <div className="flex items-center opacity-45">
            {extra && <span className="pr-2">{extra}</span>}
            <GrFormNext />
          </div>
          </div>
        ))}
        <div
          className="bg-slate-50 hover:bg-red-500 hover:text-white rounded-2xl p-3 flex justify-center items-center text-2xl my-2 cursor-pointer"
          onClick={() => openModal("signout")}
        >
          Sign Out
        </div>
        </div>
      </div>
      <div className="border-l-[1px] border-gray-100 h-screen flex-[1.6] lg:flex-[1.1] hidden lg:block">
        <TopRightMenu styles="pt-10 pr-6" />
        <ProfileTab />
      </div>
      {isOpen && (
        <div
        className="modal-overlay fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
        onClick={closeModal}
        >
        <div
          className="modal bg-white p-6 rounded-2xl relative min-w-[300px]"
          onClick={(e) => e.stopPropagation()}
        >
          <button
          className="close-button absolute top-[10px] right-[10px] cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            closeModal();
          }}
          >
          &times;
          </button>
          {handleModalContent()}
        </div>
        </div>
      )}
      </div>
    );
}

export default Settings;