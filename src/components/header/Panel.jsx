import { AiOutlineHeart,AiOutlineUser,AiOutlineShoppingCart } from "react-icons/ai";

import { IconButton } from "@material-tailwind/react";

const Panel = () => {
    return (
        <div className="flex gap-3">
            <IconButton className="bg-[#F6F6F6] p-3">
                <AiOutlineHeart className="w-5 h-5"/>
            </IconButton>
            <IconButton className="bg-[#F6F6F6] p-3">
                <AiOutlineUser className="w-5 h-5"/>
            </IconButton>
            <IconButton className="bg-[#F6F6F6] p-3">
                <AiOutlineShoppingCart className="w-5 h-5"/>
            </IconButton>
        </div>
    )
}

export default Panel;