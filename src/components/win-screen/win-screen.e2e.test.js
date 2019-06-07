import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import WinScreen from './win-screen.jsx';


Enzyme.configure({adapter: new Adapter()});


it(`Click on play again button correctly works`, () => {
  const onReplayButtonClick = jest.fn();

  const winScreen = shallow(<WinScreen
    mistakes={2}
    onReplayButtonClick={onReplayButtonClick}
  />);

  const button = winScreen.find(`.replay`);
  button.simulate(`click`);

  expect(onReplayButtonClick).toHaveBeenCalledTimes(1);
});
