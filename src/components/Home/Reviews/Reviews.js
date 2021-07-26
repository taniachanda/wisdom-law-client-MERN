import React, { useEffect, useState } from "react";
import ShowReviews from "../ShowRiviews/ShowReviews";
import AOS from "aos";

const Reviews = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);
  return (
    <div className="container-fluid r-section" id="testimonial">
      <div className="text-center">
        <h2 className="p-5 text-light fs-1" data-aos="zoom-in">
          Client Testimonial
        </h2>
      </div>
      <div className="row pb-5">
        {reviews.map((review) => (
          <div className="col-md-4 mb-5" data-aos="zoom-in">
            <ShowReviews key={review._id} review={review}></ShowReviews>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
