import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


/**
 * Application component, here the whole process begins
 * @param {Object} props
 * @return {*}
 */
const App = (props) => {
  const {gameTime, errorCount} = props;
  const onPlayButtonClick = () => {};

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
    onPlayClick={onPlayButtonClick}
  />;
};


App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired
};


export default App;
