import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
  //console.log(cart);
  let totalPrice = 0;
  let tax = 0;
  let shippingCharge = 0;
  for (const product of cart) {
    totalPrice+=(product.price * product.quantity);
    shippingCharge+=product.shipping;

  }
  tax = (totalPrice * 0.1).toFixed(2) ;
  tax = parseFloat(tax);
  const grandTotal = shippingCharge + totalPrice + tax;

  const selectedItems = cart.reduce((total,item) => { 
    return total+item.quantity;
   },0)
   //console.log(selectedItems);

  return ( 
    <div>
      <h2>Order Summary</h2>
      <div className='orderInfo'>
      <p>Selected Items : {selectedItems} </p>
      <p>Total Price : $ {totalPrice}</p>
      <p>Shipping Charge : $ {shippingCharge} </p>
      <p>Tax : $ {tax}</p>
      <h4>Grand Total : $ {grandTotal} </h4>
      </div>

    </div>
  );
};

export default Cart;