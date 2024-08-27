import { Link } from "react-router-dom";
/* ------import icons and images  ------*/
import heroImge01 from "@assets/images/hero-img01.png";
import heroImge02 from "@assets/images/hero-img02.png";
import heroImge03 from "@assets/images/hero-img03.png";
import featureImg from "@assets/images/feature-img.png";
import videoIcon from "@assets/images/video-icon.png";
import avatarIcon from "@assets/images/avatar-icon.png";
import faqImg from "@assets/images/faq-img.png";
import icon01 from "@assets/images/icon01.png";
import icon02 from "@assets/images/icon02.png";
import icon03 from "@assets/images/icon03.png";
import { BsArrowRight } from "react-icons/bs";
/* import  Components */
import About from "@components/common/About/About";
import ServicesList from "@components/Services/ServicesList";
import DoctorList from "@components/common/Doctors/DoctorList";
import { FaqList } from "@components/common/Faq/FaqList";
import Testimonial from "@components/common/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/* ========== hero section start ============= */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* =========== hero content ============ */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[54px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]">
                  We help patiiens live a healthy, longer life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam quos sed, unde illo neque, omnis sunt amet voluptatum
                  aliquam ipsum nostrum a dolores quo dolor id exercitationem
                  adipisci, facilis reiciendis.
                </p>
                <button className="btn">Request an Appointement</button>
              </div>
              {/* ========== hero counter ========== */}
              <div className=" mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColore rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years Of Experience</p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColore rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location </p>
                </div>
                <div className="">
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColore rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ========== hero image ============ */}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img src={heroImge01} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImge02} alt="" className="w-full mb-[30px]" />
                <img src={heroImge03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== hero section end ============= */}

      {/* ========== service section start ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">
              Provading the best medical services
            </h2>
            <p className="text__para text-center">
              world-class care for everyone. Our helthy System offers unmatched,
              expert health care.
            </p>
          </div>
          {/*  grid for services  */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-[9 font-[700] text-headingColor text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColore font-[400] mt-4 text-center">
                  world-class care for everyone. Our helthy System offers
                  unmatched, expert health care, From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mx-auto mt-[30px] 
                    flex items-center justify-center group hover:bg-primaryColore hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-[#fff] w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-[9 font-[700] text-headingColor text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColore font-[400] mt-4 text-center">
                  world-class care for everyone. Our helthy System offers
                  unmatched, expert health care, From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mx-auto mt-[30px] 
                    flex items-center justify-center group hover:bg-primaryColore hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-[#fff] w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 ">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-[9 font-[700] text-headingColor text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColore font-[400] mt-4 text-center">
                  world-class care for everyone. Our helthy System offers
                  unmatched, expert health care, From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px]  rounded-full border border-solid border-[#181A1E] mx-auto mt-[30px] 
                    flex items-center justify-center group hover:bg-primaryColore hover:border-none"
                >
                  <BsArrowRight className=" group-hover:text-[#fff] w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      {/* ========== About section start ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">Ouer medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our helthy System offers unmatched,
              expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>
      {/* ========== service section end ============= */}

      {/* ========== feature section start ============= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ------ feature content ------ */}
            <div className=" xl:w-[670px] ">
              <h2 className="heading">
                Get virtial treatement <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Shedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Shearch for the physician here. and contact their office
                </li>
                <li className="text__para">
                  3. View our physician who are accepting new patients, use the
                  online sheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/* ------ feature image ------ */}
            <div className="relative z-10 xl:w-[770px] flex  justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />
              <div
                className="w-[150px] lg:w-[248px] bg-[#fff] absolute bottom-[-50px] left-0 md:bottom-[100px]
                md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px] "
              >
                <div className="flex items-center justify-between ">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[16px] leading-[10px] lg:text-[14px] lg:leading-5  text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[16px] leading-[10px] lg:text-[14px] lg:leading-5  text-textColore font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span
                    className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColore
                     rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"
                  >
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div
                  className="w-[65] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] 
                  leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColore font-[500] mt-2 lg:mt-4 rounded-full"
                >
                  Consultaion
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h1 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px]  text-headingColor font-[700]">
                    Wayne Collins
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== feature section end ============= */}

      {/* ========== oure great doctors section ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">Our Great Doctors</h2>
            <p className="text__para text-center">
              world-class care for everyone. Our helthy System offers unmatched,
              expert health care.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* ========== oure great doctors section end ============= */}

      {/* ========== faq section ============= */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className=" heading">
                Most qustions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ========== faq section end ============= */}

      {/* ========== test imonial section ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center ">What Our Patients Say</h2>
            <p className="text__para text-center">
              world-class care for everyone. Our helthy System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>

      {/* ========== test imonial section end ============= */}
    </>
  );
};

export default Home;
