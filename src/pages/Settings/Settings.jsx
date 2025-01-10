import { useState } from "react";
import TopRightMenu from "../../components/TopRightMenu";
import RightNav from "../../components/RightNav";
import { AiOutlineCamera, AiOutlineCopy, AiOutlineLock } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { RiInboxUnarchiveLine, RiMessage2Line } from "react-icons/ri";
import { BsQuestionDiamond, BsQuestionDiamondFill } from "react-icons/bs";
import { MdSecurity, MdTextsms } from "react-icons/md";
import { GrPower } from "react-icons/gr";
import { CgInfo } from "react-icons/cg";
import ProfileTab from "../Settings/ProfileTab";

const Settings = () => {
    return (
      <div className="flex cursor-context-menu">
        {/* MAIN WALLET */}
        <div className="flex-[2] px-6 pt-12">
          <div className="flex justify-between align-middle">
            <div className="text-5xl">Settings</div>
            <TopRightMenu styles="block lg:hidden" />
          </div>
          <div className="flex flex-col my-6 mt-7">
            <div className="bg-slate-50 rounded-2xl flex flex-col my-2 gap-y-2">
              <div className="flex justify-between align-middle rounded-2xl p-3 hover-bg-green-primary hover:text-white cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <FiKey size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Login Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle rounded-2xl p-3 hover-bg-green-primary hover:text-white cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <AiOutlineLock size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Payment Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle rounded-2xl p-3 hover-bg-green-primary hover:text-white cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <RiInboxUnarchiveLine size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Saving Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl flex flex-col my-2 gap-y-2">
              <div className="flex justify-between align-middle rounded-2xl p-3 hover-bg-green-primary hover:text-white cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <BsQuestionDiamond size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Security Questions</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle rounded-2xl p-3 hover-bg-green-primary hover:text-white cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <RiMessage2Line size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">SMS Alert Subscription</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle hover-bg-green-primary hover:text-white rounded-2xl p-3 cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <GrPower size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Close Account</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 hover-bg-green-primary hover:text-white rounded-2xl p-3 flex flex-col my-2 gap-y-2">
              <div className="flex justify-between align-middle cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <MdSecurity size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Security Center</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 hover-bg-green-primary hover:text-white rounded-2xl p-3 flex flex-col my-2 gap-y-2">
              <div className="flex justify-between align-middle cursor-pointer my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  <CgInfo size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">About</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2">Version 1.0  {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 hover:bg-red-500 hover:text-white cursor-pointer rounded-2xl p-3 flex flex-col my-2 gap-y-2">
              <div className="flex justify-center text-2xl align-middle my-auto py-auto">
                Sign Out
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-[1px] border-gray-100 h-screen flex-[1.6] lg:flex-[1.1] hidden lg:block">
          <TopRightMenu styles={'pt-10 pr-6'} class="hidden lg:visible"/>
          <ProfileTab />
        </div>
      </div>
    )
}

export default Settings;