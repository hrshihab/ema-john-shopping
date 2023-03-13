import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import Main from './components/Main.js/Main';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import Error from './Error/Error';


const App = () => {
  console.log('bidi');
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      errorElement:<Error></Error>,
      children:[
        
        
          {path:'/home',
          loader:() => fetch('products.json'),
          element:<Shop></Shop>},
         { path:'/',
          loader:() => fetch('products.json'),
          element:<Shop></Shop>,},
  
        {
          path:'/order',
          loader:Loader,
          element:<Order></Order>
        }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;