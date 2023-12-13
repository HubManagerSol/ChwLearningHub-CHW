import React from 'react';
import '../style/404Page.css'; 
import Menu from '../components/menu';
import BackG2 from "../img/backG2.png"
import "../pages/home.css"
import Footer from '../components/footer';
const Error404 = () => {
  return (
<div className='imgFooter404'>
      <Menu />
      <img className='img404' src={BackG2}></img>
    <div className="error-container">
      
      <h1>404 - Page not found</h1>
      <p className='e404Text'>SORRY!! This section is under maintenance</p>
    </div>
    <div className='imgFooter404'>
    
         </div>
         <div className='Footer404Cont'>
         <Footer />
         </div>
   
   </div>
  );
};

export default Error404;
