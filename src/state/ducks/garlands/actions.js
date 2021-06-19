/* ACTION CREATOR FUNCTIONS
Put here the functions that return an action object that can be dispatched
HINT: Always use functions for consistency, don't export plain objects
*/

import { createActions } from 'redux-actions';

const garlandsActions = createActions({
  getLevelingAction: () => ({}),
  getLevelingActionSuccess: (data) => ({ data }),

  getCraftRecipeList: (jobName, recipeCode) => ({ jobName, recipeCode }),
  getCraftRecipeListSuccess: (data) => ({ data }),
});

export default garlandsActions;
