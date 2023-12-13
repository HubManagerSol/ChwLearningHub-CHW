import React from 'react';
import "./styles/Card.css"
import Button from '../buttons/Button';
const ReadCard = ({ img, title, subtitle, text }) => {
    const handleClick = () => {
        console.log('Click')
      };
  return (
    <div className='row read-card'>
        <div className='col-6 px-0'>
            <img src={img} alt="img" style={{ width: '708px', height:"371px" }} />
        </div>
        <div className='col-5'>
            <h4 className='title'>{title}</h4>
            <h5 className='subtitle mt-3'>{subtitle}</h5>
            <p className='mt-4'>{text}</p>
            <Button text={'Read Overview'}  onClick={handleClick}/>
        </div>
    </div>
  );
};

export default ReadCard;
