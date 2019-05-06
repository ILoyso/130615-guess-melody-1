import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';


const settings = {
  gameTime: 8,
  errorCount: 5,
  onPlayClick: jest.fn()
};

it(`WelcomeScreen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      time={settings.gameTime}
      errorCount={settings.errorCount}
      onPlayClick={settings.onPlayClick}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
