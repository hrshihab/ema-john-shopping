import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredDb } from '../../addToDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
  // const [products,setProducts] = useState([]);
  const products = useLoaderData();
  const [cart,setCart] = useState([]);
  // useEffect(()=> {
  //   //console.log('fetching start');
  //   fetch('products.json')
  //   .then(res => res.json())
  //   .then(data => 
  //     {setProducts(data)
  //     //console.log('product loaded',products)
  //   })
  // },[])

  useEffect(()=> {
    //console.log('data storage',products);
    const storedCart = getStoredDb();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find(product=>product.id===id)
      if(addedProduct){
          const quantity = storedCart[id];
          addedProduct.quantity = quantity;
          savedCart.push(addedProduct);

      }
    }
    setCart(savedCart);
    //console.log('end storage');
  },[products])



  const handleAddToCart =(selectedProduct) => {
      let newCart = [];
      const exist = cart.find(product=> product.id === selectedProduct.id)
      //console.log(selectedProduct===exist);
      if(!exist)
      {
        selectedProduct.quantity = 1;
        newCart = [...cart,selectedProduct];
      }
      else{

        const rest = cart.filter(product=>product.id !== selectedProduct.id);
        exist.quantity = exist.quantity + 1;
        newCart = [...rest,exist];
      }

      setCart(newCart);
      console.log(cart);
      addToDb(selectedProduct.id);
  }
  return (
    <div className='shop-container'>
      <div className='products-container'>
        {
          products.map(product=> <Product
          key={product.id} 
          handleAddToCart = {handleAddToCart} 
          product={product}
          ></Product>)
        }
      </div>
      <div className='cart-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;