import Logo from "@/assets/images/Euphoria.svg";
import Menu from "@/components/header/Menu.jsx";
import Search from "@/components/header/Search.jsx";
import Panel from "@/components/header/Panel.jsx";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="w-[1230px] m-auto">
      <div className="flex justify-between items-center p-[30px_0]">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <Menu />
        <Search />
        <Panel />
      </div>
    </div>
  );
};

export default Header;
