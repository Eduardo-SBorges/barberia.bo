import React from 'react';
import PropTypes from 'prop-types';

const renderSwitch = (template, text) => {
  switch (template) {
    case 'hero':
      return <p className='title-hero'>{text}</p>;
    case 'sections':
      return <p className='title-sections'>{text}</p>;
    case 'prices':
      return <p className='title-prices'>{text}</p>;
    case 'login':
      return <p className='title-login'>{text}</p>;
  }
};

const Text = ({ template, text }) => {
  return <>{renderSwitch(template, text)}</>;
};

Text.propTypes = {
  template: PropTypes.oneOf(['hero', 'sections', 'prices', 'login']),
  text: PropTypes.string,
};

Text.defaultProps = {
  template: 'prices',
  text: 'Some text...',
};

export default Text;
