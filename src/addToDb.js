function addToDb(id) {
  const shoppingCart = getStoredDb();
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else shoppingCart[id] = 1;

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}
function getStoredDb() {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

const removeFromDb=(id)=>{
const shoppingCart = getStoredDb();
if(id in shoppingCart){
  delete shoppingCart[id];
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));


}
}
const deleteCart = () => {
  localStorage.removeItem('shopping-cart');
}

export { addToDb, getStoredDb,removeFromDb,deleteCart };
