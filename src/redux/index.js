import { combineReducers } from 'redux';

import registrationReducer from './registration/registrationReducers';

const blogState = combineReducers({
    registrationReducer,
});

export default blogState;
