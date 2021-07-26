import React from "react";
import "./ShowReviews.css";
import { FaUserEdit } from "react-icons/fa";

const ShowReviews = ({ review }) => {
  return (
    <div className="review-items shadow">
      <div className="row d-flex">
        <div className="col-2 ">
          <FaUserEdit
            className="rounded-circle shadow rounded r-icon px-2"
            size="3rem"
          />
        </div>
        <div className="col-10">
          <h6 className="m-0 text-light shadow">{review.name}</h6>
          <p className="m-0 text-secondary">{review.designation}</p>

          <p>{review.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowReviews;
