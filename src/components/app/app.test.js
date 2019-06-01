import React from 'react';
import renderer from 'react-test-renderer';

import {App} from './app.jsx';

const mock = {
  questions: [
    {
      answers: [
        {
          src: `test.mp3`,
          genre: `rock`,
        },
        {
          src: `test.mp3`,
          genre: `blues`,
        },
        {
          src: `test.mp3`,
          genre: `jazz`,
        },
        {
          src: `test.mp3`,
          genre: `rock`,
        },
      ],
      genre: `rock`,
      type: `genre`,
    },
    {
      answers: [
        {
          picture: `path.jpg`,
          artist: `John Snow`,
        },
        {
          picture: `path.jpg`,
          artist: `Jack Daniels`,
        },
        {
          picture: `path.jpg`,
          artist: `Jim Beam`,
        },
      ],
      song: {
        artist: `Jim Beam`,
        src: `path.mp3`,
      },
      type: `artist`,
    }
  ],
};


describe(`App Component`, () => {
  it(`App correctly renders first screen`, () => {
    const {questions} = mock;
    const app = renderer.create(<App
      gameTime={100}
      maxMistakes={Infinity}
      mistakes={0}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      questions={questions}
      resetGame={jest.fn()}
      step={-1}
    />).toJSON();

    expect(app).toMatchSnapshot();
  });

  it(`App correctly renders genre question screen`, () => {
    const {questions} = mock;
    const app = renderer.create(<App
      gameTime={100}
      maxMistakes={Infinity}
      mistakes={0}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      questions={questions}
      resetGame={jest.fn()}
      step={1}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(app).toMatchSnapshot();
  });

  it(`App correctly renders artist question screen`, () => {
    const {questions} = mock;
    const app = renderer.create(<App
      gameTime={100}
      maxMistakes={Infinity}
      mistakes={0}
      onUserAnswer={jest.fn()}
      onWelcomeScreenClick={jest.fn()}
      questions={questions}
      resetGame={jest.fn()}
      step={1}
    />, {
      createNodeMock: () => {
        return {};
      }
    }).toJSON();

    expect(app).toMatchSnapshot();
  });
});

