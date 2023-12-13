import React from 'react';
import '../../../styles/Titles.css';

const CardButtonFilterPages = ({ img, text,icon }) => {
  return (
    <div>
      <button className="card-button-pages my-2" >
          <div className="row "> {/* Cambiado a "no-gutters" para evitar márgenes internos */}
            <div className="col-3 mt-1 pr-3">
              <img src={img} alt="interest icon"></img>
            </div>
            <div className="col-6 mt-2 ml-0">
                {text}&#160;&#160;{'X'}
            </div>
          </div>
      </button>
    </div>
  );
};


export default CardButtonFilterPages;
