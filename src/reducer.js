const initialState = {
  mistakes: 0,
  step: -1,
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
 * Reducer for change application state
 * @param {Object} state [state = initialState]
 * @param {Object} action
 * @param {Number} action.payload
 * @param {String} action.type
 * @return {Object}
 */
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case `RESET_GAME`: return Object.assign({}, initialState);
  }

  return state;
};


export {
  isArtistAnswerCorrect,
  isGenreAnswerCorrect,
  reducer
};
