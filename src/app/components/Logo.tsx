import { Link } from "react-router-dom";
import logoImg from "/favicon.png";

const Logo = () => {
  return (
    <Link
      to={"/"}
      className="text-2xl font-bold italic font-sans  flex  items-center"
    >
      <img src={logoImg} alt="reza hosseinzadeh" width={100} />
    </Link>
  );
};

export default Logo;
