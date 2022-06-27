import { combineReducers } from 'redux';
import volumeReducer from './volumeList';

const rootReducer = combineReducers({ volumeList: volumeReducer });

export default rootReducer;
