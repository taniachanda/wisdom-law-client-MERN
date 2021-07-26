import React from "react";
import "./ServiceDetail.css";
import { Link } from "react-router-dom";

const ServiceDetails = ({ service }) => {
  return (
    <>
      <div className="hovereffect shadow-lg">
        <div className="d-flex justify-content-center pt-5">
          <img
            height="85"
            width="80"
            className="img-responsive img-fluid"
            src={service.imageURL}
            alt={service.name}
          />
        </div>
        <h4 className="pt-3 s-text">{service.name}</h4>
        <p className="p-3 s-text">{service.description}</p>
        <div className="overlay">
          <h2>{service.price}</h2>
          <Link to={`/appointment/${service._id}`}>
            <button className="btn-c info">CONSULT NOW</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
