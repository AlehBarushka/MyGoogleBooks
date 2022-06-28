import { takeEvery, put, call, all } from 'redux-saga/effects';

import { googleBooksApi } from '../services';

import { getBooksSuccess, getBooksFailure } from '../actionCreators';
import { GET_BOOKS_LIST_PENDING } from '../actions';

function* getBooks({ payload }) {
  try {
    const { totalItems, items } = yield call(googleBooksApi.getBooks, payload);

    yield put(getBooksSuccess({ totalItems, items }));
  } catch ({ response: { data } }) {
    yield put(getBooksFailure(data.error));
  }
}

export function volumeListSaga() {
  return all([takeEvery(GET_BOOKS_LIST_PENDING, getBooks)]);
}
