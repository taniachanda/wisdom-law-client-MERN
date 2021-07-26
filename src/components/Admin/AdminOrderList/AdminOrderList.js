import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import swal from "sweetalert";
import loading from "../../../icons/Pulse-1s-200px.gif";
const AdminOrderList = () => {
  const [orders, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/appointments")
      .then((res) => res.json())
      .then((data) => setOrder(data));
  });

  const changeStatus = (id, e) => {
    const value = e.target.value;
    fetch(`https://aqueous-wave-83012.herokuapp.com/secureOrder/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          fetch("https://aqueous-wave-83012.herokuapp.com/updateStatus", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, status: value }),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result) {
                swal("YES!", "Status Updated", "success");
              }
            });
        }
      });
  };
  return (
    <>
      <div className="container-fluid ms-sec">
        <div className="container">
          <h3
            className="text-center p-3"
            style={{ color: "#072f58", fontWeight: "bold" }}
          >
            Appointments List Of The Client
          </h3>
          {orders.length !== 0 ? (
            <div className="d-flex justify-content-center align-items-center mt-3 px-5">
              <Table
                responsive
                striped
                hover
                style={{
                  backgroundColor: "#FFFADE",
                  borderRadius: "20px",
                }}
              >
                <thead className="t-head">
                  <tr>
                    <th>Services</th>
                    <th>Coustomer Name</th>
                    <th className="px-0">Email Address</th>
                    <th>Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                {orders.map((order) => {
                  return (
                    <tbody key={order._id}>
                      <tr className="border-bottom-0 fw-bold text-secondary">
                        <td className="o-text">{order.serviceName}</td>
                        <td>{order.name}</td>
                        <td className="o-text px-0" colSpan="1">
                          {order.email}
                        </td>
                        <td>{order.serviceCharge}</td>
                        <td>
                          {" "}
                          <td>
                            <select
                              id="select_options"
                              onChange={(e) => changeStatus(order._id, e)}
                              className="form-select"
                            >
                              <option
                                selected={
                                  order.status === "Pending" ? true : false
                                }
                                value="Pending"
                                className="text-warning"
                              >
                                Pending
                              </option>
                              <option
                                selected={
                                  order.status === "Done" ? true : false
                                }
                                value="Done"
                                className="text-success"
                              >
                                Done
                              </option>
                              <option
                                selected={
                                  order.status === "Rejected" ? true : false
                                }
                                value="Rejected"
                                className="text-danger"
                              >
                                Rejected
                              </option>
                            </select>
                          </td>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
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

export default AdminOrderList;
