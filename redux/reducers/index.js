import { combineReducers } from 'redux';
import { reportReducer } from './reportReducers';
import { questionnaireReducer } from './questionnaireReducers';
import { photoReducer } from './photoReducers';
import userReducer from './userReducers';
import { visitReducer, teamMemberReducer, pinReducer } from './visitReducer';

// COMBINED REDUCERS
const reducers = {
  reports: reportReducer,
  quesionnaire: questionnaireReducer,
  photos: photoReducer,
  user: userReducer,
  visit: visitReducer,
  teamMembers: teamMemberReducer,
  pin: pinReducer,
};

export default combineReducers(reducers);
