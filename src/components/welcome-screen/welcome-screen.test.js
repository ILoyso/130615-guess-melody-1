import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';


const settings = {
  errorCount: 5,
  onPlayClick: jest.fn(),
  time: 8
};

it(`WelcomeScreen correctly renders`, () => {
  const welcomeScreen = renderer
    .create(<WelcomeScreen
      errorCount={settings.errorCount}
      onPlayClick={settings.onPlayClick}
      time={settings.time}
    />)
    .toJSON();

  expect(welcomeScreen).toMatchSnapshot();
});
