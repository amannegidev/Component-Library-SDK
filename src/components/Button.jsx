import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

export default Button;
