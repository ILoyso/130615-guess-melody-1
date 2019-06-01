import React from 'react';
import renderer from 'react-test-renderer';

import WinScreen from './win-screen.jsx';


it(`WinScreen correctly renders`, () => {
  const winScreen = renderer
    .create(<WinScreen
      mistakes={2}
      onReplayButtonClick={jest.fn()}
    />).toJSON();

  expect(winScreen).toMatchSnapshot();
});
