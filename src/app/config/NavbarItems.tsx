// Icons
import { SiHomeadvisor } from "react-icons/si";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaMeh } from "react-icons/fa";

// -------------------------------------------------

export const NavbarItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <SiHomeadvisor fontSize={20} />,
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    icon: <MdOutlineMiscellaneousServices fontSize={20} />,
  },
  {
    id: 3,
    title: "About Me",
    path: "/about-me",
    icon: <FaMeh fontSize={20} />,
  },
];
