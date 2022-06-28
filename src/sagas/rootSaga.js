import { all } from 'redux-saga/effects';
import { volumeListSaga } from './volumeList';

function* rootSaga() {
  yield all([volumeListSaga()]);
}

export default rootSaga;
