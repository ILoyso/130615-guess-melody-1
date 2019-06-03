const initialState = {
  questions: [],
};


const ActionType = {
  LOAD_QUESTIONS: `LOAD_QUESTIONS`,
};


/**
 * Methods that returns actions for reducer (Object with type and payload params)
 * @return {Object}
 */
const ActionCreator = {
  loadQuestions: (questions) => {
    return {
      type: ActionType.LOAD_QUESTIONS,
      payload: questions,
    };
  }
};


const Operation = {
  loadQuestions: () => (dispatch, _getState, api) => {
    return api.get(`/questions`)
      .then((response) => {
        dispatch(ActionCreator.loadQuestions(response.data));
      });
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
    case ActionType.LOAD_QUESTIONS: return Object.assign({}, state, {
      questions: action.payload,
    });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer
};
