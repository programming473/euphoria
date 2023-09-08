import React from "react";

const Title = ({ itemsType }) => {
  return (
    <div className="relative  ">
      <div className="  absolute  top-[12px] rounded-xl w-[6px] h-[30px] bg-[#8A33FD]"></div>
      <span className="pl-[26px] text-[30px] font-bold text-[#3C4242]">
        {itemsType}
      </span>
    </div>
  );
};

export default Title;
