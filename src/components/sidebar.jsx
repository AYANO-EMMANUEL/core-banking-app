import {  } from "react-icons/fa";
import dashboardIcon from '../assets/dashboard';
import activityIcon from '../assets/activity';
import walletIcon from '../assets/wallet';
import { MdDashboard } from "react-icons/md";
import { Table } from "lucide-react";


const sidebar = () => {
    return (
        <>
            <h1 className="text-6xl font-bold mb-5">core.</h1>       

            <div className="d-flex justify-between">
                <div className="">
                    {dashboardIcon}
                </div>
                <div className="">
                    Dashboard
                </div>
            </div>
            <Table />
            <MdDashboard />

            <div className="d-flex justify-between">
                <div className="">
                    {activityIcon}
                </div>
                <div className="">
                    Activity
                </div>
            </div>

            <div className="d-flex justify-between { IsActive ? 'bg-green-700' : 'bg-gray-400'}">
                <div className="">
                    {walletIcon}
                </div>
                <div className="">
                    Wallet
                </div>
            </div>

        </>
    )
}

export default sidebar;