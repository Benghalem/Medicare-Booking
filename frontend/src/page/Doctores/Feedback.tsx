import { useState } from "react";
/* import images and icons */
import avatar from "@assets/images/avatar-icon.png";
import { AiFillStar } from "react-icons/ai";
/* import components */
import { formateDate } from "@util/formateDate";
import FeedbackForm from "./FeedbackForm";

const Feedback = () => {
  /* show feedback form start */
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px]">
        <h4 className="text-headingColor text-[20px] leading-[30px] font-bold mb-[30px]">
          All reviewes (272)
        </h4>
        <div className="flex justify-between gap-10 mb-[30px]">
          <div className="flex gap-3">
            <figure className="w-10 h-10 rounded-full">
              <img className="w-full" src={avatar} alt="" />
            </figure>

            <div>
              <h5 className="text-primaryColore font-bold text-[15px] leading-6">
                Alem Habib
              </h5>
              <p className="text-textColor text-[14px] leading-6">
                {formateDate("2009-06-23")}
              </p>
              <p className="text__para mt-3 font-medium text-[15px] ">
                Good services, highty recommended
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            {[...Array(5).keys()].map((_, index) => (
              <AiFillStar key={index} color="#0067ff" />
            ))}
          </div>
        </div>
        {
          /* show feedback form end */
          !showFeedbackForm && (
            <div className="text-center">
              <button className="btn" onClick={() => setShowFeedbackForm(true)}>
                Give Five Stars
              </button>
            </div>
          )
        }
        {showFeedbackForm && <FeedbackForm />}
      </div>
    </div>
  );
};

export default Feedback;
