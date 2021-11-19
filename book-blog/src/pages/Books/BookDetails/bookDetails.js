import React from "react";
import { getDetails } from "../../../api/books";
import { Spinner, CardBody, CardTitle, CardSubtitle, Card, CardText, Button } from "reactstrap";
import "./styles.scss";
import { connect } from "react-redux";

class BookDetails extends React.Component {

  componentDidMount() {
    this.props.getBookData(this.props.match.params.id);
  }

  render() {
   // console.log("Test",this.props);
    return (
      <>
        {this.props.loading && <Spinner>Loading...</Spinner>}
        <Card className="detail">
    <CardBody>
      <CardTitle tag="h5">
        {this.props.data.title}
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {this.props.data.description}
      </CardSubtitle>
      <CardText>
        {this.props.data.excerpt}
      </CardText>
    </CardBody>
  </Card>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  data: state.book.bookData,
  loading: state.book.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getBookData: (id) => {
      dispatch(getDetails(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails);
