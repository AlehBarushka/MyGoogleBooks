import { GET_BOOKS_LIST_FAILURE, GET_BOOKS_LIST_PENDING, GET_BOOKS_LIST_SUCCESS } from '../actions';

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
