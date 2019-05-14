import React from 'react';
import PropTypes from 'prop-types';


/**
 * Component for game where need to choose artist
 * @param {Object} props
 * @return {*}
 */
const ArtistQuestionScreen = (props) => {
  const {question, onAnswer} = props;
  const {answers} = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button"></button>
      <audio></audio>
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {answers.map((answer, index) => <div className="artist" key={index}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${index}`} id={`artist-${index}`} />
        <label className="artist__name" htmlFor={`artist-${index}`}>
          <img className="artist__picture" src={answer.picture} alt={answer.artist} />
          {answer.artist}
        </label>
      </div>)}
    </form>
  </section>;
};


ArtistQuestionScreen.propTypes = {
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


export default ArtistQuestionScreen;
