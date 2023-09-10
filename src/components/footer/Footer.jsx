import React from "react";
import FooterNavColumn from "./FooterNavColumn.jsx";
import FooterSocialIcons from "./FooterSocialIcons.jsx";
import FooterDownloadApp from "./FooterDownloadApp.jsx";
import AccordionCategories from "./AccordionCategories.jsx";
import { footerNav, footerSocials,footerCategories } from "@/data/footer/footerData.jsx";


const Footer = () => {
  return (
    <div className="bg-[#3C4242]">
      <div className="py-[59px]  max-w-[1220px] m-auto">
        <div className="grid grid-cols-4 gap-4 px-[40px]">
          {footerNav.map((column, index) => (
            <FooterNavColumn key={index} column={column} />
          ))}
        </div>

        <div className="flex justify-between mb-[43px] place-items-end px-[40px]">
          <FooterSocialIcons socials={footerSocials} />
          <FooterDownloadApp />
        </div>

        <AccordionCategories categories={footerCategories} />

        <div className="text-white text-14px font-semibold text-center">
          Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
