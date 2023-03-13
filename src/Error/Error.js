import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from '../components/Header/Header';

const Error = () => {
  const error = useRouteError();
  //console.log(error.statusText);
  return (
    <div>
      <Header></Header>
    <div style={{display:'grid',alignItems:'center',justifyContent:'center'}}>
      
      <h1>Opps!</h1>
      <p>Sorry,Unexpected Error !!</p>
      <p>
      <i>{ error.statusText || error.message}</i>
      </p>
      
    </div>
    </div>

  );
};

export default Error;