import React from 'react';
import renderer from 'react-test-renderer';

import Mistakes from './mistakes.jsx';


const mistakesMock = 2;

it(`Mistakes correctly renders`, () => {
  const mistakes = renderer
    .create(<Mistakes
      mistakes={mistakesMock}
    />)
    .toJSON();

  expect(mistakes).toMatchSnapshot();
});
