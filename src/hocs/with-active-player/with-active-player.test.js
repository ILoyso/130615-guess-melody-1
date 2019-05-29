import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withActivePlayer from './with-active-player';


Enzyme.configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withActivePlayer(MockComponent);


it(`Should change activePlayer when call onPlayButtonClick`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activePlayer).toEqual(-1);
});
