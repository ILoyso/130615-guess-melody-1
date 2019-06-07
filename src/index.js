import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {compose} from 'recompose';

import App from './components/app/app.jsx';
import {settings} from './config';
import reducer from './reducer/reducer';
import {Operation as DataOperation} from './reducer/data/data';
import {Operation as UserOperation} from './reducer/user/user';
import {createAPI} from './api';


// Entry point for project
const init = () => {
  const {errorCount, gameTime} = settings;
  const api = createAPI(() => history.pushState(null, null, `/login`));

  /* eslint-disable no-underscore-dangle */
  const store = createStore(
      reducer,
      compose(
          applyMiddleware(thunk.withExtraArgument(api)),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )
  );
  /* eslint-enable */

  store.dispatch(DataOperation.loadQuestions());
  store.dispatch(UserOperation.checkAuth());

  // React render for App component
  ReactDOM.render(<Provider store={store}>
    <App
      gameTime={gameTime}
      maxMistakes={errorCount}
    />
  </Provider>,
  document.querySelector(`.main`)
  );
};


init();
