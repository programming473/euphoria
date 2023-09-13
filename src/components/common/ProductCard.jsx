import React from 'react'
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { AiOutlineHeart} from "react-icons/ai";

const ProductCard = (props) => {
  return (
    <div className="flex flex-row flex-wrap gap-[50px] basis-3/12">
    {props.products.map((item) => {
      return ( 
        <Link to={item.link} className=" w-[270px] hover-effect relative" key={`Product_${item.id}`} >
            
          <img className="h-[370px] w-[280px] object-cover rounded-xl  favorite-btn" src={item.img} alt={item.title} />
          <IconButton className=" rounded-full bg-[#F6F6F6] p-4 flex items-center top-[20px] right-[20px] z-2   absolute justify-center">
            <AiOutlineHeart className=" w-5 h-5 text-[#807D7E] transition-colors hover:text-red-400" />
          </IconButton>

          <div className="flex justify-between items-start mt-[15px]">
            <div className="">
              <h3 className="text-[17px] text-[#2A2F2F] font-bold">
                {item.title.length > 20
                  ? item.title.slice(0, 18) + "..."
                  : item.title}
              </h3>
              <p className="text-[13px]  text-[#7F7F7F]">{item.brand}</p>
            </div>
            <div className="flex justify-center items-center">
              <IconButton className="bg-[#F6F6F6] font-bold w-[82px] h-[36px] text-[14px] text-[#3C4242] flex items-center justify-center">
                ${item.price}
              </IconButton>
            </div>
          </div>
        </Link>
      );
    })}
  </div>

  )
}

export default ProductCard