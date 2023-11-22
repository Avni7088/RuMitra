// src/Home.js
import React from 'react';
import Product from './Product.js'; // Adjust the path as needed

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Tractor',
      description: 'Powerful farming tractor for various tasks.',
      price: 100,
    },
    {
      id: 2,
      name: 'Harvester',
      description: 'Efficient harvester for crop collection.',
      price: 150,
    },
    // Add more products as needed
  ];

  const handleRentClick = (productId) => {
    // Implement logic for handling rent button click
    console.log(`Rent button clicked for product with id ${productId}`);
  };

  return (
    <div>
      <h2>Home Page</h2>
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

export default Home;
