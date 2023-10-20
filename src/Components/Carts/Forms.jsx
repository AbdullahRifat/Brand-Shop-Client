/* eslint-disable react/prop-types */


function Forms({ onFormSubmit,phone,show }) {
  console.log(show)

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // Convert formData to an object
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });


    onFormSubmit(formObject);
    // You can implement the logic to send the formObject to your server here
    // For example, using fetch or an Axios post request
    // Remember to handle validation and submission accordingly

    // After adding the product, you can clear the form fields by resetting the form

  };

  return (
    <div >
  
      <div >
        <form className="grid mx-auto gap-8  " id="productForm" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="brand" className="mr-4">Brand Name:</label>
            <select className="bg-gray-200 border-collapse"
              id="brand"
              name="brand"
              defaultValue={phone.brand}
            >
              <option value="samsung">Samsung</option>
              <option value="apple">Apple</option>
              <option value="realme">Realme</option>
              <option value="google">Google</option>
              <option value="oneplus">OnePlus</option>
              <option value="xiaomi">Xiaomi</option>
            </select>
          </div>
          <div>
            <label htmlFor="type">Type:</label>
            <input className="w-full  bg-gray-200 border-collapse"
              type="text"
              id="type"
              name="type"
              required
              defaultValue={phone.type}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input className="w-full  bg-gray-200 border-collapse"
              type="text"
              id="image"
              name="image"
              required
              defaultValue={phone.image}
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input className="w-full  bg-gray-200 border-collapse"

              type="text"
              id="name"
              name="name"
              required
              defaultValue={phone.name}
            />
          </div>

          <div>
            <label htmlFor="price">Price:</label>
            <input className="w-full  bg-gray-200 border-collapse"
              type="number"
              id="price"
              name="price"
              step="0.01"
              required
              defaultValue={phone.price}
            />
          </div>
          {
            show&&<div>
            <label htmlFor="description">Short Description:</label>
            <textarea
              className="w-full bg-gray-200 bor"
              id="description"
              name="description"
              required
              defaultValue={phone.description}
            ></textarea>
          </div>
          }
          <div>
            <label htmlFor="rating">Rating:</label>
            <select className="w-full bg-gray-200 border-collapse" id="rating" name="rating" required
            defaultValue={phone.rating}>
              <option value="" disabled>Select a rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div>
            <button type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forms;
