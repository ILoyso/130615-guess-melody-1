import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import withAuthorization from './with-authorization';


configure({adapter: new Adapter()});


const MockComponent = () => <div />;
const MockComponentWrapped = withAuthorization(MockComponent);


describe(`withAuthorization`, () => {
  it(`Should change value when call onChange`, () => {
    const wrapper = shallow(<MockComponentWrapped
      logIn={jest.fn()}
    />);

    expect(wrapper.props().name).toEqual(`email@email.ru`);
    expect(wrapper.props().password).toEqual(`password`);

    wrapper.props().onChange({
      target: {
        name: `name`,
        value: `test@email.ru`,
      }
    });
    expect(wrapper.props().name).toEqual(`test@email.ru`);
    expect(wrapper.props().password).toEqual(`password`);

    wrapper.props().onChange({
      target: {
        name: `password`,
        value: `testPass`,
      }
    });
    expect(wrapper.props().name).toEqual(`test@email.ru`);
    expect(wrapper.props().password).toEqual(`testPass`);
  });

});
