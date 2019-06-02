import {questions} from './mocks/questions';

const initialState = {
  mistakes: 0,
  step: -1,
  questions: [],
};


const ActionType = {
  INCREMENT_STEP: `INCREMENT_STEP`,
  INCREMENT_MISTAKES: `INCREMENT_MISTAKES`,
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
  RESET_GAME: `RESET_GAME`
};


/**
 * Function for check user answer for artist question type
 * @param {Object} userAnswer
 * @param {Object} question
 * @return {Boolean}
 */
const isArtistAnswerCorrect = (userAnswer, question) =>
  userAnswer.artist === question.song.artist;


/**
 * Function for check user answer for genre question type
 * @param {Object} userAnswer
 * @param {Object} question
 * @return {Boolean}
 */
const isGenreAnswerCorrect = (userAnswer, question) =>
  userAnswer.every((it, i) => it === (
    question.answers[i].genre === question.genre
  ));


/**
 * Methods that returns actions for reducer (Object with type and payload params)
 * @return {Object}
 */
const ActionCreator = {
  incrementStep: () => ({
    type: ActionType.INCREMENT_STEP,
    payload: 1,
  }),

  incrementMistake: (userAnswer, question) => {
    let answerIsCorrect = false;

    switch (question.type) {
      case `artist`:
        answerIsCorrect = isArtistAnswerCorrect(userAnswer, question);
        break;
      case `genre`:
        answerIsCorrect = isGenreAnswerCorrect(userAnswer, question);
        break;
    }

    return {
      type: ActionType.INCREMENT_MISTAKES,
      payload: answerIsCorrect ? 0 : 1,
    };
  },

  loadQuestions: () => {
    return {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions,
    };
  },

  resetGame: () => {
    return {
      type: ActionType.RESET_GAME
    };
  },
};


/**
 * Reducer for change application state
 * @param {Object} state [state = initialState]
 * @param {Object} action
 * @param {Number} action.payload
 * @param {String} action.type
 * @return {Object}
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT_MISTAKES: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case ActionType.INCREMENT_STEP: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload,
    });

    case ActionType.RESET_GAME: return Object.assign({}, initialState);
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
  reducer
};
