import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen';


Enzyme.configure({adapter: new Adapter()});

const questionMock = {
  onAnswer: jest.fn(),
  question: {
    answers: [
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `blues`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `jazz`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
      {
        genre: `rock`,
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      },
    ],
    genre: `rock`,
    type: `genre`
  }
};

it(`When user answers genre question form is not sent`, () => {
  const genreScreen = shallow(<GenreQuestionScreen
    onAnswer={questionMock.onAnswer}
    question={questionMock.question}
  />);

  const form = genreScreen.find(`form`);
  const formSendPrevention = jest.fn();

  form.simulate(`submit`, {
    preventDefault: formSendPrevention,
  });

  expect(questionMock.onAnswer).toHaveBeenCalledTimes(1);
  expect(formSendPrevention).toHaveBeenCalledTimes(1);
});
