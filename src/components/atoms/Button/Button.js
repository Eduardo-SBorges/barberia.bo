import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const renderSwitch = (template, placeholder) => {
  switch (template) {
    case 'small':
      return <button className='btn-small'>{placeholder}</button>;
    case 'large':
      return <button className='btn-large'>{placeholder}</button>;
    case 'blue':
      return <button className='btn-small btn-blue'>{placeholder}</button>;
    case 'red':
      return <button className='btn-small btn-red'>{placeholder}</button>;
    case 'login-mobile':
      return <button className='btn-login-mobile'>{placeholder}</button>;
    default:
      return null;
  }
};

const Button = ({ template, placeholder }) => {
  return <>{renderSwitch(template, placeholder)}</>;
};

Button.propTypes = {
  template: PropTypes.oneOf(['small', 'large', 'blue', 'red', 'login-mobile']),
  placeholder: PropTypes.string,
};

Button.defaultProps = {
  template: 'small',
  placeholder: 'Button',
};

export default Button;
