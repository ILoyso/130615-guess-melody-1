import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app.jsx';
import {settings} from './config';
import reducer from './reducer/reducer';
import {Operation} from './reducer/data/data';
import {createAPI} from './api';


// Entry point for project
const init = () => {
  const {errorCount, gameTime} = settings;
  const api = createAPI((...args) => store.dispatch(...args));

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

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
