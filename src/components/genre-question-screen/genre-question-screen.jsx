import React from 'react';
import PropTypes from 'prop-types';


/**
 * Component for game where need to choose genre
 * @param {Object} props
 * @return {*}
 */
const GenreQuestionScreen = (props) => {
  const {onAnswer, question} = props;
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
        <button className="track__button track__button--play" type="button"></button>
        <div className="track__status">
          <audio></audio>
        </div>
        <div className="game__answer">
          <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`} />
          <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
        </div>
      </div>)}

      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
};


GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired,
    })).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
    }).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};


export default GenreQuestionScreen;
