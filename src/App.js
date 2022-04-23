import React from 'react';
import { Button, Title, Text, Input, Avatar } from './components/atoms';
import { leftImage, rightImage, centerImage, madruga } from './assets/images';
import './assets/reset.scss';
import './assets/global.scss';

const App = () => {
  return (
    <div>
      <Avatar src={leftImage} alt='Left Image' />
      <Avatar template='circle' src={madruga} alt='Left Image' />
      <Avatar src={centerImage} alt='Left Image' />
      <Avatar src={rightImage} alt='Left Image' />
    </div>
  );
};

export default App;
