import { combineReducers } from 'redux';

import volumeListReducer from './volumeList';

const rootReducer = combineReducers({ volumeList: volumeListReducer });

export default rootReducer;
