import { useEffect, useRef } from "react";
// import nav link path
import { navLinks } from "../../../constants/data";
// import links
import { Link, NavLink } from "react-router-dom";
// icons import
import logo from "@assets/images/logo.png";
import userImg from "@assets/images/avatar-icon.png";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* ------ stert sticky header function logic here and  scroll event --------*/
  const handlerStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        /* ?(to safely access the current) try to access classList if current is not null. If current is null */
        headerRef.current?.classList.add("sticky__header");
      } else {
        /* remove sticky header class if current is null or not defined in classList property of header */
        headerRef.current?.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handlerStickyHeader();
    return () => {
      window.removeEventListener("scroll", handlerStickyHeader);
    };
  });
  /* end ------ sticky header function logic here  --------*/

  /* toggle menu */
  const menuToggle = () => {
    menuRef.current?.classList.toggle("show__menu");
  };

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ==================== logo ======== ============= */}
          <div>
            <img src={logo} alt="logo" />
          </div>
          {/* ==================== menu ======== ============= */}
          <div className="navigation" ref={menuRef} onClick={menuToggle}>
            <ul className=" menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColore text-[16px] leading-7 font-[600]"
                        : " text-textColore text-[16px] leading-7 font-[500]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ==================== nav right ======== ============= */}

          <div className="flex items-start gap-3 pt-2 ">
            <div className="hidden ">
              <Link to={"/"}>
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer pt-2 ">
                  <img src={userImg} alt="" />
                </figure>
              </Link>
            </div>

            <Link to={"/login"}>
              <button className="bg-primaryColore py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px] ">
                Login
              </button>
            </Link>

            <span className="md:hidden pt-2" onClick={menuToggle}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
