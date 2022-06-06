import React, { useState } from "react";
import "./product.css"

const Product = (user) => {
  const [count,setcount]=useState(0)
  
  return (
    <div className="innerbox" >
    <div data-cy={`product-${user.id}`}>
      <h3 data-cy="product-name">{user.user.name}</h3>
      <h6 data-cy="product-description">{user.user.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add To Cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button" onClick={()=>setcount(count+1)}>+</button>
        <span data-cy="product-count">
          
            {count}
          
        </span>
        <button data-cy="product-decrement-cart-item-count-button" onClick={()=>setcount(count-1)}>-</button>
        <button data-cy="product-remove-cart-item-button">Remove from Cart</button>
      </div>
    </div>
    </div>
  );
};

export default Product;