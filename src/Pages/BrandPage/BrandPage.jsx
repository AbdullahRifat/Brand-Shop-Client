
// import { useEffect, useState } from "react";
// import Slider from "../../Components/Sliders/Slider";
// import { useLoaderData, useParams } from "react-router-dom";
// import Phones from "../../Components/Phones/Phones";

// const BrandPage = () => {
//     const allBrands =  useLoaderData()
//     const { brands } = useParams();
//     const [phonesData, setPhonesData] = useState([]);
//     const [loading, setLoading] = useState(true);


//     useEffect(() => {
//         fetch(`http://localhost:5000/brands`,{
//           method: 'GET',
          
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data)
//             const filteredData = data.filter(
//                 (phone) => phone.brand.toLowerCase() === brands.toLowerCase()
//               );


//             setPhonesData(filteredData);
//             console.log(phonesData)
//             setLoading(false);
//           })
//           .catch((error) => {
//             console.error("Error fetching phone data:", error);
//           });
//       }, []);
    
   
    

  

//     const filteredBrands = allBrands.find(brand => brand.name == brands);
//     console.log("ph",phonesData)
  
//     return (
//         <div className="mx-auto max-w-screen-xl">
           
            
//             <Slider filteredBrands={filteredBrands}></Slider>
//             <Phones phonesData={phonesData}></Phones>
//         </div>
//     );
// };

// export default BrandPage;
import  { useEffect, useState } from "react";
import Slider from "../../Components/Sliders/Slider";
import { useLoaderData, useParams } from "react-router-dom";
import Phones from "../../Components/Phones/Phones";
import Nothing from "../../Components/Carts/Nothing";

const BrandPage = () => {
  const allBrands = useLoaderData();
  const { brands } = useParams();
  const [phonesData, setPhonesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/brands`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const filteredData = data.filter(
          (phone) => phone.brand.toLowerCase() === brands.toLowerCase()
        );

       // Log the filtered data
        setPhonesData(filteredData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching phone data:", error);
      });
  }, [brands]); // Include brands in the dependency array if it changes

  const filteredBrands = allBrands.find((brand) => brand.name === brands);

  return (
    <div className="mx-auto max-w-screen-xl">
        
      <Slider filteredBrands={filteredBrands} />
      {
        phonesData?.length?<Phones phonesData={phonesData} />
        :<div className="flex justify-center items-center"><Nothing></Nothing></div>
      }
    
    </div>
  );
};

export default BrandPage;
