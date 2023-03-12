import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = ({handleAddToCart,product}) => {
  
  // const product = props.product;
  // const handleAddToCart = props.handleAddToCart;
  const {name,price,quantity,shipping,img} = product;
  
  return (
    <div className='product-container'>
      <img src={img} alt="" />

      <div className='info'>
      <h6>{name}</h6>
      <h4>Price: ${price}</h4>
      <p>Shipping : ${shipping}</p>
      </div>
      <button onClick={()=>handleAddToCart(product)}>Add to Cart   <FontAwesomeIcon icon={faShoppingCart} /></button>
      
    </div>
  );
}; 

export default Product;