import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';


const settings = {
  gameTime: 8,
  errorCount: 5
};

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      gameTime={settings.gameTime}
      errorCount={settings.errorCount}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
