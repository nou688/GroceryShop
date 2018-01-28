// reducers/index.js

import { combineReducers } from 'redux';
import routes from './routes';
import auth from './auth';
// ... other reducers

const rootReducer = combineReducers({
  routes,
  auth
  // ... other reducers
});
export default rootReducer;
