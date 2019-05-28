import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ArtistQuestionScreen from './artist-question-screen.jsx';


Enzyme.configure({adapter: new Adapter()});

const questionMock = {
  onAnswer: jest.fn(),
  question: {
    answers: [
      {
        artist: `Jared Leto`,
        picture: `http://placehold.it/134x134`,
      },
      {
        artist: `Dave Grohl`,
        picture: `http://placehold.it/134x134`,
      },
      {
        artist: `Kurt Cobain`,
        picture: `http://placehold.it/134x134`,
      },
    ],
    song: {
      artist: `Kurt Cobain`,
      src: `path.mp3`,
    },
    type: `artist`
  }
};

it(`Click on user answer should pass to the callback data-object from which this answer was created`, () => {
  const {onAnswer, question} = questionMock;

  const screen = shallow(<ArtistQuestionScreen
    onAnswer={onAnswer}
    question={question}
  />);

  const answerInputs = screen.find(`input`);
  const answerOne = answerInputs.at(0);
  const answerTwo = answerInputs.at(1);
  const answerThree = answerInputs.at(2);

  answerOne.simulate(`click`, onAnswer);
  answerTwo.simulate(`click`, onAnswer);
  answerThree.simulate(`click`, onAnswer);

  expect(onAnswer).toHaveBeenCalledTimes(3);

  expect(onAnswer).toHaveBeenNthCalledWith(1, {
    artist: `Jared Leto`,
    picture: `http://placehold.it/134x134`,
  });

  expect(onAnswer).toHaveBeenNthCalledWith(2, {
    artist: `Dave Grohl`,
    picture: `http://placehold.it/134x134`,
  });

  expect(onAnswer).toHaveBeenNthCalledWith(3, {
    artist: `Kurt Cobain`,
    picture: `http://placehold.it/134x134`,
  });
});
