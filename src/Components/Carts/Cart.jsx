/* eslint-disable react/prop-types */


const Cart = ({phone}) => {

    const {_id,name,price,image} = phone

    const handleDeleteCartItem = () => {
   
        fetch(`http://localhost:5000/phones/mycart/delete/${_id}`, {
          method: "DELETE",
        })
        .then(response=> response.json())
        .then(data=>console.log(data))
        
  
        
    };
    return (
        <div  className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-32" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold text-xl">{price}$</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={handleDeleteCartItem}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
};

export default Cart;