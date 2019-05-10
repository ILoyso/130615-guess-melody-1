import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';


/**
 * Application component, here the whole process begins
 * @param {Object} props
 * @return {*}
 */
const App = (props) => {
  const {errorCount, gameTime} = props;
  const onPlayButtonClick = () => {};

  return <WelcomeScreen
    errorCount={errorCount}
    onPlayClick={onPlayButtonClick}
    time={gameTime}
  />;
};


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired
};


export default App;
