import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {settings} from './config';
import {reducer, ActionCreator} from './reducer';


// Entry point for project
const init = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  /* eslint-enable */

  const {errorCount, gameTime} = settings;

  store.dispatch(ActionCreator.loadQuestions());

  // React render for App component
  ReactDOM.render(<Provider store={store}>
    <App
      maxMistakes={errorCount}
      gameTime={gameTime}
    />
  </Provider>,
  document.querySelector(`.main`)
  );
};


init();
