import { Link } from "react-router-dom";

/* import data */
import {
  socialLinks,
  quickLinks03,
  quickLinks02,
  quickLinks01,
} from "../../../constants/data";

/* import icons and images */
import logo from "@assets/images/logo.png";

const Footer = () => {
  const years = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className=" flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* social links */}
          <div className="mt-[30px]">
            <img src={logo} alt="" />
            <p className="text-[16px] leading-7 font-[400] text-textColore ">
              Copyright © {years} devloped by Benghalem Aziz. All rights
              reserved
            </p>

            <div className=" flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.link}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex
                    items-center justify-center group hover:bg-primaryColore hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          {/* quick links */}
          <div>
            <h2 className="text-[20px] font-[700] leading-[30px]  text-headingColor mt-6 mb-2">
              Quik Links
            </h2>
            <ul>
              {quickLinks01.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColore"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] font-[700] leading-[30px]  text-headingColor mt-6 mb-2">
              Want to:
            </h2>
            <ul>
              {quickLinks02.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColore"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[20px] font-[700] leading-[30px]  text-headingColor mt-6 mb-2">
              Support
            </h2>
            <ul>
              {quickLinks03.map((link, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={link.path}
                    className="text-[16px] leading-7 font-[400] text-textColore"
                  >
                    {link.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
