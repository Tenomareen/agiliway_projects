import React from "react";
import { Row, Spinner } from "reactstrap";
import Book from "../BookItem/bookItem";
import "./styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { getBooks } from "../../../api/books";
import { connect } from "react-redux";

const Books = ({ bookList, loading, page, handleRight, handleLeft }) => {

  return (
    <>
      <h1>Books List</h1>
      <div>
        <div>
          <Row>
            {!loading &&
              bookList.map((book, index) => {
                return <Book book={book} />;
              })}
          </Row>
        </div>
        {loading && <Spinner>Loading...</Spinner>}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.books.bookList,
    isLoading: true,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getBooks());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);
