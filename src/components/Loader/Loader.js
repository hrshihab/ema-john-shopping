import React from 'react';
import { getStoredDb } from '../../addToDb';

const Loader = async() => {
const productData = await fetch('products.json');
const products = await productData.json();

const savedcart = getStoredDb();
const newCart = [];
//console.log(savedcart);
for(const id in savedcart)
{
  const addedProduct = products.find(pd=> pd.id === id);
  if(addedProduct){
    const quantity = savedcart[id];
    addedProduct.quantity = quantity;
    newCart.push(addedProduct);
  }
    
  
}
return newCart;

};

export default Loader;