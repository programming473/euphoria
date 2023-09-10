import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const AccordionCategories = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#3C4242]">
      <div className="border-t border-[#BEBCBD] w-full"></div>
      
      <div className={`flex items-center w-[1140px] m-auto justify-between cursor-pointer py-[29px]`} onClick={toggleAccordion}>
        <div className={`font-bold text-2xl text-[#f6f6f6]`}> Popular categories</div>
        <div className="text-[#f6f6f6] transform transition-transform duration-900"><RiArrowDownSLine className={isOpen ? "rotate-180" : ""} size={30}/> </div>
      </div>

      <div className={`overflow-hidden transition-max-h duration-600 ${isOpen ? "max-h-[200px] " : "max-h-0"}`}>

        <div className=" p-4   w-[1120px] flex justify-center mx-auto text-[#BEBCBD]  ">
          <div className="flex   mx-auto ">

            {categories.map((category) => (
              <div key={category.id} className="w-1/4 p-2 ">
                <a
                  href={category.link}
                  className="text-[#BEBCBD]"
                >
                  {category.name}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="border-t border-[#BEBCBD] mb-[37px] w-full"></div>
    </div>
  );
};

export default AccordionCategories;
