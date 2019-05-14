import React from 'react';
import PropTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameWrapper from '../game-wrapper/game-wrapper.jsx';


// Application component, here the whole process begins
class App extends React.PureComponent {

  /**
   * Create App component
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.state = {
      questionId: -1,
    };
  }

  /**
   * Method for render app screen
   * @return {*}
   */
  render() {
    const {questions} = this.props;
    const {questionId} = this.state;

    return this._getScreen(questionId, this.props, () => {
      this.setState({
        questionId: questionId + 1 >= questions.length ? -1 : questionId + 1,
      });
    });
  }

  /**
   * Method for check what screen should be rendered
   * @param {Number} questionId
   * @param {Object} props
   * @param {Function} onAnswer
   * @return {*}
   * @private
   */
  _getScreen(questionId, props, onAnswer) {
    if (questionId === -1) {
      const {gameTime, errorCount} = props;

      return <WelcomeScreen
        errorCount={errorCount}
        onPlayClick={onAnswer}
        time={gameTime}
      />;
    }

    const {questions} = props;
    const currentQuestion = questions[questionId];

    return <GameWrapper
      game={this._getGameScreen(currentQuestion, onAnswer)}
      gameType={currentQuestion.type}
    />;
  }

  /**
   * Method for check what type of game should be rendered
   * @param {Object} question
   * @param {Function} onAnswer
   * @return {*}
   * @private
   */
  _getGameScreen(question, onAnswer) {
    switch (question.type) {
      case `genre`: return <GenreQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />;

      case `artist`: return <ArtistQuestionScreen
        question={question}
        onAnswer={onAnswer}
      />;

      default: return null;
    }
  }
}


App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object)
};


export default App;
