const initialState = {
  mistakes: 0,
  step: -1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload
    });

    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });
  }

  return state;
};

export {reducer};
