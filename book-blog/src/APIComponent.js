import React from "react";
import { connect } from "react-redux";
import { getBooks } from "./api/books";
import Books from "./pages/Books/BookList/bookList";
import { getBooksAction } from "./store/reducers/booksReducer";

class APIComponent extends React.Component {

  componentDidMount() {
   this.props.getData();
  }

  render() {
    return (
      <div>
          <Books
          bookList={this.props.data}
          loading={this.props.loading}
          />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.books.bookList,
  loading: state.books.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => {
      dispatch(getBooks());
  }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(APIComponent);