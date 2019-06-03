import React from 'react';
import renderer from 'react-test-renderer';

import AuthorizationScreen from './authorization-screen.jsx';


it(`AuthorizationScreen correctly renders`, () => {
  const authorizationScreen = renderer
    .create(<AuthorizationScreen
      logIn={jest.fn()}
      name={`Test Name`}
      onChange={jest.fn()}
      password={`test-test`}
    />).toJSON();

  expect(authorizationScreen).toMatchSnapshot();
});
