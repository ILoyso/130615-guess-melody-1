import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {settings} from './config';
import {questions} from './mocks/questions';


// Entry point for project
const init = (gameQuestions) => {
  const {errorCount, gameTime} = settings;

  // React render for App component
  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
        questions={gameQuestions}
      />,
      document.querySelector(`.main`)
  );
};


init(questions);
