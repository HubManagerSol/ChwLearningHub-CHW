import React from 'react';
import '../../../styles/Titles.css';
import Chevron from "./utils/icons/Chevron.svg";

const InterestCard = ({ img, text,icon }) => {
  return (
    <div>
      <button className="card-button my-2" style={{ width: "430px", height: '90px', borderRadius: '5px', borderColor: '#C6CAD0' }} >
       
          <div className="row no-gutters"> {/* Cambiado a "no-gutters" para evitar márgenes internos */}
            <div className="col-4 mt-2 pr-0">
              <img src={img} alt="interest icon"></img>
            </div>
            <div className="col-6 mt-4 px-0">
              <div className="row">
                <p className='interest-text'>{text}</p>
              </div>
            </div>
            <div className="col-1 ml-2 mt-3">
                <img src={Chevron} alt="next icon"></img>
            </div>
          </div>
      </button>
    </div>
  );
};

export default InterestCard;
