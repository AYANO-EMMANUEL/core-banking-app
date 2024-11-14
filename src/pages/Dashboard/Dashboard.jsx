import { AiOutlinePlus } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GiPlayButton } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";

const Dashboard = () => {
  const Naira = ({ color, styles }) => {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles}
      >
        <path
          d="M2.11719 15.26H4.67614V3.56422L11.4859 15.26H14.4044V0H11.8454V11.0342L5.47978 0H2.11719V15.26Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 6.36819C0 5.77883 0.473422 5.30106 1.05742 5.30106H15.1563C15.7403 5.30106 16.2137 5.77883 16.2137 6.36819C16.2137 6.95755 15.7403 7.43532 15.1563 7.43532H1.05742C0.473422 7.43532 0 6.95755 0 6.36819Z"
          fill={color}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9.92514C0 9.33578 0.473422 8.85801 1.05742 8.85801H15.1563C15.7403 8.85801 16.2137 9.33578 16.2137 9.92514C16.2137 10.5145 15.7403 10.9923 15.1563 10.9923H1.05742C0.473422 10.9923 0 10.5145 0 9.92514Z"
          fill={color}
        />
      </svg>
    );
  };

  const CardIcon = ({ color, styles }) => {
    return (
      <svg
        width="55"
        height="65"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.9961 28.6986C15.128 28.6986 10.2815 28.6986 5.41337 28.6986C5.21778 28.6986 5.02218 28.6986 4.82659 28.6768C4.1746 28.5682 3.91381 28.1553 4.08767 27.525C4.82659 24.9171 5.58724 22.2874 6.32615 19.6794C6.52175 19.0057 6.71735 18.332 6.89121 17.6583C7.04334 17.115 7.3476 16.8324 7.93439 16.8542C15.9973 16.8542 24.0384 16.8542 32.1013 16.8542C32.6664 16.8542 32.9489 17.115 33.1011 17.6365C34.0356 20.8965 34.9701 24.1564 35.8829 27.3946C36.1437 28.2856 35.7742 28.7203 34.7745 28.7203C29.8629 28.6986 24.9295 28.6986 19.9961 28.6986ZM20.0179 23.8087C20.0396 23.8521 20.0396 23.8956 20.0613 23.9391C20.7785 23.7 21.5392 23.5696 22.1694 23.2219C23.8211 22.3308 23.9732 20.5705 22.5823 19.3534C21.2349 18.1799 18.5618 18.2451 17.2795 19.4838C16.1711 20.5487 16.1711 21.7658 17.2795 22.8307C18.0619 23.5479 18.9964 23.7869 20.0179 23.8087Z"
          fill={color}
        />

        <path
          d="M20.0604 13.3333C25.1677 13.3333 30.2749 13.3333 35.4038 13.3333C36.4905 13.3333 37.3815 13.6376 37.9683 14.6156C38.968 16.2673 37.7945 18.4188 35.8602 18.484C35.3169 18.5058 34.9474 18.2232 34.8822 17.7668C34.8388 17.3322 35.143 16.9627 35.6646 16.8541C36.3601 16.7237 36.6643 16.3759 36.5991 15.8326C36.5557 15.311 36.1862 15.0502 35.5125 15.0068C35.3821 15.0068 35.2517 15.0068 35.143 15.0068C25.0373 15.0068 14.9532 15.0068 4.84742 15.0068C4.58663 15.0068 4.3041 15.0285 4.04331 15.072C3.60865 15.1589 3.39132 15.4414 3.36959 15.8761C3.34785 16.3325 3.54345 16.6367 3.99984 16.7671C4.13024 16.8106 4.28237 16.8323 4.41277 16.8541C4.86916 16.9627 5.08648 17.267 5.08648 17.7016C5.08648 18.1363 4.73876 18.4406 4.28237 18.484C3.04359 18.571 1.80482 17.506 1.67442 16.289C1.56576 14.8329 2.52201 13.5289 3.86944 13.3768C4.19544 13.3551 4.52143 13.3333 4.84742 13.3333C9.91118 13.3333 14.9967 13.3333 20.0604 13.3333Z"
          fill={color}
        />
      </svg>
    );
  };

  const RequestMoneyIcon = ({color}) => {
    return (
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_3201_198)">
          <path
            d="M6.7828 33.5612C2.51685 32.8635 0.127834 30.8338 0.334673 26.8861C0.865549 26.2079 1.37843 25.5388 1.90706 24.881C3.05316 23.4568 4.29713 22.1288 5.73342 20.9944C6.80754 20.1453 7.96377 19.4434 9.27634 19.029C11.329 18.3803 13.3007 18.6384 15.2206 19.5486C15.3735 19.6211 15.5569 19.6653 15.7256 19.6653C17.4476 19.6732 19.1707 19.6664 20.8926 19.6777C21.0434 19.6788 21.2233 19.7456 21.338 19.843C21.5933 20.0615 21.8363 20.3026 22.0466 20.5642C22.8036 21.5027 22.8373 22.4628 22.2018 23.4862C21.8532 24.0466 21.455 24.3569 20.7194 24.324C19.1403 24.2527 17.5567 24.3025 15.9753 24.3025C15.8729 24.3025 15.7706 24.3025 15.6345 24.3025C15.7087 24.692 15.9179 24.9739 16.1856 25.2071C16.6175 25.5841 17.0854 25.8219 17.7029 25.8015C19.0121 25.7585 20.3235 25.7935 21.6338 25.7811C21.7868 25.78 21.969 25.72 22.0871 25.6237C23.8428 24.1848 25.5783 22.7198 27.3441 21.2933C28.3159 20.5087 29.3495 19.8034 30.5519 19.4105C31.635 19.0562 32.6383 19.1716 33.4897 20.0083C33.7304 20.2449 33.7281 20.5291 33.4785 20.7544C30.0323 23.8712 26.5861 26.988 23.1342 30.098C23.0375 30.1851 22.8688 30.2293 22.7338 30.2293C18.4565 30.2361 14.1791 30.2372 9.9017 30.2282C9.63851 30.2282 9.47767 30.3131 9.31571 30.5123C8.54076 31.469 7.7512 32.4121 6.96613 33.3597C6.91102 33.4242 6.85253 33.4842 6.7828 33.5612Z"
            fill={color}
          />
          <path
            d="M17 7.83094C17.0021 3.6927 20.3647 0.331744 24.5019 0.333344C28.639 0.334945 31.9995 3.69697 32 7.83521C32.0005 11.9692 28.6305 15.3371 24.4976 15.3333C20.3583 15.3296 16.9979 11.9676 17 7.83094ZM26.8711 5.18379C26.4715 4.83222 26.0895 4.68231 24.9084 4.40277C24.8993 4.25126 24.8902 4.09548 24.8806 3.9333C24.672 3.9333 24.4843 3.9333 24.2895 3.9333C24.281 4.08481 24.2741 4.21551 24.2666 4.34622C24.2533 4.32541 24.2394 4.30514 24.2261 4.28433C23.7987 4.46252 23.3367 4.58575 22.9516 4.83009C21.9379 5.47347 21.9337 7.39349 23.2114 7.87842C23.5091 7.99152 23.8147 8.08381 24.1114 8.19851C24.177 8.22412 24.2687 8.30148 24.2703 8.35696C24.2821 8.90538 24.2773 9.45434 24.2773 10.0385C23.6216 9.92327 23.1068 9.59518 22.6192 9.20413C22.385 9.49702 22.17 9.76643 21.9475 10.0444C22.6277 10.6248 23.4146 10.9385 24.2847 11.0804C24.2847 11.3178 24.2847 11.52 24.2847 11.7339C24.4939 11.7339 24.6822 11.7339 24.9009 11.7339C24.9009 11.5051 24.9009 11.2965 24.9009 11.0793C25.0332 11.0585 25.1372 11.0415 25.2413 11.0255C26.5392 10.8211 27.2002 9.92007 26.9522 8.69946C26.8028 7.96538 26.2464 7.65649 25.6227 7.41803C25.3864 7.32733 25.0428 7.31399 24.934 7.14541C24.8118 6.95603 24.8977 6.63113 24.8961 6.36546C24.894 6.06937 24.8956 5.77276 24.8956 5.39718C25.4019 5.60418 25.8388 5.78289 26.2938 5.96908C26.4742 5.72368 26.6673 5.46067 26.8711 5.18379Z"
            fill={color}
          />
          <path
            d="M24.9179 8.37023C25.6296 8.52334 25.9529 8.80396 25.9204 9.22487C25.8868 9.66073 25.4882 9.98189 24.9179 10.0144C24.9179 9.47241 24.9179 8.93092 24.9179 8.37023Z"
            fill={color}
          />
          <path
            d="M24.266 5.40253C24.266 5.94509 24.266 6.4727 24.266 7.00032C23.6707 6.9427 23.3522 6.64715 23.3692 6.17182C23.3858 5.70929 23.7 5.42974 24.266 5.40253Z"
            fill={color}
          />
        </g>
        <defs>
          <clipPath id="clip0_3201_198">
            <rect
              width="33.3333"
              height="33.3333"
              fill="white"
              transform="translate(0.333984 0.333344)"
            />
          </clipPath>
        </defs>
      </svg>
    );
  };

  return (
    <div className="flex w-12/12 cursor-context-menu">
      {/* SIDEBAR NAV */}
      <div className="w-2/12 border-r-[1px] border-gray-100 h-screen">
        <h1 className="text-6xl font-bold text-center mt-10">core.</h1>
      </div>
      {/* MAIN WALLET */}
      <div className="w-7/12 mx-6 mt-12">
        <div className="text-5xl">Wallet</div>
        <div className="flex space-x-6 mb-3">
          <div className="flex">
            <div className="rounded-md p-3 m-auto bg-green-400">
              <Naira color={"white"} />
            </div>
            <div className="m-auto p-4">
              <div className="accountName">Apostle Trump</div>
              <div className="kycLevel opacity-[0.6]">KYC Level 1</div>
            </div>
          </div>
          <div className="flex space-x-10 hover:border-gray-100 hover:shadow-md hover:rounded-3xl hover:drop-shadow-md cursor-pointer">
            <div className="flex align-middle ps-4">
              <div className="rounded-md p-3 m-auto bg-green-40">
                <CardIcon color={"#4ADE80"} />
              </div>
              <div className="m-auto">
                <div className="kycLevelNext">Upgrade KYC Level 2</div>
              </div>
            </div>
            <div className="m-auto px-4">
              <GiPlayButton fill="#4ADE80" color="#4ADE80" />
            </div>
          </div>
        </div>
        {/* WALLET BOX SHADOW */}
        <div
          className="rounded-3xl bg-green-400 cursor-context-menu walletBg text-white p-8 py-12 mb-3"
          style={{
            filter: "blur(0.76px)",
            opacity: "0.9",
            boxShadow: "0px 18px 3px -10px rgba(0,0,0,0.15)",
          }}
        >
          <h4 className="">Total Balance</h4>
          <div className="flex justify-between pb-1">
            <div className="flex align-top">
              <span className="text-xl pe-2 pt-[1.5px]">N</span>
              <p className="walletDigits text-3xl">140,020,500.00</p>
            </div>
            <div className="rounded-xl p-2 bg-slate-400 cursor-pointer">
              <AiOutlinePlus
                color="white"
                className="bold"
                size={"20"}
                style={{
                  strokeWidth: "7",
                  filter:
                    "drop-shadow(0.5px 0.5px 0 white) drop-shadow(-0.5px -0.5px 0 white)",
                }}
              />
            </div>
          </div>
          <div className="text-sm" style={{ fontSize: "bold" }}>
            Book Balance:
            <span className="opacity-[0.7]"> ₦ </span>
            1,000,000.00
          </div>
        </div>
        {/* REQ & SEND BOX */}
        <div className="flex space-x-6 my-5">
          <div className="flex justify-between w-3/6 border-gray-100 shadow-md rounded-3xl cursor-pointer">
            <div className="flex align-middle ps-4">
              <div className="rounded-md p-3 m-auto bg-green-40">
                <RequestMoneyIcon color={"#4ADE80"} />
              </div>
              <div className="m-auto">
                <div className="ps-2">Request Money</div>
              </div>
            </div>
            <div className="m-auto mr-10">
              <GiPlayButton fill="#C8E2DE" color="#C8E2DE" />
            </div>
          </div>
          {/* WITHDRAWAL CARD BOX */}
          <div className="flex justify-between w-3/6 border-gray-100 shadow-md rounded-3xl cursor-pointer">
            <div className="flex align-middle ps-4">
              <div className="rounded-md p-3 m-auto bg-green-40">
                <CardIcon color={"#4ADE80"} />
              </div>
              <div className="m-auto">
                <div className="ps-2">Cardless Withdrawal</div>
              </div>
            </div>
            <div className="m-auto px-4">
              <GiPlayButton fill="#4ADE80" color="#4ADE80" />
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT SIDE NAV */}
      <div className="w-3/12 mt-10 mr-8 border-l-[1px] border-gray-100 h-screen">
        <div className="flex justify-end">
          <div className="inline-flex rounded-lg bg-gray-50">
            <div className="p-1 m-3 rounded-lg bg-[#FFFFFF;]">
              <IoNotifications
                size={"25"}
                color="#231F20"
                className="cursor-pointer"
              />
            </div>
            <div className="flex align-middle">
              <div className="p-1 m-auto rounded-lg bg-[#9DA8B6;]">
                <CgProfile size={"25"} className="cursor-pointer" />
              </div>
              <div className="m-auto p-1 rounded-lg">
                <BiDotsVerticalRounded
                  size={"25"}
                  color="#B2B2B2"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
