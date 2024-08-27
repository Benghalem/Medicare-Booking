import React from "react";
import { Link } from "react-router-dom";
/*  import icons */
import { BsArrowRight } from "react-icons/bs";
/* import types */
import { TService } from "@types";
import { ServicesCardProps } from "@types";

const ServicesCard: React.FC<ServicesCardProps> = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item as TService;
  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-[26px] leading-[9 font-[700] text-headingColor">
        {name}
      </h2>
      <p className=" text-[16px] leading-7 text-textColore font-[400] mt-4">
        {desc}
      </p>

      <div className=" flex items-center justify-between mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E]   
                    flex items-center justify-center group hover:bg-primaryColore hover:border-none"
        >
          <BsArrowRight className=" group-hover:text-[#fff] w-6 h-5" />
        </Link>

        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] 
        leading-[33px] font-[600] "
          style={{
            backgroundColor: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
