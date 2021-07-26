import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Appointment.css";
import PaymentSystem from "../PaymentSystem/PaymentSystem";
import { UserContext } from "../../../App";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import Sidenav from "../../Shared/Sidebar/Sidenav";

const Appointment = () => {
  const [loggedInUser] = useContext(UserContext);
  const [appointmentData, setAppointmentData] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setAppointmentData(data);
  };

  const handlePaymentSuccess = (paymentId) => {
    const appointmentDetails = {
      ...loggedInUser,
      serviceName: apt?.name,
      serviceCharge: apt?.price,
      service: appointmentData,
      paymentId,
      orderTime: new Date(),
      status: "pending",
    };
    fetch("https://aqueous-wave-83012.herokuapp.com/addAppointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(appointmentDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  const { _id } = useParams();
  console.log(_id);
  const [appointment, setAppointment] = useState([]);
  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/Services")
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, []);
  const apt = appointment.find((pdq) => pdq?._id === _id);
  console.log(apt?.name);

  return (
    <>
      <Sidenav />
      <div className="container-fluid p-0 booking-sec">
        <div className="container pt-3 pb-5">
          <div className="row d-flex align-items-center justify-content-evenly pb-5 raw-sec">
            <h1 className="mt-3 text-center">Book An Appointment</h1>
            <div className="col-md-6 col-xl-6 col-lg-6 col-sm-12 text-white pl-5">
              <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                <div className="form-group w-75">
                  <label className="form-label">Name</label>
                  <input
                    className="form-control border-0 shadow-sm "
                    placeholder="Name"
                    name="name"
                    defaultValue={loggedInUser.name}
                    {...register("name")}
                    disabled
                    readOnly
                  />
                  <br />
                  <label className="form-label">Email</label>
                  <input
                    className="form-control border-0 shadow-sm "
                    placeholder=" email"
                    name="email"
                    defaultValue={loggedInUser.email}
                    {...register("email")}
                    disabled
                    readOnly
                  />
                  <br />
                  <label className="form-label">Service Name</label>
                  <input
                    className="form-control border-0 shadow-sm "
                    type="text"
                    defaultValue={apt?.name}
                    {...register("serviceName")}
                    disabled
                    readOnly
                  />
                  <br />
                  <label className="form-label">Service Charge</label>
                  <input
                    className="form-control border-0 shadow-sm"
                    type="text"
                    defaultValue={apt?.price}
                    {...register("price")}
                    disabled
                    readOnly
                  />
                  <br />
                  <Button size="lg" type="submit" className="btn-c">
                    Add Now
                  </Button>
                </div>
              </form>
            </div>
            <div
              style={{ display: appointmentData ? "block" : "none" }}
              className="col-md-6 col-xl-6 col-lg-6 col-sm-12 pl-5"
            >
              <PaymentSystem
                handlePayment={handlePaymentSuccess}
              ></PaymentSystem>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Appointment;
