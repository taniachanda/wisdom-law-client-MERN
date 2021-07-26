import React from "react";
import { useState } from "react";
// import { useContext } from "react";
import { Button } from "react-bootstrap";
// import { useForm } from "react-hook-form";
import swal from "sweetalert";
// import { UserContext } from "../../../App";

const MakeAdmin = () => {
  // const [loggedInUser] = useContext(UserContext);
  // const { register, handleSubmit } = useForm();

  const [adminMail, setAdminMail] = useState("");

  const handleSubmit = () => {
    const eventValue = { email: adminMail };

    fetch("https://aqueous-wave-83012.herokuapp.com/addAdmin", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventValue),
    }).then((res) => {
      swal("YAY!", "You email added!", "success");
    });
  };
  return (
    <div
      className="container-Fluid"
      style={{ height: "100vh", backgroundColor: "#3A3D7C" }}
    >
      <div className="row d-flex align-items-center justify-content-center">
        <h1 className="mt-5 text-center text-white">Make a admin</h1>
        <form className="w-50">
          <div className="mb-3">
            <label className="form-label text-white font-weight-bold">
              Input an emali address
            </label>
            <input
              onBlur={(e) => {
                setAdminMail(e.target.value);
              }}
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              name="email"
            />
          </div>
          <Button
            onClick={() => {
              handleSubmit();
            }}
            className="btn-c"
            size="lg"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
