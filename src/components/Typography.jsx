import React from 'react';
import PropTypes from 'prop-types';

const Typography = ({ variant = 'paragraph', children, className = '' }) => {
  const classes = `typography ${variant} ${className}`.trim();
  return <div className={classes}>{children}</div>;
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['heading', 'subheading', 'label', 'paragraph', 'caption']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Typography;
