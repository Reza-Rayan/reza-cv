// Icons
import { FaLocationDot } from "react-icons/fa6";
// -----------------------------------------------
interface ProductCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  location: string;
}

const ProductCard = ({
  title,
  description,
  link,
  image,
  location,
}: ProductCardProps) => {
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="flex items-center gap-1">
          <FaLocationDot />
          <span>{location}</span>
        </div>
        <div className="card-actions justify-end">
          <a target="_blank" href={link} className="btn btn-secondary">
            Go to website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
