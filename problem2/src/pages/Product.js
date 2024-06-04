import React from 'react';
import { useLocation } from 'react-router-dom';

function Product() {
  // Get the location object
  const location = useLocation();

  // Check if location state exists and has the product property
  if (!location.state || !location.state.product) {
    return <div>No product found</div>;
  }

  // Destructure the product property
  const { product } = location.state;

  // Render the product details
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.company}</p>
      <p>${product.price}</p>
      {/* Add more product details here */}
    </div>
  );
}

export default Product;
