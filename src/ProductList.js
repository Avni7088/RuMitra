// src/ProductList.js
import React, { useState } from 'react';
import products from './products';
import RentForm from './RentForm';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRentClick = (product) => {
    setSelectedProduct(product);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Available: {product.available} units</p>
            <button onClick={() => handleRentClick(product)}>Rent</button>
          </li>
        ))}
      </ul>
      {selectedProduct && <RentForm product={selectedProduct} />}
    </div>
  );
};

export default ProductList;
