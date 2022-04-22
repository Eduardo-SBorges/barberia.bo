import React from 'react';
import PropTypes from 'prop-types';
import './Title.scss';

const renderSwitch = (template, text) => {
  switch (template) {
    case 'hero':
      return <h1 className='title-hero'>{text}</h1>;
    case 'sections':
      return <h2 className='title-sections'>{text}</h2>;
    case 'prices':
      return <h2 className='title-prices'>{text}</h2>;
    case 'avatar':
      return <h3 className='title-avatar'>{text}</h3>;
    case 'login':
      return <h4 className='title-login'>{text}</h4>;
    case 'login-head':
      return <h4 className='title-login-head'>{text}</h4>;
    case 'home':
      return <h2 className='title-home'>{text}</h2>;
    case 'header':
      return <h1 className='title-header'>{text}</h1>;
    case 'login-mobile':
      return <h1 className='title-login-mobile'>{text}</h1>;
  }
};

const Title = ({ template, text }) => {
  return <>{renderSwitch(template, text)}</>;
};

Title.propTypes = {
  template: PropTypes.oneOf([
    'home',
    'sections',
    'prices',
    'avatar',
    'login',
    'login-head',
    'login-mobile',
    'header',
    'hero',
  ]),
  text: PropTypes.string,
};

Title.defaultProps = {
  template: 'hero',
  text: 'Placeholder',
};

export default Title;
