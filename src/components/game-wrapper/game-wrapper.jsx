import React from 'react';
import PropTypes from 'prop-types';
import Mistakes from '../mistakes/mistakes.jsx';


/**
 * Component for game wrapper
 * @param {Object} props
 * @return {*}
 */
const GameWrapper = (props) => {
  const {
    game,
    gameType,
    mistakes
  } = props;

  return <section className={`game game--${gameType}`}>
    <header className="game__header">
      <a className="game__back" href="#">
        <span className="visually-hidden">Сыграть ещё раз</span>
        <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
      </a>

      <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
        <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}}/>
      </svg>

      <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
        <span className="timer__mins">05</span>
        <span className="timer__dots">:</span>
        <span className="timer__secs">00</span>
      </div>

      <Mistakes
        mistakes={mistakes}
      />
    </header>
    {game}
  </section>;
};


GameWrapper.propTypes = {
  game: PropTypes.node.isRequired,
  gameType: PropTypes.string.isRequired,
  mistakes: PropTypes.number.isRequired
};


export default GameWrapper;
