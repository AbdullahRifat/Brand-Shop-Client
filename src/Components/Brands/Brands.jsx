/* eslint-disable react/prop-types */
import Brand from "./Brand";

const Brands = ({ brands }) => {
  return (
  <div className="grid  gap-16 md:grid-cols-2 lg:grid-cols-3">
      {
        brands.map(brand => (
          <Brand key={brand.id} brand={brand}></Brand>
        ))
      }
  </div>
  );
};

export default Brands;
