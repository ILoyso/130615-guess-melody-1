import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app.jsx';
import {settings} from './config';
import {reducer, Operation} from './reducer';


// Entry point for project
const init = () => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

  const {errorCount, gameTime} = settings;

  store.dispatch(Operation.loadQuestions());

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
