import TopRightMenu from './TopRightMenu'
import { useState } from 'react'
import { RiBankFill } from 'react-icons/ri'
import { GiPlayButton } from 'react-icons/gi'
import { PhoneIcon } from 'lucide-react'
import { FaGraduationCap } from 'react-icons/fa'
import { CardIcon } from '../constants'

const RightNav = () => {
  const [ content, setContent ] = useState('deposit')

  const buttonClick = (newContent) => {
    setContent(newContent);
  }

  const walletFunctionStyle = {
      filter: "blur(0.4px)",
      opacity: "0.9",
      boxShadow: "0px 18px 3px -14px rgba(0,0,0,0.15)",
  }

  // const {
  
  // }

  return (
    <div className="pt-4 h-screen">
      <TopRightMenu styles="mr-4 mb-5" />
      <div className="border rounded-3xl mx-4 border-gray-100">
        <div className="flex justify-between">
          {['deposit', 'Withdrawal'].map((type) => (
            <div
              key={type}
              onClick={() => buttonClick(type)}
              className={`flex justify-around align-middle p-5 w-3/6 cursor-pointer ${
                content === type
                  ? type === 'deposit'
                    ? 'bg-gray-100 rounded-tl-3xl'
                    : 'bg-gray-100 rounded-tr-3xl'
                  : ''
              }`}
            >
              {type === 'deposit' ? 'Deposit' : 'Transfer'}
            </div>
          ))}
        </div>
        <div className="px-4 mb-8">
          <div className="bold text-center text-md py-3">
            Select a Method to{' '}
            {content === 'deposit'
              ? 'Fund Naira Wallet below'
              : 'Withdraw to Other Wallets'}
          </div>
          {[
            { icon: <RiBankFill color="#16A34A" size="38" />, label: 'Bank' },
            { icon: <PhoneIcon color="#16A34A" size="38" />, label: 'USSD' },
            ...(content === 'deposit'
              ? [{ icon: <CardIcon color="#16A34A" size="38" />, label: 'Card' }]
              : []),
          ].map(({ icon, label }) => (
            <div key={label} className="mb-4 cursor-pointer">
              <div
                className="flex align-middle p-1 xl:p-2 border-gray-100 rounded-3xl hover:border-none hover:shadow-md"
                style={walletFunctionStyle}
              >
                <div className="flex align-middle rounded-md p-2 m-auto bg-green-40">
                  {icon}
                  <span className="text-sm ps-2 my-auto">
                    {label} {content}
                  </span>
                </div>
                <div className="m-auto">
                  <GiPlayButton fill="#C8E2DE" color="#C8E2DE" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-5 cursor-pointer">
          <div className="flex align-middle bg-[#DEF5F2] justify-around mx-3 p-3 border-gray-100 rounded-3xl hover:border-none hover:shadow-md">
            <div className="flex align-middle rounded-2xl p-1 m-auto bg-white">
              <FaGraduationCap color="#16A34A" size="38" />
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
  );
}

export default RightNav