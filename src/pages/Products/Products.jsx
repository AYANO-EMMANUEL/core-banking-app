import TopRightMenu from "../../components/TopRightMenu";
import AllOptions from "./components/AllOptions"

const Products = () => {
  return (
    <div className="px-6 pt-10 overflow-y-scroll max-h-screen">
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
