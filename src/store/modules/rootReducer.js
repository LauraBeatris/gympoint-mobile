import { combineReducers } from 'redux';

import { auth } from './auth/reducers';
import { student } from './student/reducers';

export default combineReducers({ auth, student });
