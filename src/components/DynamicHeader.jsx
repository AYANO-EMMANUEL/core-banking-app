import { useLocation } from "react-router-dom";
import TopRightMenu from "./TopRightMenu";

const DynamicHeader = () => {

    const location = useLocation();

    const getPageLabel = (pathname) => {
      switch (pathname) {
        case '/app':
          return 'Wallet';
        case '/app/activity':
          return 'Transactions';
        case '/':
          return 'Contact Us';
        default:
          return '';
      }
    };
  

  return (
    <div className="flex justify-between align-middle items-center mb-6">
      <div className="text-3xl md:text-5xl">{getPageLabel(location.pathname)}</div>
      <TopRightMenu styles="block lg:hidden" />
    </div>
  );
};

export default DynamicHeader;
