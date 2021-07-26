import React, { useEffect, useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import loading from "../../../icons/Pulse-1s-200px.gif";
import AOS from "aos";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-wave-83012.herokuapp.com/Services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);
  return (
    <div
      id="services"
      className="container-fluid"
      style={{ background: "#000740", paddingBottom: "80px" }}
    >
      <div className="container">
        <div className="text-center s-text">
          <h2 className="p-5 fs-1" data-aos="zoom-in">
            OUR PRACTICE AREA
          </h2>
        </div>
        {services.length !== 0 ? (
          <div className="row">
            {services.map((service) => (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-5"
                data-aos="zoom-in"
              >
                <ServiceDetails
                  key={service._id}
                  service={service}
                ></ServiceDetails>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <img className="text-center" src={loading} alt="loading..." />
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
