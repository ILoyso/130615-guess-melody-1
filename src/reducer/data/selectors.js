import {createSelector} from 'reselect';

import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.DATA;


/**
 * Function for get all questions
 * @param {Object} state
 * @return {Array}
 */
export const getQuestions = (state) => {
  return state[NAME_SPACE].questions;
};


/**
 * Function for get all genre questions
 * @param {Object} state
 * @return {Array}
 */
export const getGenreQuestions = createSelector(
    getQuestions,
    (questions) => questions.filter((it) => it.type === `genre`)
);


/**
 * Function for random filtering
 * @param {Object} _state
 * @return {boolean}
 */
const randomFilter = (_state) => {
  return Math.random() > 0.5;
};


/**
 * Function for get all artist questions
 * @param {Object} state
 * @return {Array}
 */
export const getArtistQuestions = createSelector(
    getQuestions,
    randomFilter,
    (resultOne, resultTwo) => {
      return resultOne.filter((it) => resultTwo && it.type === `artist`);
    }
);
