// Custom Componetns
import Title from "../../../components/Title";
import ProductsList from "./ProductsList";
// ----------------------------------------------

const Products = () => {
  return (
    <section>
      <Title>Products</Title>

      <div className="w-full my-6">
        <div role="tablist" className="tabs tabs-bordered">
          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="WORDPRESS"
          />
          <div role="tabpanel" className="tab-content p-10">
            <ProductsList filter="wordpress" />
          </div>

          <input
            type="radio"
            name="my_tabs_1"
            role="tab"
            className="tab"
            aria-label="REACT"
            defaultChecked
          />
          <div role="tabpanel" className="tab-content p-10">
            <ProductsList filter="react" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
