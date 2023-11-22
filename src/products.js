// src/Product.js
import React from 'react';

const Product = ({ id, name, description, price, onRentClick }) => {
  return (
    <div className="card">
      {/* Assume you have product images in a 'public/images' folder */}
      <img
        src={`/images/product${id}.jpg`}
        className="card-img-top"
        alt={name}
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Price: ${price}</p>
        <button className="btn btn-primary" onClick={() => onRentClick(id)}>
          Rent
        </button>
      </div>
    </div>
  );
};

export default Product;
