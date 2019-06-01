import React from 'react';
import renderer from 'react-test-renderer';

import ArtistQuestionScreen from './artist-question-screen.jsx';


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

it(`ArtistQuestionScreen correctly renders`, () => {
  const createNodeMock = (element) => {
    if (element.type === `audio`) {
      return {
        src: ``
      };
    }
    return null;
  };
  const renderPlayer = jest.fn();

  const artistScreen = renderer
    .create(<ArtistQuestionScreen
      onAnswer={questionMock.onAnswer}
      question={questionMock.question}
      renderPlayer={renderPlayer}
    />, {createNodeMock})
    .toJSON();

  expect(artistScreen).toMatchSnapshot();
});
