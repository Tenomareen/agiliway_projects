import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody,CardTitle,CardText,CardSubtitle,Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";

const Book = ({ book }) => {

    // useEffect(() => {
    //     console.log("books",book);
    //   })
  return (
    <>
      
      {/* <div className="card"> */}
        <Card>
          {/* <CardBody> */}
            <CardTitle tag="h5">{book.title}</CardTitle>
            <CardText>
              {book.description.slice(0, 360) + "..."}
            </CardText>
            <Link to={`/books/${book.id}`}>
            <Button>Details</Button>
            </Link>
          {/* </CardBody> */}
        </Card>
      {/* </div> */}
    </>
  );
};

export default Book;
