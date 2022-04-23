import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const renderSwitch = (template, src, alt) => {
  switch (template) {
    case 'normal':
      return (
        <div>
          <img src={src} alt={alt} />
        </div>
      );
    case 'circle':
      return (
        <div className='circle'>
          <img src={src} alt={alt} />
        </div>
      );
    default:
      return null;
  }
};

const Avatar = ({ template, src, alt }) => {
  return <>{renderSwitch(template, src, alt)}</>;
};

Avatar.propTypes = {
  template: PropTypes.oneOf(['normal', 'center', 'circle']),
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  template: 'normal',
  src: '',
  alt: 'Human Picture',
};

export default Avatar;
