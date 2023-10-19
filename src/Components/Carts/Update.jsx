import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Forms from './Forms';

const UpdateCarts = () => {
  const phone = useLoaderData();
  const { _id } = phone; // Change _id to modifiedID

  const handleFormSubmit = (formData) => {
    // Send the form data to the server for updating (PUT request)
    fetch(`http://localhost:5000/update/${_id}`, { // Change _id to modifiedID
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the server response if needed
        if (data.modifiedCount>0) {
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Product Updated Successfully',
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

  return (
    <div className="mx-auto max-w-screen-xl">
      <Forms onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default UpdateCarts;
