import React from 'react';
import renderer from 'react-test-renderer';

import GameWrapper from './game-wrapper.jsx';


it(`GameWrapper correctly renders`, () => {
  const gameWrapper = renderer
    .create(<GameWrapper
      game={<div>Some mock template</div>}
      gameType="genre"
      mistakes={1}
    />)
    .toJSON();

  expect(gameWrapper).toMatchSnapshot();
});
