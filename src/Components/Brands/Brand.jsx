/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Brand = ({brand}) => {
    return (
        <div className="flex flex-col h-46  ">
            <p>{brand.name}</p>
            <img className="w-20" src={brand.logo} alt="" />
             <Link to={`/${brand.name}`}><button className="btn">explore</button></Link>
        </div>
    );
};
//brand_shop
//2dXbUCorQsd0yBok

export default Brand;