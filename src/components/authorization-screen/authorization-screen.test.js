import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import AuthorizationScreen from './authorization-screen.jsx';


it(`AuthorizationScreen correctly renders`, () => {
  const authorizationScreen = renderer
    .create(<BrowserRouter>
      <AuthorizationScreen
        logIn={jest.fn()}
        name={`Test Name`}
        onChange={jest.fn()}
        password={`test-test`}
      />
    </BrowserRouter>).toJSON();

  expect(authorizationScreen).toMatchSnapshot();
});
