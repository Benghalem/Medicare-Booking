/* import components */
import { formateDate } from "@util/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px]  text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColore font-bold text-[24px] leading-9">
            Benghalem Aziz
          </span>
        </h3>
        <p className="text__para mt-3">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          pariatur dolores dolorem dolore, cupiditate harum ipsam quibusdam
          voluptates fugit vel nemo excepturi dolor eveniet quos incidunt
          expedita voluptatibus esse illo?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px]  text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColore text-[16px] leading-6 font-semibold">
                {formateDate("2009-06-23")} - {formateDate("2009-09-02")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>

          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColore text-[16px] leading-6 font-semibold">
                {formateDate("2024-02-03")} - {formateDate("2024-06-23")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px]  text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-4">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColore text-[15px] leading-6 font-semibold">
              {formateDate("2009-06-23")} - {formateDate("2009-09-02")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              PHD in Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>

          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColore text-[15px] leading-6 font-semibold">
              {formateDate("2024-02-03")} - {formateDate("2024-06-23")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              PHD in Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hospital, New York.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
