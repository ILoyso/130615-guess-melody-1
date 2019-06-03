import NameSpace from '../name-spaces';

const NAME_SPACE = NameSpace.USER;


/**
 * Function for get authorization status
 * @param {Object} state
 * @return {*}
 */
export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].isAuthorizationRequired;
};
