// import { useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Swal from "sweetalert2";



// const PhoneDetails = () => {

//     const[newphone,setNewPhone] = useState({})
  
//     const phone = useLoaderData()
//     const handlecart = (phone) => {
      
      
     
//           setNewPhone({
//             ...newphone,
//             brand: phone.brand,
//             type: phone.type,
//             image: phone.image,
//             name: phone.name,
//             price: phone.price,
//             description: phone.description,
//             rating: phone.rating,
//           });
          
    
//         // Send the form data to the server
//         fetch('https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones/addtocart', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(newphone),
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             // Handle the server response if needed
//             console.log(newphone)
//             if(data.insertedId){
//               Swal.fire({
//                 position: 'top-center',
//                 icon: 'success',
//                 title: 'Product Added Successfully',
//                 showConfirmButton: false,
//                 timer: 1500
//               })
//             }else{
//                 Swal.fire({
//                     position: 'top-center',
//                     icon: 'error',
//                     title: 'Product could not be inserted',
//                     showConfirmButton: false,
//                     timer: 1500
//                   })
//             }
//           })
//           .catch((error) => {
//             // Handle any errors that occur during the fetch request
//             console.error('Error:', error);
//           });
//       };
   
   

//     return (
//         <div className="hero min-h-screen bg-base-200">
//   <div className="hero-content flex-col lg:flex-row">
//     <img src={phone.image} className="max-w-sm rounded-lg shadow-2xl" />
//     <div>
//       <h1 className="text-5xl font-bold">{phone.name}</h1>
//       <div className="md:w-44"><p className="py-6">{phone.description}</p></div>
//       <button onClick={()=>handlecart(phone)} className="btn btn-primary">Add to Cart</button>
//     </div>
//   </div>
// </div>
//     );
// };

// export default PhoneDetails;

import  { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

import { Rating, RoundedStar } from "@smastrom/react-rating";
const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#F02757',
    inactiveFillColor: '#fecdd3'
  }


const PhoneDetails = () => {
  // const [newphone, setNewPhone] = useState({
  //   brand: "",
  //   type: "",
  //   image: "",
  //   name: "",
  //   price: 0,
  //   description: "",
  //   rating: 0,
  // });

  const phone = useLoaderData();
  const {brand, type, image, name, price, description, rating} = phone
  const newphone = {brand, type, image, name, price, description, rating}
  const handlecart = () => {
    // setNewPhone(() => {
    //   return {
        
    //     brand: phone.brand,
    //     type: phone.type,
    //     image: phone.image,
    //     name: phone.name,
    //     price: phone.price,
    //     description: phone.description,
    //     rating: phone.rating,
    //   };
    // });

    // Send the form data to the server
    fetch("https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones/addtocart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newphone),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(newphone);
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Product could not be inserted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={phone.image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{phone.brand}</h1>
          <h1 className="text-2xl font-bold">{phone.type}</h1>
          <h1 className="text-2xl font-bold">{phone.name}</h1>
          <Rating style={{ maxWidth: 150 }} value={parseInt(phone.rating)} itemStyles={myStyles}></Rating>
                <div className="card-actions"></div>
          <div className="md:w-44">
            <p className="py-6">{phone.description}</p>
          </div>
          <button onClick={() => handlecart(phone)} className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneDetails;
