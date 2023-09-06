import { AiOutlineHeart,AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";

import { IconButton } from "@material-tailwind/react";

const Panel = () => {
    return (
        <div className="flex gap-3 ">
            <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center">
                <AiOutlineHeart className=" w-5 h-5 text-[#807D7E]"/>
            </IconButton>
            <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center">
                <AiOutlineUser className="w-5 h-5 text-[#807D7E]"/>
            </IconButton>
            <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center">
                <AiOutlineShoppingCart className="w-5 h-5 text-[#807D7E]"/>
            </IconButton>
        </div>
    )
}

export default Panel;