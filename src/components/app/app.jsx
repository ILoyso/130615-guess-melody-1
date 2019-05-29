import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import {ActionCreator} from "../../reducer";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import GameWrapper from '../game-wrapper/game-wrapper.jsx';

import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';


const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(GenreQuestionScreen));


// Application component, here the whole process begins
class App extends React.PureComponent {

  /**
   * Method for render app screen
   * @return {*}
   */
  render() {
    const {
      questions,
      step,
    } = this.props;

    return this._getScreen(questions[step]);
  }

  /**
   * Method for check what screen should be rendered
   * @param {Object} question
   * @return {*}
   * @private
   */
  _getScreen(question) {
    if (!question) {
      const {
        gameTime,
        onWelcomeScreenClick,
        maxMistakes,
      } = this.props;

      return <WelcomeScreen
        errorCount={maxMistakes}
        onPlayClick={onWelcomeScreenClick}
        time={gameTime}
      />;
    }

    const {
      onUserAnswer,
      maxMistakes,
      mistakes,
    } = this.props;

    const onAnswer = (userAnswer) => onUserAnswer(userAnswer, question, mistakes, maxMistakes);

    return <GameWrapper
      game={this._getGameScreen(question, onAnswer)}
      gameType={question.type}
      mistakes={mistakes}
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
      case `genre`: return <GenreQuestionScreenWrapped
        answers={question.answers}
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
  gameTime: PropTypes.number.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
};


/**
 * Function for connect state with app
 * @param {Object} state
 * @param {Object} ownProps
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});


/**
 * Function for connect action creator methods with app
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question, mistakes, maxMistakes) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(userAnswer, question, mistakes, maxMistakes));
  }
});


export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
