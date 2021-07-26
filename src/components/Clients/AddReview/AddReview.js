import React from "react";
import "./AddReview.css";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddReview = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const reviewData = {
      name: data.name,
      designation: data.designation,
      description: data.description,
    };
    const url = `https://aqueous-wave-83012.herokuapp.com/addReview`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log("server site response", res));
  };
  return (
    <div className="container-fluid cf-sec">
      <div className="container pt-5">
        <div className="row d-flex align-items-center justify-content-center pb-5 raw-sec">
          <h1 className="mt-5 text-center">Add Review</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="w-50">
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name"
                name="name"
                {...register("name")}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Designation</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="designation"
                name="designation"
                {...register("designation")}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Write your review</label>
              <textarea
                type="text"
                rows="2"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="description"
                name="description"
                {...register("description")}
              />
            </div>
            <Button className="btn-c" size="lg" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
