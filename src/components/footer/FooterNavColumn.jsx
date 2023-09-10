import React from "react";
import { Link } from "react-router-dom";

const FooterNavColumn = ({ column }) => {
  return (
    <div className="text-white">
      <h3 className="text-2xl font-bold mb-[25px]">{column.category}</h3>
      <ul>
        {column.links.map((link, linkIndex) => (
          <li key={linkIndex} className="mb-[15px]">
            <Link
              to={link.url}
              className="text-gray-300 hover:text-white text-[16px]"
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm">{column.description}</p>
    </div>
  );
};

export default FooterNavColumn;
