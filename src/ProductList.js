// src/ProductList.js
import React, { useState } from 'react';
import Product from './Product'; // Assuming this is the correct path to your Product component

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', description: 'Description 1', price: 50 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 75 },
    // Add more products as needed
  ]);

  const handleRentClick = (product) => {
    // Implement logic for handling rent button click
    console.log(`Rent button clicked for product with id ${product.id}`);
  };

  return (
    <div>
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <Product {...product} onRentClick={handleRentClick} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
