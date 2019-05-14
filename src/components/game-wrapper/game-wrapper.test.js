import React from 'react';
import renderer from 'react-test-renderer';

import GameWrapper from './game-wrapper.jsx';


it(`ArtistQuestionScreen correctly renders`, () => {
  const gameWrapper = renderer
    .create(<GameWrapper
      game={<div>Some mock template</div>}
      gameType="genre"
    />)
    .toJSON();

  expect(gameWrapper).toMatchSnapshot();
});
