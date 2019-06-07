import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GameOverScreen from './game-over-screen.jsx';


Enzyme.configure({adapter: new Adapter()});


it(`Click on play again button correctly works`, () => {
  const onRelaunchButtonClick = jest.fn();

  const gameOverScreen = shallow(<GameOverScreen
    onRelaunchButtonClick={onRelaunchButtonClick}
  />);

  const button = gameOverScreen.find(`.replay`);
  button.simulate(`click`);

  expect(onRelaunchButtonClick).toHaveBeenCalledTimes(1);
});
