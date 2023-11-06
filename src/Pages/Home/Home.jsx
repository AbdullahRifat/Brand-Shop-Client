import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";

import Brands from "../../Components/Brands/Brands";
import Slider from "../../Components/Sliders/Slider";
import { useEffect, useState } from "react";
import Phone from "../../Components/Phones/Phone";



const Home = () => {
    const brands = useLoaderData()


    const [phonesData, setPhonesData] = useState([]);
    
  
    useEffect(() => {
      fetch(`https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/brands`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => {
          const sortedData = data.sort((a, b) => b.rating - a.rating);
          const top3Phones = sortedData.slice(0, 3);
  
          setPhonesData(top3Phones);
        
        })
        .catch((error) => {
          console.error("Error fetching phone data:", error);
        });
    }, []);

















    const show = false;


    const homeSlider = {
       img1 : "https://www.phonedaddy.com/cdn/shop/files/NewWholesaleBanner-33.jpg?v=1673903469&width=1600",
       img2 : "https://www.phonedaddy.com/cdn/shop/files/Clearance_banner1a.gif?v=1677516141&width=1600",
       img3: "https://www.phonedaddy.com/cdn/shop/files/100phones_HomepageBanner-02_9c3c96c9-0667-4ce7-92d0-593f5c315f8d.jpg?v=1697739137&width=1600"
    }
 
    return (
        <div className="mx-auto max-w-screen-xl">
           
           
           <div className="flex justify-center w-full">
           <Banner></Banner>
           </div>
           <div>
             <Brands brands={brands}></Brands>
           </div>
           <div className="my-32">
             <h2 className="text-center my-16 font-extrabold text-2xl md:text-5xl italic">HOTTEST <span className="text-red-500">DEALS</span></h2>
             <Slider filteredBrands={homeSlider}></Slider>
           </div>
           <div>
           <h2 className="text-center my-16 font-extrabold text-2xl md:text-5xl italic">TOP RATED <span    className="text-red-500">PRODUCTS</span></h2>
           <div className="grid  gap-8  md:grid-cols-2 lg:grid-cols-3 my-32">
            {
              phonesData.map((phone,idx) => <Phone key={idx} phone={phone}  show={show}></Phone>)
            }
           </div>
           </div>
            
        </div>
    );
};

export default Home;