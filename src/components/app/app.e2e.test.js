import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './app';


Enzyme.configure({adapter: new Adapter()});

const settings = {
  errorCount: 5,
  gameTime: 8
};

const questionsMock = {
  questions: [
    {
      answers: [
        {
          src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
          genre: `rock`,
        },
      ],
      genre: `rock`,
      type: `genre`,
    },
    {
      answers: [
        {
          picture: `http://placehold.it/134x134`,
          artist: `One`,
        },
      ],
      song: {
        artist: `One`,
        src: `path.mp3`,
      },
      type: `artist`,
    }
  ],
};


describe(`App Component`, () => {

  it(`On click on WelcomeScreen App switches to the first question`, () => {
    const {questions} = questionsMock;
    const app = mount(<App
      errorCount={settings.errorCount}
      gameTime={settings.gameTime}
      questions={questions}
    />);

    expect(app.state(`questionId`)).toEqual(-1);

    const button = app.find(`button`);
    button.simulate(`click`);
    app.update();

    expect(app.state(`questionId`)).toEqual(0);
  });


  it(`Question answer switches to another question`, () => {
    const {questions} = questionsMock;
    const app = mount(<App
      errorCount={settings.errorCount}
      gameTime={settings.gameTime}
      questions={questions}
    />);

    app.setState({
      questionId: 0,
    });
    app.update();

    const form = app.find(`form`);
    form.simulate(`submit`, {
      preventDefault() {},
    });

    expect(app.state(`questionId`)).toEqual(1);
  });

});
