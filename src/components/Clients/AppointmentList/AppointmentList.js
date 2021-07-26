import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "./../../../App";
import { Card } from "react-bootstrap";
import loading from "../../../icons/Pulse-1s-200px.gif";

const AppointmentList = () => {
  const [loggedInUser] = useContext(UserContext);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch(
      "https://aqueous-wave-83012.herokuapp.com/appointment?email=" +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => setBooking(data));
  });
  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#3A3D7C" }}>
        <div className="container">
          {booking.length !== 0 ? (
            <div className="row d-flex align-self-center justify-content-center">
              <div className="text-center text-white">
                <h2 className="p-5 fs-1">Appointment List</h2>
              </div>
              {booking.map((book) => {
                return (
                  <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 pl-5">
                    <Card
                      style={{
                        width: "19rem",
                        backgroundColor: "#031850",
                      }}
                      varient="Secondary"
                      className="border-0 shadow rounded-right mt-3"
                    >
                      {/* <Card.Header className="text-secondary">Invoice Id: {_id}</Card.Header> */}
                      <Card.Body>
                        <Card.Title className="text-info">
                          Service Name: {book.serviceName}{" "}
                        </Card.Title>
                        <Card.Title className="text-info">
                          Client Name: {book.name}
                        </Card.Title>
                        <Card.Text className="text-info">
                          Service Charge: {book.serviceCharge}{" "}
                        </Card.Text>
                        <Card.Text
                          className={`alert ${
                            book.status === "Rejected"
                              ? "alert-danger"
                              : book.status === "Done"
                              ? "alert-success"
                              : "alert-warning"
                          } mt-4 w-50 fw-bolder`}
                          role="alert"
                        >
                          {book.status}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="mt-4 d-flex justify-content-center align-items-center">
              <img className="text-center" src={loading} alt="loading..." />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppointmentList;
