import React from 'react';
import PropTypes from 'prop-types';
import {} from '../../styles/Header.css';

const HeaderPages = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="img" style={{ width: '1440px' }} />
    </div>
  );
}

HeaderPages.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default HeaderPages;

