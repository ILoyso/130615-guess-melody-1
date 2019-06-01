import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import GenreQuestionScreen from './genre-question-screen';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';


Enzyme.configure({adapter: new Adapter()});

const questionMock = {
  activePlayer: -1,
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
    const {
      activePlayer,
      question
    } = questionMock;
    const onAnswer = jest.fn();
    const onChange = jest.fn();
    const onPlayButtonClick = jest.fn();
    const renderAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreen
      activePlayer={activePlayer}
      onAnswer={onAnswer}
      onChange={onChange}
      onPlayButtonClick={onPlayButtonClick}
      question={question}
      renderAnswer={renderAnswer}
      userAnswer={[]}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();

    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });

  it(`Rendered checkboxes are synchronized with prop "userAnswer"`, () => {
    const GenreQuestionScreenWrapped = withUserAnswer(GenreQuestionScreen);

    const {
      activePlayer,
      question
    } = questionMock;
    const onAnswer = jest.fn();
    const onPlayButtonClick = jest.fn();
    const renderAnswer = jest.fn();

    const genreQuestion = shallow(<GenreQuestionScreenWrapped
      activePlayer={activePlayer}
      answers={question.answers}
      onAnswer={onAnswer}
      onPlayButtonClick={onPlayButtonClick}
      question={question}
      renderAnswer={renderAnswer}
    />);

    const render = genreQuestion.dive();
    const inputs = render.find(`input`);
    const inputOne = inputs.at(0);
    const inputTwo = inputs.at(1);

    inputOne.simulate(`change`);
    expect(genreQuestion.prop(`userAnswer`)).toEqual([true, false, false, false]);

    inputOne.simulate(`change`);
    expect(genreQuestion.prop(`userAnswer`)).toEqual([false, false, false, false]);

    inputTwo.simulate(`change`);
    expect(genreQuestion.prop(`userAnswer`)).toEqual([false, true, false, false]);
  });

  it(`User answer passed to callback is consistent with "userAnswer" prop`, () => {
    const {
      activePlayer,
      question
    } = questionMock;
    const onAnswer = jest.fn();
    const onChange = jest.fn();
    const onPlayButtonClick = jest.fn();
    const renderAnswer = jest.fn();
    const userAnswer = [false, true, false, false];

    const genreQuestion = shallow(<GenreQuestionScreen
      activePlayer={activePlayer}
      onAnswer={onAnswer}
      onChange={onChange}
      onPlayButtonClick={onPlayButtonClick}
      question={question}
      userAnswer={userAnswer}
      renderAnswer={renderAnswer}
    />);

    const form = genreQuestion.find(`form`);
    const inputTwo = genreQuestion.find(`input`).at(1);
    inputTwo.simulate(`change`);
    form.simulate(`submit`, {preventDefault() {}});

    expect(genreQuestion.find(`input`).map((it) => it.prop(`checked`))).toEqual(userAnswer);
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });
});
