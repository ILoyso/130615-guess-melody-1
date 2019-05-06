import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';


const settings = {
  errorCount: 3,
  gameTime: 5,
};


// Entry point for project
const init = () => {

  // React render for App component
  ReactDOM.render(
      <App
        errorCount={settings.errorCount}
        gameTime={settings.gameTime}
      />,
      document.querySelector(`.main`)
  );
};


init();
