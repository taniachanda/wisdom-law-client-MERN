import React from "react";
import { useEffect } from "react";
import LawyersTeam from "../LawyersTeam/LawyersTeam";
import AOS from "aos";

const Lawyers = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);

  const lawyersData = [
    {
      id: 1,
      name: "Avie Beaton",
      occupation: "Tax Lawyer",
      image: "https://i.ibb.co/z6kvZ9Y/lawyer1.jpg",
      email: "support@wisdom.com",
      tel: "230-200-3030",
    },
    {
      id: 2,
      name: "Rodney Stratton",
      occupation: "Finance Lawyer",
      image: "https://i.ibb.co/P9SZrmP/lawyer2.jpg",
      email: "support@wisdom.com",
      tel: "430-200-4040",
    },
    {
      id: 3,
      name: "Ben Jonson",
      occupation: "Criminal Defence Lawyer",
      image: "https://i.ibb.co/BZ5MmHW/lawyer3.jpg",
      email: "support@wisdom.com",
      tel: "401-200-5050",
    },
    {
      id: 4,
      name: "Ashley Fletcher",
      occupation: "Divorce Lawyer",
      image: "https://i.ibb.co/41QBRSt/lawyer4.jpg",
      email: "support@wisdom.com",
      tel: "400-100-5050",
    },
  ];
  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);
  return (
    <div style={{ background: "#908CB8", paddingBottom: "80px" }}>
      <div className="container">
        <div
          className="text-center mb-5 pt-5 l-text"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
        >
          <h2 className="fs-1" data-aos="zoom-in">
            MEET OUR ATTORNEYS
          </h2>
        </div>
        <div className="row">
          {lawyersData.map((info) => (
            <div className="col-md-6 col-sm-12 col-xl-3" data-aos="zoom-in">
              <LawyersTeam info={info} key={info.id}></LawyersTeam>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lawyers;
