import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({pd,handleRemoveItem}) => {
  const {name,price,shipping,img,quantity,id} = pd;

  return (
    <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p><small>Price: ${price}</small></p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-container">
                <button onClick={() => handleRemoveItem(id)} >
                      boom  
                    </button>
                </div>
            </div>
        </div>
  );
};

export default ReviewItem;