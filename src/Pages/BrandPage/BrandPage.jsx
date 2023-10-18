
import Slider from "../../Components/Sliders/Slider";
import { useLoaderData, useParams } from "react-router-dom";

const BrandPage = () => {
    const allBrands =  useLoaderData()
    const { brandsName } = useParams();
   
    

  

    const filteredBrands = allBrands.find(brand => brand.name == brandsName);
    console.log("filtered",filteredBrands)
  
    return (
        <div className="mx-auto max-w-screen-xl">
            <Slider filteredBrands={filteredBrands}></Slider>
        </div>
    );
};

export default BrandPage;