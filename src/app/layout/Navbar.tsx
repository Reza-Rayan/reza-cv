import { Link } from "react-router-dom";
import { NavbarItems } from "../config/NavbarItems";
// Custom Components
import Logo from "../components/Logo";
import NavbarItem from "../components/NavbarItem";
import ThemeController from "../components/ThemeController";
// icons
import { FaPhoneAlt } from "react-icons/fa";

// -------------------------------------------------
const Navbar = () => {
  return (
    <div className="container mx-auto py-6 px-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo />
      </div>
      <div className="flex items-center gap-x-6">
        <ThemeController />
        <ul className="lg:flex hidden items-center gap-x-4">
          {NavbarItems.map((item) => (
            <NavbarItem
              key={item.id}
              link={item.path}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </ul>
        <Link
          to={"/contact-me"}
          className="lg:flex hidden btn btn-outline btn-primary"
        >
          <FaPhoneAlt />
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
