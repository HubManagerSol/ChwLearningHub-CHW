import React from 'react';
import "../style/card1.css";

function Card(props) {

  const { title,  imageUrl } = props;


  const handleClick = () => {
 
    console.log('Clic en la tarjeta');
  };

  return (
    <div id="card1H" className="card1H" onClick={handleClick}>
      <div className='col-12'>
        <img src={imageUrl} alt={title} />
      </div>
      <div className='col-12'>
       <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Card;
