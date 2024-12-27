import React from 'react';
import { AiOutlineCamera, AiOutlineCopy } from 'react-icons/ai';

const ProfileTab = () => {
  return (
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
  )
}

export default ProfileTab;