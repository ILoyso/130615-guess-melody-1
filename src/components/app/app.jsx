import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../reducer/game/game';
import ArtistQuestionScreen from '../artist-question-screen/artist-question-screen.jsx';
import AuthorizationScreen from '../../components/authorization-screen/authorization-screen.jsx';
import GameOverScreen from '../game-over-screen/game-over-screen.jsx';
import GameWrapper from '../game-wrapper/game-wrapper.jsx';
import GenreQuestionScreen from '../genre-question-screen/genre-question-screen.jsx';
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import WinScreen from '../win-screen/win-screen.jsx';

import withActivePlayer from '../../hocs/with-active-player/with-active-player';
import withAuthorization from '../../hocs/with-authorization/with-authorization';
import withTransformProps from '../../hocs/with-transform-props/with-transform-props';
import withUserAnswer from '../../hocs/with-user-answer/with-user-answer';

import {Operation} from '../../reducer/user/user';

import {getStep, getMistakes} from '../../reducer/game/selectors';
import {getQuestions} from '../../reducer/data/selectors';
import {getAuthorizationStatus} from '../../reducer/user/selectors';


/**
 * Function for update props from renderPlayer to renderAnswer
 * @param {Object} props
 * @return {*}
 */
const transformPlayerToAnswer = (props) => {
  const newProps = Object.assign({}, props, {
    renderAnswer: props.renderPlayer,
  });
  delete newProps.renderPlayer;
  return newProps;
};

const ArtistQuestionScreenWrapped = withActivePlayer(ArtistQuestionScreen);
const AuthorizationScreenWrapped = withAuthorization(AuthorizationScreen);
const GenreQuestionScreenWrapped = withUserAnswer(withActivePlayer(
    withTransformProps(transformPlayerToAnswer)(GenreQuestionScreen)));


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
    if (this.props.isAuthorizationRequired) {
      const {logIn} = this.props;

      return <AuthorizationScreenWrapped
        logIn = {logIn}
      />;
    }

    if (!question) {
      const {
        mistakes,
        questions,
        resetGame,
        step
      } = this.props;

      if (step > questions.length - 1) {
        return <WinScreen
          mistakes={mistakes}
          onReplayButtonClick={resetGame}
        />;
      } else {
        const {
          isAuthorization,
          maxMistakes,
          gameTime,
          onWelcomeScreenClick,
        } = this.props;

        return <WelcomeScreen
          errorCount={maxMistakes}
          onPlayClick={() => {
            onWelcomeScreenClick();
            isAuthorization();
          }}
          time={gameTime}
        />;
      }
    }

    const {
      onUserAnswer,
      maxMistakes,
      mistakes,
      resetGame
    } = this.props;

    if (mistakes >= maxMistakes) {
      return <GameOverScreen
        onRelaunchButtonClick={resetGame}
      />;
    }

    const onAnswer = (userAnswer) => onUserAnswer(userAnswer, question);

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

      case `artist`: return <ArtistQuestionScreenWrapped
        question={question}
        onAnswer={onAnswer}
      />;

      default: return null;
    }
  }
}


App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  isAuthorization: PropTypes.func.isRequired,
  isAuthorizationRequired: PropTypes.bool.isRequired,
  logIn: PropTypes.func.isRequired,
  maxMistakes: PropTypes.number.isRequired,
  mistakes: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  onWelcomeScreenClick: PropTypes.func.isRequired,
  questions: PropTypes.arrayOf(PropTypes.object),
  resetGame: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};


/**
 * Function for connect state with app
 * @param {Object} state
 * @param {Object} ownProps
 * @return {Object}
 */
const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: getAuthorizationStatus(state),
  mistakes: getMistakes(state),
  step: getStep(state),
  questions: getQuestions(state),
});


/**
 * Function for connect action creator methods with app
 * @param {Function} dispatch
 * @return {Function}
 */
const mapDispatchToProps = (dispatch) => ({
  isAuthorization: () => dispatch(Operation.addUserData()),

  logIn: (data) => dispatch(Operation.logIn(data)),

  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(userAnswer, question));
  },

  resetGame: () => dispatch(ActionCreator.resetGame()),
});


export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
