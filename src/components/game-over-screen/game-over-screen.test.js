import React from 'react';
import renderer from 'react-test-renderer';

import GameOverScreen from './game-over-screen.jsx';


it(`GameOverScreen correctly renders`, () => {
  const gameOverScreen = renderer
    .create(<GameOverScreen
      onRelaunchButtonClick={jest.fn()}
    />).toJSON();

  expect(gameOverScreen).toMatchSnapshot();
});
