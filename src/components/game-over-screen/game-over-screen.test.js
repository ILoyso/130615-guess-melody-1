import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import GameOverScreen from './game-over-screen.jsx';


it(`GameOverScreen correctly renders`, () => {
  const gameOverScreen = renderer
    .create(<BrowserRouter>
      <GameOverScreen
        onRelaunchButtonClick={jest.fn()}
      />
    </BrowserRouter>).toJSON();

  expect(gameOverScreen).toMatchSnapshot();
});
