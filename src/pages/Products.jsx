import React from "react";
import { Button } from "@material-tailwind/react";
import category from "../data/product/product.js";
import FilterAccordion from "../components/productsPage/FilterAccordion.jsx";
import ProductCard from "../components/common/ProductCard.jsx";
const Products = () => {
  console.log(category.products);

  return (
    <div className=" max-w-[1230px] m-auto flex flex-row mb-[100px]">
      <div className="w-[350px] mr-[50px] border-t-0 border border-solid border-gray-300 border-opacity-40">
        <div className="flex justify-between items-center p-[12px_20px] text-[20px] text-[#807D7E]  border-b border-gray-300 border-opacity-40">
          <h3>Filter</h3>
          <Button><img src="/src/assets/images/filter_icon.svg" alt="filter icon" /></Button>

        </div>
        <FilterAccordion title="Price"/> 
      </div> 
                                {/* right section - List of filtered items */}
      <div className="w-full">
        <div className="flex justify-between p-[50px_0px] text-[22px]">
          <h3 className="">Category Name</h3>
          <div className="flex gap-4">
            <button className="text-[black] text-[20px]">New</button>
            <button className="text-[black] text-[20px]">Recommended</button>
          </div>
        </div>
       <ProductCard {...category}/>
      </div>
    </div>
  );
};

export default Products;
