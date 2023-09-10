import React from "react";
import { Link } from "react-router-dom";

const FooterSocialIcons = ({ socials }) => {
  return (
    <ul className="flex flex-row items-center gap-4">
      {socials.map((item) => (
        <li key={item.id} className="p-2.5 bg-[#F6F6F6] rounded-xl">
          <Link className="text-[20px] text-[#3C4242]" to={item.link}>
            {item.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterSocialIcons;
