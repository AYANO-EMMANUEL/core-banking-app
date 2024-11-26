import TopRightMenu from './TopRightMenu'
import { RiBankFill } from 'react-icons/ri'
import { GiPlayButton } from 'react-icons/gi'
import { PhoneIcon } from 'lucide-react'
import { FaGraduationCap } from 'react-icons/fa'
import { CardIcon } from '../constants'

const RightNav = () => {
  return (
    <div className="pt-4 border-l-[1px] border-gray-100 h-screen">
        <TopRightMenu />
        <div className="border rounded-3xl mx-4 border-gray-100">
          <div className="flex justify-between">
            <div className="flex justify-around align-middle rounded-tl-3xl p-5 w-3/6 cursor-pointer">
              Deposit
            </div>
            <div className="flex justify-around bg-gray-100 rounded-tr-3xl align-middle p-5 w-3/6 cursor-pointer">
              Transfer
            </div>
          </div>
          <div className="px-4 mb-8">
            <div className="bold text-center text-md py-3">
              Select a Method to Fund Naira Wallet below
            </div>
            <div className="mb-4 cursor-pointer">
              <div
                className="flex align-middle p-2 border-gray-100 rounded-3xl hover:border-none hover:shadow-md"
                style={{
                  filter: "blur(0.76px)",
                  opacity: "0.9",
                  boxShadow: "0px 18px 3px -14px rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex align-middle rounded-md p-2 m-auto bg-green-40">
                  <RiBankFill color={"#4ADE80"} size={"38"} />
                  <span className="text-sm ps-2 my-auto">Bank Deposit</span>
                </div>
                <div className="m-auto">
                  <GiPlayButton fill="#4ADE80" color="#4ADE80" />
                </div>
              </div>
            </div>
            <div className="mb-4 cursor-pointer">
              <div
                className="flex align-middle p-2 border-gray-100 rounded-3xl hover:border-none hover:shadow-md"
                style={{
                  filter: "blur(0.76px)",
                  opacity: "0.9",
                  boxShadow: "0px 18px 3px -14px rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex align-middle rounded-md p-2 m-auto bg-green-40">
                  <PhoneIcon color={"#4ADE80"} size={"38"} />
                  <span className="text-sm ps-2 my-auto">USSD Deposit</span>
                </div>
                <div className="m-auto">
                  <GiPlayButton fill="#C8E2DE" color="#C8E2DE" />
                </div>
              </div>
            </div>
            <div className="mb-4 cursor-pointer">
              <div
                className="flex align-middle p-2 border-gray-100 rounded-3xl hover:shadow-md"
                style={{
                  filter: "blur(0.76px)",
                  opacity: "0.9",
                  boxShadow: "0px 18px 3px -14px rgba(0,0,0,0.15)",
                }}
              >
                <div className="flex align-middle rounded-md p-2 m-auto bg-green-40">
                  <CardIcon color={"#4ADE80"} size={"38"} />
                  <span className="text-sm ps-2 my-auto">Card Deposit</span>
                </div>
                <div className="m-auto">
                  <GiPlayButton fill="#C8E2DE" color="#C8E2DE" />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 cursor-pointer ">
            <div className="flex align-middle bg-[#DEF5F2] justify-around mx-3 p-3 border-gray-100 rounded-3xl hover:border-none hover:shadow-md">
              <div className="flex align-middle rounded-2xl p-1 m-auto bg-white">
                <FaGraduationCap color={"#4ADE80"} size={"30"} />
              </div>
              <span className="text-sm ps-2 my-auto text-wrap">
                Learn More about Funding your wallet
              </span>
              <div className="m-auto pr-4">
                <GiPlayButton fill="#63BDAF" color="#63BDAF" />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default RightNav