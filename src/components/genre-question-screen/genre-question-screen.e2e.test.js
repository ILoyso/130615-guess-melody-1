import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen';


Enzyme.configure({adapter: new Adapter()});

const questionMock = {
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

describe(`GenreQuestionScreen`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const {question} = questionMock;
    const onAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`Rendered checkboxes are synchronized with state`, () => {
    const {question} = questionMock;
    const onAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    expect(genreQuestion.state(`userAnswer`)).toEqual([false, false, false, false]);

    const inputs = genreQuestion.find(`input`);
    const inputOne = inputs.at(0);
    const inputTwo = inputs.at(1);

    inputOne.simulate(`change`);
    expect(genreQuestion.state(`userAnswer`)).toEqual([true, false, false, false]);

    inputOne.simulate(`change`);
    expect(genreQuestion.state(`userAnswer`)).toEqual([false, false, false, false]);

    inputTwo.simulate(`change`);
    expect(genreQuestion.state(`userAnswer`)).toEqual([false, true, false, false]);
  });

  it(`User answer passed to callback is consistent with internal component state`, () => {
    const {question} = questionMock;
    const onAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);
    inputTwo.simulate(`change`);
    form.simulate(`submit`, {preventDefault() {}});

    expect(genreQuestion.state(`userAnswer`)).toEqual([false, true, false, false]);
    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(onAnswer).toHaveBeenNthCalledWith(1, [false, true, false, false]);
  });
});
