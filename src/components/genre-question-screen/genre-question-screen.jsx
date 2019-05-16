import React from 'react';
import PropTypes from 'prop-types';

import AudioPlayer from '../audio-player/audio-player.jsx';


// Component for game where need to choose genre
class GenreQuestionScreen extends React.PureComponent {

  /**
   * Create GenreQuestionScreen component
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  /**
   * Method for render genre game screen
   * @return {*}
   */
  render() {
    const {onAnswer, question} = this.props;
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
            isPlaying={index === this.state.activePlayer}
            onPlayButtonClick={() => {
              this.setState({
                activePlayer: this.state.activePlayer === index ? -1 : index
              });
            }}
            src={answer.src}
          />
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${index}`} id={`answer-${index}`} />
            <label className="game__check" htmlFor={`answer-${index}`}>Отметить</label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}


GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};


export default GenreQuestionScreen;
