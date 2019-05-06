import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const settings = {
  gameTime: 5,
  errorCount: 3,
};


// Entry point for project
const init = () => {

  // React render for App component
  ReactDOM.render(
      <App
        gameTime={settings.gameTime}
        errorCount={settings.errorCount}
      />,
      document.querySelector(`.main`)
  );
};


init();
