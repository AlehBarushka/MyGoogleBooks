import {
  GET_BOOKS_LIST_FAILURE,
  GET_BOOKS_LIST_PENDING,
  GET_BOOKS_LIST_SUCCESS,
  GET_MORE_BOOKS_FAILURE,
  GET_MORE_BOOKS_PENDING,
  GET_MORE_BOOKS_SUCCESS,
} from '../actions';

const initialState = {
  isLoading: false,
  isLoadingButton: false,
  books: [],
  total: 0,
  error: null,
  searchTerm: {},
};

const volumeListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_LIST_PENDING:
      return { ...state, isLoading: true };

    case GET_MORE_BOOKS_PENDING:
      return { ...state, isLoadingButton: true };

    case GET_MORE_BOOKS_SUCCESS:
      return {
        ...state,
        isLoadingButton: false,
        searchTerm: payload.searchTerm,
        books: [...state.books, ...payload.items],
        error: null,
      };

    case GET_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        total: payload.totalItems,
        searchTerm: payload.searchTerm,
        books: payload.items,
        error: null,
      };

    case GET_BOOKS_LIST_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    case GET_MORE_BOOKS_FAILURE:
      return {
        ...state,
        error: payload,
        isLoadingButton: false,
      };

    default:
      return state;
  }
};

export default volumeListReducer;
