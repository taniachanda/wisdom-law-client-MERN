import React, { useState } from "react";
import "./AddService.css";
// import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import axios from "axios";
// import { useHistory } from 'react-router';
import { HiOutlineCamera } from "react-icons/hi";
// import Dashboard from "../../Dashboard/Dashboard";

const AddService = () => {
  // const history = useHistory();
  const { register, handleSubmit } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const serviceData = {
      name: data.name,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://aqueous-wave-83012.herokuapp.com/addService`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => console.log("server site response", res));
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2159b67279a85b6c11df81c60487635e");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container-Fluid cf-sec">
        <div className="container pt-5">
          <div className="row d-flex align-items-center justify-content-center pb-3 raw-sec">
            <h1 className="mt-3 text-center text-white">Add a service</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="w-50">
              <label className="form-label text-white font-weight-bold mt-2">
                Name
              </label>
              <input
                className="form-control"
                placeholder="Name"
                name="name"
                defaultValue=""
                {...register("name")}
              />
              <label className="form-label text-white font-weight-bold mt-2">
                Description
              </label>
              <textarea
                className="form-control"
                placeholder=" Description"
                name="description"
                defaultValue=""
                {...register("description")}
              />
              <label className="form-label text-white font-weight-bold mt-2">
                Price
              </label>
              <input
                className="form-control form-control"
                placeholder=" Price"
                price="price"
                defaultValue=""
                {...register("price")}
              />
              <label className="form-label text-white font-weight-bold mt-2">
                Add a image
              </label>
              <div className="custom-file">
                <input
                  name=""
                  className="custom-file-input hidden"
                  type="file"
                  onChange={handleImageUpload}
                />
                <label className="custom-file-label">
                  {" "}
                  <HiOutlineCamera color="skyblue" size="1.5em" />
                </label>
              </div>
              <Button className="btn-c mt-3" size="lg" type="submit">
                Add Now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddService;
