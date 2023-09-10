import React, { useState } from "react";
import {
  footerNav,
  footerSocials,
  footerCategories,
} from "@/data/footer/footerData.jsx";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#3C4242]">
      <div className="py-[59px]  max-w-[1220px] m-auto">
        <div className="grid grid-cols-4 gap-4 px-[40px]">
          {footerNav.map((column, index) => (
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-[25px]">
                {column.category}
              </h3>
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
          ))}
        </div>

        <div className="flex justify-between mb-[43px] place-items-end px-[40px]">
          <ul className="flex flex-row items-center gap-4">
            {footerSocials.map((item) => (
              <li key={item.id} className="p-2.5 bg-[#F6F6F6] rounded-xl">
                <Link className="text-[20px] text-[#3C4242]" to={item.link}>
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col ">
            <h3 className="text-2xl text-[#f6f6f6] mb-[20px] font-bold pl-[7px]">
              Download The App
            </h3>
            <div className="flex">
              <a className="" href="/#">
                <img src="src/assets/images/footer/GooglePlay.svg" alt="" />
              </a>
              <a href="/#">
                <img src="src/assets/images/footer/appstore.svg" alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#3C4242]">
          <div className="border-t border-[#BEBCBD] w-full"></div>

          <div
            className={`flex items-center w-[1140px] m-auto justify-between cursor-pointer py-[29px]`}
            onClick={toggleAccordion}
          >
            <div className={`font-bold text-2xl text-[#f6f6f6]`}>
              Popular categories
            </div>
            <div className="text-[#f6f6f6] transform transition-transform duration-900">
              <RiArrowDownSLine
                className={isOpen ? "rotate-180" : ""}
                size={30}
              />{" "}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-max-h duration-600 ${
              isOpen ? "max-h-[200px] " : "max-h-0"
            }`}
          >
            <div className=" p-4   w-[1120px] flex justify-center mx-auto text-[#BEBCBD]  ">
              <div className="flex   mx-auto ">
                {footerCategories.map((category) => (
                  <div key={category.id} className="w-1/4 p-2 ">
                    <a href={category.link} className="text-[#BEBCBD]">
                      {category.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-[#BEBCBD] mb-[37px] w-full"></div>
        </div>
        <div className="text-white text-14px font-semibold text-center">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
