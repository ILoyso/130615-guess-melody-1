import React from 'react';
import renderer from 'react-test-renderer';

import WelcomeScreen from './welcome-screen.jsx';


const settings = {
  errorCount: 5,
  time: 8,
  onPlayClick: jest.fn()
};

it(`WelcomeScreen correctly renders`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      errorCount={settings.errorCount}
      onPlayClick={settings.onPlayClick}
      time={settings.time}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
