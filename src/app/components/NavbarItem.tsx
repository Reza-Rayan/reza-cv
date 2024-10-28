import { Link } from "react-router-dom";

interface NavbarItemProps {
  title: string;
  link: string;
  icon: any;
}

const NavbarItem = ({ link, title, icon }: NavbarItemProps) => {
  return (
    <li className="text-lg font-semibold transition-all hover:text-primary cursor-pointer relative navbarItem after:bg-secondary">
      <Link to={link} className={"flex gap-2 items-center "}>
        {icon}
        {title}
      </Link>
    </li>
  );
};

export default NavbarItem;
