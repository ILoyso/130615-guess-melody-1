import React from 'react';
import renderer from 'react-test-renderer';

import GenreQuestionScreen from './genre-question-screen.jsx';


const questionMock = {
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
  type: `genre`,
};

it(`GenreQuestionScreen correctly renders`, () => {
  const tree = renderer
    .create(<GenreQuestionScreen
      question={questionMock.question}
      onAnswer={questionMock.onAnswer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
