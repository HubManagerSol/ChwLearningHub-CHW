import React from 'react';
import './styles/CustomCheckbox.css'; // Import your custom CSS file

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox">
          <div className='col-2'>
            <input
              type="checkbox"
              // checked={checked}
              onChange={onChange}
              className="form-check-input"
            />
          </div>
          <div className='col-10 mt-1'>
            {label}

      </div>
    </label>
  );
};

export default Checkbox;