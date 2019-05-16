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

it(`Change form on artist game correctly works`, () => {
  const artistScreen = shallow(<ArtistQuestionScreen
    onAnswer={questionMock.onAnswer}
    question={questionMock.question}
  />);

  const form = artistScreen.find(`form`);
  form.simulate(`change`);

  expect(questionMock.onAnswer).toHaveBeenCalledTimes(1);
});
