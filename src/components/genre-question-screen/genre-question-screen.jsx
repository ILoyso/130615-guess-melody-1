import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';


// Component for game where need to choose genre
class GenreQuestionScreen extends React.PureComponent {

  /**
   * Method for render genre game screen
   * @return {*}
   */
  render() {
    const {
      activePlayer,
      onAnswer,
      onChange,
      onPlayButtonClick,
      question,
      userAnswer
    } = this.props;

    const {answers} = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите инди-рок треки</h2>
      <form
        className="game__tracks"
        onSubmit={(event) => {
          event.preventDefault();
          onAnswer();
        }}
      >

        {answers.map((answer, index) => <div className="track" key={index}>
          <AudioPlayer
            isPlaying={index === activePlayer}
            onPlayButtonClick={() => onPlayButtonClick(index)}
            src={answer.src}
          />
          <div className="game__answer">
            <input
              checked={userAnswer[index]}
              className="game__input visually-hidden"
              id={`answer-${index}`}
              name="answer"
              onChange={() => onChange(index)}
              type="checkbox"
              value={`answer-${index}`}
            />
            <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}


GenreQuestionScreen.propTypes = {
  activePlayer: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onPlayButtonClick: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  userAnswer: PropTypes.arrayOf(PropTypes.bool).isRequired
};


export default GenreQuestionScreen;
