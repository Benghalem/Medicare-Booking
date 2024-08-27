import { useState } from "react";
/* import icons */
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
/* import types */
import { TFaqse } from "@types";

export const FaqItem: React.FC<{ faq: TFaqse }> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);
  /* toggle accordion function start here  + ou - icon */
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className="p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9DCE2] mb-5
  cursor-pointer"
    >
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor">
          {faq.question}
        </h4>
        <div
          className={`${
            isOpen && "bg-primaryColore text-[#fff] border-none"
          } w-7 h-7 lg-w-8 border border-solid border-[#141F21] rounded flex items-center justify-center`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>
      {isOpen && (
        <div className="mt-4">
          <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColore">
            {faq.content}
          </p>
        </div>
      )}
    </div>
  );
};
