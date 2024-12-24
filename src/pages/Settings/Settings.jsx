import { useState } from "react";
import TopRightMenu from "../../components/TopRightMenu";
import RightNav from "../../components/RightNav";
import { AiOutlineCamera, AiOutlineCopy, AiOutlineLock } from "react-icons/ai";
import { FiKey } from "react-icons/fi";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { BsQuestionDiamondFill } from "react-icons/bs";
import { MdSecurity, MdTextsms } from "react-icons/md";
import { GrPower } from "react-icons/gr";
import { CgInfo } from "react-icons/cg";

const Settings = () => {
    return (
      <div className="flex cursor-context-menu">
        {/* MAIN WALLET */}
        <div className="flex-[2] px-6 pt-12">
          <div className="flex justify-between align-middle">
            <div className="text-5xl">Settings</div>
            <TopRightMenu styles="block lg:hidden" />
          </div>
          <div className="flex flex-col my-6">
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col my-3 gap-y-6">
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <FiKey height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Login Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <AiOutlineLock height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Payment Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <RiInboxUnarchiveLine height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Saving Settings</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col my-3 gap-y-6">
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <BsQuestionDiamondFill height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Security Questions</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <MdTextsms height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">SMS Alert Subscription</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <GrPower height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Close Account</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col my-3 gap-y-6">
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <MdSecurity height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">Security Center</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2"> {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col my-3 gap-y-6">
              <div className="flex justify-between align-middle my-auto py-auto">
                <div className="flex justify-between align-middle my-auto py-auto">
                  {/* <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span> */}
                  <CgInfo height={'100%'} size={'30'} className="ms-2 h-full" />
                  <span className="opacity-70 pl-4 text-xl">About</span>
                </div>
                <span className="opacity-45 rounded-xl ml-2 p-1 px-2">Version 1.0  {">"} </span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col my-3 gap-y-6">
              <div className="flex justify-center text-2xl align-middle my-auto py-auto">
                Sign Out
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-[1px] border-gray-100 h-screen flex-[1.6] lg:flex-[1.1] hidden lg:block">
          <TopRightMenu styles={'pt-10 pr-6'} class="hidden lg:visible"/>
          <div className="">
            <div className="w-max bg-slate-50 p-8 m-auto cursor-pointer hover:bg-slate-200 hover:opacity-25 rounded-full my-4">
              <AiOutlineCamera size={'30px'} />
            </div>
            <div className="userDetails bg-slate-50 rounded-2xl p-3 flex flex-col mx-4 gap-y-6">
              <div className="flex justify-between">
                <span className="opacity-70">Full Name</span>
                <span className="uppercase">Emmanuel Ayano</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Mobile Number</span>
                <span className="uppercase">+2348162638034</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Gender</span>
                <span className="uppercase">Male</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">D.O.B</span>
                <span className="uppercase">**-**-25</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Email</span>
                <span className="uppercase">a*@gmail.com</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Address</span>
                <span className="uppercase">Unilorin</span>
              </div>
            </div>
            <div className="bg-slate-50 rounded-2xl p-3 flex flex-col m-4 gap-y-6">
              <div className="flex justify-between">
                <span className="opacity-70">Core Account No:</span>
                <div className="flex align-middle">
                  <span className="">+234 8162638034 </span>
                  <AiOutlineCopy className="text-green-400 cursor-pointer ml-1" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="opacity-70">Account Tier</span>
                <div className="flex justify-between">
                  <span className="bg-slate-100 rounded-xl p-1 px-2">Tier 1</span>
                  <span className="text-red-600 bg-white rounded-xl ml-2 p-1 px-2">Upgrade {">"} </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Settings;