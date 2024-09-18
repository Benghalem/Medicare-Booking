import { useState } from "react";
/* import images and icons */
import doctorImg from "@assets/images/doctor-img02.png";
import starIcon from "@assets/images/Star.png";
/* import components */
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";

const DoctorDetails = () => {
  /* tab section active  */
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            {/* doctor details section start */}
            <div className="flex items-center gap-5">
              <figure className="max-w-[200px]  max-h-[200px]">
                <img src={doctorImg} alt="" className="w-full" />
              </figure>
              <div>
                <span
                  className="bg-[#CCF0F3] text-irisBlueColore py-1 px-6 lg:py-2 lg:px-6 text-[12px] 
                  leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded "
                >
                  Surgeon
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  Benghalem Aziz
                </h3>
                <div className="flex items-center gap-[px]">
                  <span
                    className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px]
                  lg:leading-7 font-semibold text-headingColor"
                  >
                    <img src={starIcon} alt="" /> 4.8
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px]lg:leading-7 font-[400] text-textColor">
                    (272)
                  </span>
                </div>
                <p className="text__para text-[14px] mt-2 leading-5 md:text-[15px] lg:max-w-[390px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate, ipsam!
                </p>
              </div>
            </div>
            {/* doctor details section end */}

            {/* tab section start */}
            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setActiveTab("about")}
                className={`${
                  activeTab === "about" &&
                  "border-b border-solid border-primaryColore"
                }
                py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setActiveTab("feedback")}
                className={`${
                  activeTab === "feedback" &&
                  "border-b border-solid border-primaryColore"
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>

            <div className="mt-[50px]">
              {activeTab === "about" && <DoctorAbout />}
              {activeTab === "feedback" && <Feedback />}
            </div>
            {/* tab section end */}
          </div>

          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
