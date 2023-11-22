// src/RentForm.js
import React, { useState } from 'react';

const RentForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const handleRent = () => {
    // Implement the logic for renting the product (e.g., update available quantity)
    console.log(`Rent ${quantity} units of ${product.name}`);
  };

  return (
    <div>
      <h2>Rent Form</h2>
      <p>{product.name}</p>
      <p>Price: ₹{product.price}</p>
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
