import React, { useEffect, useState } from "react";
import { getBooks } from "./api/books";
import Books from "./pages/Books/BookList/bookList";
import "./styles.scss";
import Paginations from "./pages/Books/BookList/Pagination";
import { connect, useDispatch, useSelector } from "react-redux";
import { getBooksAction } from "./store/reducers/booksReducer";

const APIComponentHook = () => {
  const dispatch = useDispatch();
  const { bookList, isLoading } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="center">
      {bookList?.length && <Books bookList={bookList} loading={isLoading} />}
      {/* <Paginations 
            booksPerPage={booksPerPage}
            totalBooks={this.props.data.length}
            paginate={paginate}
            currentPage={currentPage}
            /> */}
    </div>
  );
};

export default APIComponentHook;
