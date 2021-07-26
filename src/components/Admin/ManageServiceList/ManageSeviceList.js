import React, { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import "./ManageService.css";
import swal from "sweetalert";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import loading from "../../../icons/Pulse-1s-200px.gif";
const ManageSeviceList = () => {
  const [manageServices, setManageServices] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/Services")
      .then((res) => res.json())
      .then((data) => setManageServices(data));
  }, []);

  const [allService, setAllService] = useState([]);
  const handleDeleteService = (id) => {
    fetch(`https://aqueous-wave-83012.herokuapp.com/deleteService/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remainService = allService.filter((ms) => ms._id !== id);
          setAllService(remainService);
          swal("Success", `${data.message}`, "success");
        } else {
          swal("Sorry", `${data.message}`, "error");
        }
      });
  };

  return (
    <>
      <div className="container-fluid ms-sec">
        <div className="container">
          <h3
            className="text-center pt-5"
            style={{ color: "azure", fontWeight: "bold" }}
          >
            All Appointments List
          </h3>
          {manageServices.length !== 0 ? (
            <div className="row d-flex justify-content-center align-items-center mt-3 px-5">
              <Table
                responsive
                striped
                hover
                style={{
                  // padding: "20px",
                  backgroundColor: "#FFFADE",
                  borderRadius: "10px",
                  border: "none",
                }}
              >
                <thead className="t-head border-primary">
                  <tr>
                    <th className="border-top-0 border-primary">Image</th>
                    <th className="border-top-0 border-primary">Services</th>
                    <th className="border-top-0 border-primary">Price</th>
                    <th className="border-top-0 border-primary">Delete</th>
                    <th className="border-top-0 border-primary">Edit</th>
                  </tr>
                </thead>
                {manageServices.map((ms) => {
                  return (
                    <tbody key={ms._id} className="w-75 fw-bold text-secondary">
                      <tr>
                        <td>
                          <img
                            height="45"
                            width="40"
                            className="img-responsive img-fluid"
                            src={ms.imageURL}
                            alt=""
                          />
                        </td>
                        <td className="text-secondary">{ms.name}</td>
                        <td className="text-secondary">{ms.price}</td>
                        <td>
                          <MdDelete
                            onClick={() => handleDeleteService(ms._id)}
                            size="2em"
                            color="red"
                            className="shadow"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Delete a service"
                          />
                        </td>
                        <td className="border-primary">
                          <FaEdit
                            size="2em"
                            color="blue"
                            className="shadow"
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Edit a service"
                          />
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

export default ManageSeviceList;
