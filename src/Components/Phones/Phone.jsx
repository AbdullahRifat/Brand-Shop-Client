/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { Rating, RoundedStar } from "@smastrom/react-rating";
const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#F02757',
    inactiveFillColor: '#fecdd3'
  }


const Phone = ({phone,show}) => {
    const {_id,brand,name,image,rating,type,price} = phone
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure >
                <img src={image} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-xl">{brand}</h2>
                <p className="font-bold text-sm">TYPE : {type}</p>
                <p className="font-bold text-sm">MODEL : {name}</p>
                <p className="font-bold text-sm">PRICE : {price}$</p>
                <Rating style={{ maxWidth: 150 }} value={parseInt(rating)} itemStyles={myStyles}></Rating>
                <div className="card-actions">
                  <Link to={`/${brand}/${_id}`}><button className="btn btn-primary">Details</button></Link>
                  {show&&<Link to={`/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Phone;