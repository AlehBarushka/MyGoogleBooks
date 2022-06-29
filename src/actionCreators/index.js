import {
  GET_BOOKS_LIST_FAILURE,
  GET_BOOKS_LIST_PENDING,
  GET_BOOKS_LIST_SUCCESS,
  GET_MORE_BOOKS_FAILURE,
  GET_MORE_BOOKS_PENDING,
  GET_MORE_BOOKS_SUCCESS,
} from '../actions';

export const getBooks = ({ searchTerm, category, page, sort }) => ({
  type: GET_BOOKS_LIST_PENDING,
  payload: { searchTerm, category, page, sort },
});

export const getBooksSuccess = data => ({
  type: GET_BOOKS_LIST_SUCCESS,
  payload: data,
});

export const getBooksFailure = error => ({
  type: GET_BOOKS_LIST_FAILURE,
  payload: error,
});

export const getMoreBooks = ({ searchTerm, category, page, sort }) => ({
  type: GET_MORE_BOOKS_PENDING,
  payload: { searchTerm, category, page, sort },
});

export const getMoreBooksSuccess = data => ({
  type: GET_MORE_BOOKS_SUCCESS,
  payload: data,
});

export const getMoreBooksFailure = error => ({
  type: GET_MORE_BOOKS_FAILURE,
  payload: error,
});
