import NameSpace from '../name-spaces';


const NAME_SPACE = NameSpace.GAME;


/**
 * Function for get current game step
 * @param {Object} state
 * @return {*}
 */
export const getStep = (state) => {
  return state[NAME_SPACE].step;
};


/**
 * Function for get current user mistakes
 * @param {Object} state
 * @return {number}
 */
export const getMistakes = (state) => {
  return state[NAME_SPACE].mistakes;
};
