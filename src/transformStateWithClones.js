'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const states = [];
  const copyOfState = { ...state };

  for (const element of actions) {
    if (element.type === 'addProperties') {
      Object.assign(copyOfState, element.extraData);
    }

    if (element.type === 'removeProperties') {
      for (const key of element.keysToRemove) {
        delete copyOfState[key];
      }
    }

    if (element.type === 'clear') {
      for (const key in copyOfState) {
        delete copyOfState[key];
      }
    }

    states.push({ ...copyOfState });
  }

  return states;
}

module.exports = transformStateWithClones;
