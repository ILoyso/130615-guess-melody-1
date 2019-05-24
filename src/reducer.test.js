import {reducer} from './reducer';

describe(`Reducer`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {})).toEqual({
      mistakes: 0,
      step: -1,
    });
  });

  it(`Reduser should increment step by a given value`, () => {
    expect(reducer({
      mistakes: 0,
      step: -1
    }, {
      payload: 1,
      type: `INCREMENT_STEP`,
    })).toEqual({
      mistakes: 0,
      step: 0
    });

    expect(reducer({
      mistakes: 1,
      step: 2
    }, {
      payload: -1,
      type: `INCREMENT_STEP`,
    })).toEqual({
      mistakes: 1,
      step: 1
    });

    expect(reducer({
      mistakes: 0,
      step: 1
    }, {
      payload: 0,
      type: `INCREMENT_STEP`,
    })).toEqual({
      mistakes: 0,
      step: 1
    });
  });

  it(`Reduser should increment mistakes by a given value`, () => {
    expect(reducer({
      mistakes: 0,
      step: -1
    }, {
      payload: 1,
      type: `INCREMENT_MISTAKES`,
    })).toEqual({
      mistakes: 1,
      step: -1
    });

    expect(reducer({
      mistakes: 2,
      step: 2
    }, {
      payload: -1,
      type: `INCREMENT_MISTAKES`,
    })).toEqual({
      mistakes: 1,
      step: 2
    });

    expect(reducer({
      mistakes: 1,
      step: 1
    }, {
      payload: 0,
      type: `INCREMENT_MISTAKES`,
    })).toEqual({
      mistakes: 1,
      step: 1
    });
  });
});
