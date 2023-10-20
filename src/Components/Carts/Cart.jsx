/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const Cart = ({phone}) => {

    const {_id,name,price,image} = phone

    const handleDeleteCartItem = () => {

      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones/mycart/delete/${_id}`, {
            method: "DELETE",
          })
          .then(response=> response.json())
          .then(data=>{
           
            if (data.deletedCount>0) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
          .then(()=>{
            location.reload();
          })
          
        }
      })


   
      
        
  
        
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