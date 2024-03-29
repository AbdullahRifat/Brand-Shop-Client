// import { useState } from 'react';
// import Forms from './Forms';
// import Swal from 'sweetalert2'

// const Addcarts = () => {
//   const [newPhone, setNewPhone] = useState({});

//   const handleFormSubmit = (formData) => {
//     setNewPhone(formData);

//     // Send the form data to the server
//     fetch('https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // Handle the server response if needed
//         if(data.insertedId>0){
//           Swal.fire({
//             position: 'top-center',
//             icon: 'success',
//             title: 'Product Added Successfully',
//             showConfirmButton: false,
//             timer: 1500
//           })
//         }
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the fetch request
//         console.error('Error:', error);
//       });
//   };

//   return (
//     <div className=" mx-auto max-w-screen-xl">
//       <Forms onFormSubmit={handleFormSubmit} />
//     </div>
//   );
// };

// export default Addcarts;

import Forms from './Forms';
import Swal from 'sweetalert2';

const Addcarts = () => {
 

  const handleFormSubmit = (formData) => {


    // Send the form data to the server
    fetch('https://brand-shop-server-phppsd3yj-rifats-projects-4eb32e1a.vercel.app/phones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        
       if (data.insertedId ) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Added Successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error);
      });
  };
  const show = true
  const phone = {}

  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="text-4xl font-bold text-center my-16">Add Product</h2>
      <Forms onFormSubmit={handleFormSubmit} phone={phone} show={show}  />
    </div>
  );
};

export default Addcarts;

