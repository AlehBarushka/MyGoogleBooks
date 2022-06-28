import { GET_BOOKS_LIST_FAILURE, GET_BOOKS_LIST_PENDING, GET_BOOKS_LIST_SUCCESS } from '../actions';

const initialState = { isLoading: false, books: [], total: 0, error: null };

const volumeListReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS_LIST_PENDING:
      return { ...state, isLoading: true };

    case GET_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        books: payload.items,
        total: payload.totalItems,
      };

    case GET_BOOKS_LIST_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default volumeListReducer;
