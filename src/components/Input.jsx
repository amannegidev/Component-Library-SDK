import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, placeholder, type = 'text', value, onChange, name }) => {
  return (
    <div className="input-group">
      {label && <label className="input-label" htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Input;
