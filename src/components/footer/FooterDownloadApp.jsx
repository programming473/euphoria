import React from "react";

const FooterDownloadApp = () => {
  return (
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
  );
};

export default FooterDownloadApp;
