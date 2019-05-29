import React from 'react';
import PropTypes from 'prop-types';


// Component for game where need to choose artist
class ArtistQuestionScreen extends React.PureComponent {

  /**
   * Method for render artist game screen
   * @return {*}
   */
  render() {
    const {
      onAnswer,
      question,
      renderPlayer
    } = this.props;
    const {answers, song} = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      {renderPlayer(song, 0)}

      <form className="game__artist">
        {answers.map((answer, index) => <div className="artist" key={index}>
          <input
            className="artist__input visually-hidden"
            id={`artist-${index}`}
            name="answer"
            onClick={() => onAnswer(answer)}
            type="radio"
            value={`artist-${index}`}
          />
          <label className="artist__name" htmlFor={`artist-${index}`}>
            <img className="artist__picture" src={answer.picture} alt={answer.artist} />
            {answer.artist}
          </label>
        </div>)}
      </form>
    </section>;
  }
}


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
  renderPlayer: PropTypes.func.isRequired,
};


export default ArtistQuestionScreen;
