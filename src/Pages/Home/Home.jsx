import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

import Brands from "../../Components/Brands/Brands";



const Home = () => {
    const brands = useLoaderData()
 
    return (
        <div className="mx-auto max-w-screen-xl">
           
           
           <div className="flex justify-center w-full">
           <Banner></Banner>
           </div>
           <div>
             <Brands brands={brands}></Brands>
           </div>
            
        </div>
    );
};

export default Home;