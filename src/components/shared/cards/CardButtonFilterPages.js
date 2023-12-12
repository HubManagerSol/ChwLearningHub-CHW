import React from 'react';
import '../../../styles/Titles.css';
import Close from "./utils/icons/Close.svg";

const CardButtonFilterPages = ({ img, text,icon }) => {
  return (
    <div>
      <button className="card-button-pages my-2" >
          <div className="row "> {/* Cambiado a "no-gutters" para evitar márgenes internos */}
            <div className="col-4 mt-2 pr-0">
              <img src={img} alt="interest icon"></img>
            </div>
            <div className="col-2 mt-4 px-0">
              <div className="row">
                <p className='text-card-button'>{text}</p>
              </div>
            </div>
            <div className="col-1 ml-2 mt-4">
                <img src={Close} alt="next icon"></img>
            </div>
          </div>
      </button>
    </div>
  );
};


export default CardButtonFilterPages;
