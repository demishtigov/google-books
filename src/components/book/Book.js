import React from "react";
import "../search/search.css";
import { useLocation, useHistory } from "react-router";
import "./book.css";
import Button from "@material-ui/core/Button";

const Book = () => {
  const location = useLocation();
  const { goBack } = useHistory();

  return (
    <>
      <Button id='back' variant="contained" color="primary" onClick={goBack}>
        Go Back
      </Button>
      <div className="item" key={location.state.id}>
        <div className="item__card">
          <img
            src={location.state.img}
            alt={location.state.title}
            className="item__img"
          />
        </div>
        <div className="item__desc">
          <p className="item__category">{location.state.categories}</p>
          <h4 className="item__title">{location.state.title}</h4>
          <p className="item__authors">{location.state.authors}</p>
          <div className="item__text">{location.state.desc}</div>
        </div>
      </div>
    </>
  );
};

export default Book;
