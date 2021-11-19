const initialState = {
  bookList: [],
  isLoading: true,
};

const GET_ALL_BOOKS = "GET_ALL_BOOKS";

export const getBooksAction = (payload) => ({ type: GET_ALL_BOOKS, payload });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS:
      return { isLoading: false, bookList: [...action.payload] };
    default:
      return state;
  }
};

export default booksReducer;
