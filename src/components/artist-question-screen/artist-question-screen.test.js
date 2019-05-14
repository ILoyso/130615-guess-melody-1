import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';


const questionMock = {
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
  onAnswer: jest.fn(),
  question: {
    song: {
      artist: `Kurt Cobain`,
      src: `path.mp3`,
    },
    type: `artist`
  }
};

it(`ArtistQuestionScreen correctly renders`, () => {
  const artistScreen = renderer
    .create(<ArtistQuestionScreen
      question={questionMock.question}
      onAnswer={questionMock.onAnswer}
    />)
    .toJSON();

  expect(artistScreen).toMatchSnapshot();
});
