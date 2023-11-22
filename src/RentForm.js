// src/RentForm.js
import React, { useState } from 'react';

const RentForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleRent = () => {
    // Implement the logic for renting the product (e.g., update available quantity)
    console.log(`Rent rs{quantity} units of rs{product.name}`);
  };

  return (
    <div>
      <h2>Rent Form</h2>
      <p>{product.name}</p>
<<<<<<< HEAD
      <p>Price: ₹{product.price}</p>
=======
      <p>Price: rs{product.price}</p>
>>>>>>> 24bec92b94dd9cd668fdf6bc11637f7f7e19203b
      <p>Available: {product.available} units</p>
      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        min="1"
        max={product.available}
      />
      <button onClick={handleRent}>Rent</button>
    </div>
  );
};

export default RentForm;
