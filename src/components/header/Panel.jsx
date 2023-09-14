import {
  AiOutlineHeart,
  AiOutlineUser,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IconButton } from "@material-tailwind/react";
import { NavLink, useLocation } from "react-router-dom";

const Panel = () => {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <div className="flex gap-3 ">
      <NavLink
        to="/account/wishlist"
        className={isActive("/account/wishlist") ? "header-panel-active" : ""}
      >
        <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center custom-icon-button">
          <AiOutlineHeart className=" w-5 h-5 text-[#807D7E] custom-icon" />
        </IconButton>
      </NavLink>
      <NavLink
        to="/account"
        className={isActive("/account") ? "header-panel-active" : ""}
      >
        <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center custom-icon-button">
          <AiOutlineUser className="w-5 h-5 text-[#807D7E] custom-icon" />
        </IconButton>
      </NavLink>

      <NavLink
        to="/cart"
        className={isActive("/cart") ? "header-panel-active" : ""}
      >
        <IconButton className="bg-[#F6F6F6] p-6 flex items-center justify-center custom-icon-button">
          <AiOutlineShoppingCart className="w-5 h-5 text-[#807D7E] custom-icon" />
        </IconButton>
      </NavLink>
    </div>
  );
};

export default Panel;
