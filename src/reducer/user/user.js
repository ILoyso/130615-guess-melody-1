const initialState = {
  email: undefined,
  id: undefined,
  isAuthorizationRequired: false,
  name: undefined,
};


const ActionType = {
  ADD_USER_DATA: `ADD_USER_DATA`,
  LOG_IN: `LOG_IN`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};


/**
 * Methods that returns actions for reducer (Object with type and payload params)
 * @return {Object}
 */
const ActionCreator = {
  addUserData: (status) => {
    return {
      type: ActionType.ADD_USER_DATA,
      payload: status,
    };
  },

  logIn: (status) => {
    return {
      type: ActionType.LOG_IN,
      payload: status,
    };
  },

  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
};


const Operation = {
  addUserData: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        return dispatch(ActionCreator.addUserData(response.data));
      })
      .catch((err) => {
        throw err;
      });
  },

  logIn: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
      .then((response) => {
        dispatch(ActionCreator.logIn(response.data));
      })
      .catch((err) => {
        throw err;
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
    case ActionType.ADD_USER_DATA: return Object.assign({}, state, action.payload);

    case ActionType.LOG_IN: return Object.assign({}, state, {
      email: action.payload.email,
      id: action.payload.id,
      isAuthorizationRequired: false,
      name: action.payload.name,
    });

    case ActionType.REQUIRED_AUTHORIZATION: return Object.assign({}, state, {
      isAuthorizationRequired: action.payload,
    });
  }

  return state;
};


export {
  ActionCreator,
  ActionType,
  Operation,
  reducer,
};
