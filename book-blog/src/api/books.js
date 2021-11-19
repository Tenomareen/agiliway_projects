import client from "./client";
import { getBooksAction } from "../store/reducers/booksReducer";
import { getBookDetailAction, toggleLoading } from "../store/reducers/bookDetailReducer";

export const getBooks = () => {
  return (dispatch) => {
    client.get("/books").then((response) => {
      dispatch(getBooksAction(response.data));
    });
  };
};

export const getDetails = (id) => {
  return (dispatch) => {
    dispatch(toggleLoading());
    client.get(`/books/${id}`).then((response) => {
      dispatch(getBookDetailAction(response.data));
    });
  };
};
