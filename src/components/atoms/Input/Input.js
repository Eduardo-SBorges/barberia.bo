import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const renderSwitch = (
  template,
  label,
  type,
  id,

  placeholder,
  isRequired,
) => {
  switch (template) {
    case 'landing-input':
      return (
        <div className='landing-input'>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={isRequired}
          />
        </div>
      );
    case 'schedule':
      return (
        <div className='schedule'>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            placeholder={placeholder}
            required={isRequired}
          />
        </div>
      );
    case 'textarea':
      return (
        <div className='textarea'>
          <label htmlFor={id}>{label}</label>
          <textarea
            type={type}
            id={id}
            placeholder={placeholder}
            required={isRequired}
          />
        </div>
      );
    default:
      return null;
  }
};

const Input = ({ template, label, type, id, placeholder, isRequired }) => {
  return (
    <>{renderSwitch(template, label, type, id, placeholder, isRequired)}</>
  );
};

Input.propTypes = {
  template: PropTypes.oneOf(['landing-input', 'schedule', 'textarea']),
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  isRequired: PropTypes.bool,
};

Input.defaultProps = {
  template: 'landing-input',
  label: 'Some label...',
  type: 'text',
  placeholder: 'Some placeholder...',
  isRequired: false,
};
export default Input;
