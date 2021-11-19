import React, { useEffect, useState } from "react";
import { getDetails } from "../../../api/books";
import {
  Spinner,
  CardBody,
  CardTitle,
  CardSubtitle,
  Card,
  CardText,
  Button,
} from "reactstrap";
import "./styles.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

const BookDetailsHook = () => {
  // const [book, setBook] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
   const { id } = useParams();

  const dispatch = useDispatch();
  const { bookData, isLoading } = useSelector((state) => state.book);

  

  useEffect(() => {
     //console.log(this.props);
     dispatch(getDetails(id));
  }, []);

  return (
    <>
      {isLoading && <Spinner>Loading...</Spinner>}
      <Card className="detail">
        <CardBody>
          <CardTitle tag="h5">{bookData.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {bookData.description}
          </CardSubtitle>
          <CardText>{bookData.excerpt}</CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default BookDetailsHook;
