/* eslint-disable react/prop-types */
import Brand from "./Brand";

const Brands = ({ brands }) => {
  return (
  <div className="flex flex-wrap gap-8">
      {
        brands.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))
      }
  </div>
  );
};

export default Brands;
