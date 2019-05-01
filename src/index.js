import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


/** Entry point for project */
const init = () => {
  const settings = {
    gameTime: 5,
    errorCount: 3,
  };

  /** React render for App component */
  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
      />,
      document.querySelector(`.main`)
  );
};

init();
