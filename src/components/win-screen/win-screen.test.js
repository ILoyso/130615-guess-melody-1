import React from 'react';
import renderer from 'react-test-renderer';
import {BrowserRouter} from 'react-router-dom';

import WinScreen from './win-screen.jsx';


it(`WinScreen correctly renders`, () => {
  const winScreen = renderer
    .create(<BrowserRouter>
      <WinScreen
        mistakes={2}
        onReplayButtonClick={jest.fn()}
      />
    </BrowserRouter>).toJSON();

  expect(winScreen).toMatchSnapshot();
});
