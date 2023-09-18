import { NavLink, useLocation } from "react-router-dom";

const Menu = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav>
      <div className="flex gap-10 text-[22px] causten-font text-[#807D7E]  font-medium">
        <NavLink className={isActive("/") ? "main-nav-active" : ""} to="/" exact>
          Shop
        </NavLink>
        <NavLink to="/man">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/combos">Combos</NavLink>
        <NavLink to="/joggers">Joggers</NavLink>
        {/* <NavLink to="/products" className={isActive('/products') ? 'main-nav-active' : ''}>products</NavLink> - for demonstration */}
      </div>
    </nav>
  );
};

export default Menu;
