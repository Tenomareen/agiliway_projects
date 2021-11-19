const initialState = {
  bookData: {},
  isLoading: true,
};

const GET_BOOK_BY_ID = "GET_BOOK_BY_ID";
const TOGGLE_LOADING = "TOGGLE_LOADING";

export const getBookDetailAction = (payload) => ({
  type: GET_BOOK_BY_ID,
  payload,
});
export const toggleLoading = () => ({ type: TOGGLE_LOADING });

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_BY_ID:
      return { isLoading: false, bookData: action.payload };
    case TOGGLE_LOADING:
      return { ...initialState };
    default:
      return state;
  }
};

export default bookReducer;
