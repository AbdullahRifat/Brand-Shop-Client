/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    return (
        <div className="rounded-lg border border-base-200 bg-base-200 p-6 mx-auto flex flex-col items-center ">
            
            <img src={brand.logo} alt={brand.name} className="h-32 w-32 mx-auto" />
            <div className="p-6">
                <h2 className="text-xl font-semibold text-center">{brand.name}</h2>
            </div>
             <Link to={`/${brand.name}`}><button className="btn">explore</button></Link>
        </div>
    
             
      
    );
};
//brand_shop
//2dXbUCorQsd0yBok

export default Brand;