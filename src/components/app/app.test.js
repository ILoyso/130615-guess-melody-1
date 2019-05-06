import React from 'react';
import renderer from 'react-test-renderer';

import App from './app.jsx';


const settings = {
  errorCount: 5,
  gameTime: 8
};

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      errorCount={settings.errorCount}
      gameTime={settings.gameTime}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
