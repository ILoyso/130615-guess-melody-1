import React from 'react';
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import WelcomeScreen from './welcome-screen';


Enzyme.configure({adapter: new Adapter()});

const settings = {
  errorCount: 5,
  onPlayClick: jest.fn(),
  time: 8
};

it(`Click on start game button correctly works`, () => {
  const welcomeScreen = shallow(<WelcomeScreen
    errorCount={settings.errorCount}
    onPlayClick={settings.onPlayClick}
    time={settings.time}
  />);

  const startButton = welcomeScreen.find(`button`);
  startButton.simulate(`click`);

  expect(settings.onPlayClick).toHaveBeenCalledTimes(1);
});
