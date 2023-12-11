import { combineReducers } from 'redux';

import example from './example';

const rootReducer = combineReducers({
  example,
});

export default rootReducer;

//////////////////////////////////////////////////////////////
export * from './example';

export type RootState = ReturnType<typeof rootReducer>;
