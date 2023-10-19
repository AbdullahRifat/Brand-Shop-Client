/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Phone = ({phone}) => {
    const {_id,brand,name,image} = phone
    return (
        <div className="card w-auto bg-base-100 shadow-xl">
            <figure >
                <img src={image} alt="Shoes" className="rounded-xl h-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{brand}</h2>
                <p>{name}</p>
                <div className="card-actions">
                  <Link to={`/${brand}/${_id}`}><button className="btn btn-primary">Details</button></Link>
                  <Link to={`/update/${_id}`}><button className="btn btn-primary">Edit</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Phone;