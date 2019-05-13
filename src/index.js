import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import {settings} from './mocks/game-settings';


// Entry point for project
const init = () => {
  const {errorCount, gameTime} = settings;

  // React render for App component
  ReactDOM.render(
      <App
        errorCount={errorCount}
        gameTime={gameTime}
      />,
      document.querySelector(`.main`)
  );
};


init();
