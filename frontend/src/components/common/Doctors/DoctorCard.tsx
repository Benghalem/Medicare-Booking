import { Link } from "react-router-dom";
/* import icons */
import starIcon from "@assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";

/* import type */
import { TDoctors } from "@types";

const DoctorCard: React.FC<{ doctor: TDoctors }> = ({ doctor }) => {
  const {
    name,
    avgRating,
    totalRating,
    photo,
    specialty,
    totalPatients,
    hospital,
  } = doctor as TDoctors;
  return (
    <div className="py-3 lg:p-5">
      <div>
        <img src={photo} className="w-full" alt="" />
      </div>

      <h2
        className="text-[18px] font-[700] leading-[30px] lg:text-[26px] lg:leading-9 text-headingColor 
      mt-3 lg:mt-5"
      >
        {name}
      </h2>

      <div className="mt-2 lg;mt-4 flex items-center justify-between">
        <span
          className="bg-[#CCF0F3] text-irisBlueColore py-1 px-2 lg:py-2 lg:px-6 text-[18px] leading-4
       lg:text-[16px] lg:leading-7 font-semibold rounded "
        >
          {specialty}
        </span>
        <div className="flex items-center gap-[6px]">
          <span
            className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7
        font-semibold text-headingColor"
          >
            <img src={starIcon} alt="" />
            {avgRating}
          </span>
          <span className="text-[14px] leading-3 lg:text-[16px] lg:leading-7 font-[400] text-textColore">
            ({totalRating})<span className="text-[14px] lg:text-[16px]"></span>
          </span>
        </div>
      </div>
      <div className="mt-3 lg:mt-5 flex items-center justify-between">
        <div>
          <h3 className="text-[16px] leading-7 lg:text-[18px] lg:leading-[30px] font-semibold text-textColore">
            +{totalPatients} Patients
          </h3>
          <p className="text-[14px] leading-6  font-[400] text-textColore">
            At {hospital}
          </p>
        </div>
        <Link
          to="/doctors"
          className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mt-[30px] 
                    flex items-center justify-center group hover:bg-primaryColore hover:border-none"
        >
          <BsArrowRight className=" group-hover:text-[#fff] w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
