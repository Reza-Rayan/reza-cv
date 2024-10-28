import { products } from "../../../../@data/Products.json";
// Custom Components
import ProductCard from "../../../components/products/ProductCard";
// -------------------------------------------------------------------

interface ProductsListProps {
  filter: string;
}

const ProductsList = ({ filter }: ProductsListProps) => {
  const filteredProduct = products.filter((product) => {
    return product?.tech.toLowerCase().includes(`${filter}`);
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {filteredProduct ? (
        filteredProduct.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            image={product.image}
            link={product.url}
            location={product.location}
          />
        ))
      ) : (
        <div className="min-h-[300px] w-full flex items-center justify-center">
          There is nothing ...
        </div>
      )}
    </div>
  );
};

export default ProductsList;
