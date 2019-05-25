import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer} from './reducer';
import App from './components/app/app.jsx';
import {settings} from './config';
import {questions} from './mocks/questions';


// Entry point for project
const init = (gameQuestions) => {
  const store = createStore(reducer);

  const {errorCount, gameTime} = settings;

  // React render for App component
  ReactDOM.render(<Provider store={store}>
    <App
      maxMistakes={errorCount}
      gameTime={gameTime}
      questions={gameQuestions}
    />
  </Provider>,
  document.querySelector(`.main`)
  );
};


init(questions);
