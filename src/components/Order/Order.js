import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../addToDb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Order = () => {
  const initialCart = useLoaderData();
  const [cart,setCart] = useState(initialCart)
 

  const handleRemoveItem=(id)=> {
 const rest = cart.filter(product=>product.id !== id)
 setCart(rest);
 removeFromDb(id);

  }

  return (
    <div className='shop-container'>
      <div className='order-container'>
        
        {
           cart.map(pd=><ReviewItem key={pd.id} pd={pd} handleRemoveItem={handleRemoveItem}></ReviewItem>)
        }

       'mim' 
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>j
      </div>
    </div>
  );
};

export default Order;