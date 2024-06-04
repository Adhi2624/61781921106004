// Product.js

import React from 'react';
import { useLocation } from 'react-router-dom';

function Product() {
  const location = useLocation();
  const { product } = location.state;
  console.log(product)
  console.log(location)

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <p>Company: {product.company}</p>
      <p>Price: ${product.price}</p>
      <p>Availability: {product.availability}</p>
      {/* Add other product details as needed */}
    </div>
  );
}

export default Product;
