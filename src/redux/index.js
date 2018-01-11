import { combineReducers } from 'redux';
import {reducer as notifications} from 'react-notification-system-redux';
import registrationReducer from './registration/registrationReducers';

const blogState = combineReducers({
  registrationReducer,
  notifications
});

export default blogState;
