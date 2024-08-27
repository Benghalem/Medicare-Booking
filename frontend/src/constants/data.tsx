/* import icons */
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  /* AiOutlineTwitter,
  AiOutlineFacebook, */
} from "react-icons/ai";

export const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctor",
    display: "Find a Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

export const socialLinks = [
  {
    icon: <RiLinkedinFill className="group-hover:text-[#fff] w-4 h-5" />,
    link: "https://www.linkedin.com/",
  },
  {
    icon: <AiFillYoutube className="group-hover:text-[#fff] w-4 h-5" />,
    link: "https://www.youtube.com/",
  },
  {
    icon: <AiFillGithub className="group-hover:text-[#fff] w-4 h-5" />,
    link: "https://www.github.com/",
  },
  {
    icon: <AiOutlineInstagram className="group-hover:text-[#fff] w-4 h-5" />,
    link: "https://www.instagram.com/",
  },
];

/* footer links */
export const quickLinks01 = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "About Us",
    path: "/",
  },
  {
    display: "Servises",
    path: "/services",
  },
  {
    display: "Blog",
    path: "/",
  },
];
export const quickLinks02 = [
  {
    display: "Find a Doctor",
    path: "/find-a-doctor",
  },
  {
    display: "Request an Appointment",
    path: "/",
  },
  {
    display: "Find a Location",
    path: "/",
  },
  {
    display: "Get a Option",
    path: "/",
  },
];
export const quickLinks03 = [
  {
    display: "Donate",
    path: "/",
  },
  {
    display: "Contact Us",
    path: "/",
  },
];
/* export const footerLinks = [
  {
    title: "quick links01",
    links: [
      {
        display: "Home",
        path: "/home",
      },
      {
        display: "About Us",
        path: "/",
      },
      {
        display: "Servises",
        path: "/services",
      },
      {
        display: "Blog",
        path: "/",
      },
    ],
  },
  {
    title: "quick links02",
    links: [
      {
        display: "Find a Doctor",
        path: "/find-a-doctor",
      },
      {
        display: "Request an Appointment",
        path: "/",
      },
      {
        display: "Find a Location",
        path: "/",
      },
      {
        display: "Get a Option",
        path: "/",
      },
    ],
  },
  {
    title: "quick links03",
    links: [
      {
        name: "Donate",
        link: "/",
      },
      {
        name: "Contact Us",
        link: "/",
      },
    ],
  },
]; */

/* 
export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];  */
