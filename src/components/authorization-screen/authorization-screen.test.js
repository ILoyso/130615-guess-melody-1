import React from 'react';
import renderer from 'react-test-renderer';

import AuthorizationScreen from './authorization-screen.jsx';


it(`AuthorizationScreen correctly renders`, () => {
  const authorizationScreen = renderer
    .create(<AuthorizationScreen />).toJSON();

  expect(authorizationScreen).toMatchSnapshot();
});
