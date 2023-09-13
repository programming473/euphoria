import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <div className="flex gap-10 text-[22px] causten-font text-[#807D7E]  font-medium">
        <NavLink to="/" exact  className="active-link">
          Shop
        </NavLink>
        <NavLink to="/man">Men</NavLink>
        <NavLink to="/women">Women</NavLink>
        <NavLink to="/combos">Combos</NavLink>
        <NavLink to="/joggers">Joggers</NavLink>
      </div>
    </nav>
  );
};

export default Menu;
