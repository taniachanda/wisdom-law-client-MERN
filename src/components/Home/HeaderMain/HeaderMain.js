import React from "react";
import "./HeaderMain.css";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import bg1 from "../../../image/h4-slide-1-new.jpg";
import bg2 from "../../../image/h7-s5-img.jpg";
import bg3 from "../../../image/h7-s3-img.jpg";
import icon2 from "../../../icons/1694262.png";
import icon3 from "../../../icons/2646693.png";
import icon4 from "../../../icons/994414.png";
import icon5 from "../../../icons/3733767.png";
import icon6 from "../../../icons/industry.png";
import icon7 from "../../../icons/labour.png";
import { useEffect } from "react";
import AOS from "aos";
const HeaderMain = () => {
  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);
  return (
    <>
      <div className="text-center" data-aos="zoom-in">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={bg1} alt="First slide" />
            <Carousel.Caption
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <p className="fs-1 fw-bold">
                You Deserve The Best <br />{" "}
                <span className="border-bottom py-2 border-warning">
                  Deffence Lawyers
                </span>
              </p>
              <p className="PY-2 fs-6 fw-bold fst-italic text-warning">
                WITH OVER 35 YEARS OF LAW PRACTICE IN USA COURTS
              </p>
              <Button className="text-white py-2 btn-c" size="lg">
                CONTACT US NOW <IoIosArrowForward />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bg2} alt="Second slide" />

            <Carousel.Caption
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <p
                className="text-warning"
                style={{ fontFamily: "Dynalight", fontSize: "25px" }}
              >
                protectting rights
              </p>
              <p className="fs-1 fw-bolder">
                Presentation of the <br />{" "}
                <span className="border-bottom py-2 border-warning">
                  International Law
                </span>
              </p>
              <p className="PY-2 fs-6 fw-bold fst-italic text-warning">
                WITH OVER 35 YEARS OF LAW PRACTICE IN USA COURTS
              </p>
              <Button className="text-white py-2 btn-c" size="lg">
                CONTACT US NOW <IoIosArrowForward />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={bg3} alt="Third slide" />
            <Carousel.Caption
              style={{
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <p
                className="text-warning"
                style={{ fontFamily: "Dynalight", fontSize: "25px" }}
              >
                quick response
              </p>
              <p className="fs-1 fw-bold">
                We guide you through <br />{" "}
                <span className="border-bottom py-2 border-warning">
                  Bankrupcy roblems
                </span>
              </p>
              <p className="PY-2 fs-6 fw-bold fst-italic text-warning">
                WITH OVER 35 YEARS OF LAW PRACTICE IN USA COURTS
              </p>
              <Button size="lg" className="text-white btn-c">
                CONTACT US NOW <IoIosArrowForward />
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="s-section">
        <div className="container">
          <div
            className="row  d-flex py-5 justify-content-md-center align-items-center"
            style={{ marginLeft: "-15px", marginRight: "-15px" }}
          >
            <div
              className="col col-md col-sm-3 text-center i-col"
              data-aos="zoom-in"
            >
              <img width="63" height="65" src={icon2} alt="BANKRUPCY" />
              <h6 className="py-3 fs-6 fw-bold">BANKRUPCY</h6>
            </div>
            <div
              className="col col-md col-sm-3 text-center i-col"
              data-aos="zoom-in"
            >
              {" "}
              <img width="63" height="65" src={icon3} alt="REAL STATE" />
              <h6 className="py-3 fs-6 fw-bold">REAL STATE</h6>
            </div>
            <div
              className="col col-md col-sm-3 text-center i-col"
              data-aos="zoom-in"
            >
              {" "}
              <img width="63" height="65" src={icon4} alt="PERSONAL INJURY" />
              <h6 className="py-3 fs-6 fw-bold">PERSONAL INJURY</h6>
            </div>
            <div
              className="col col-md col-sm-3 text-center i-col"
              data-aos="zoom-in"
            >
              {" "}
              <img width="63" height="65" src={icon5} alt="BUSINESS LAW" />
              <h6 className="py-3 fs-6 fw-bold">BUSINESS LAW</h6>
            </div>
            <div
              className="col col-md col-sm-3 text-center i-col"
              data-aos="zoom-in"
            >
              {" "}
              <img width="63" height="65" src={icon6} alt="INDUSTRIAL LAW" />
              <h6 className="py-3 fs-6 fw-bold">INDUSTRIAL LAW</h6>
            </div>
            <div className="col col-md col-sm-3 text-center" data-aos="zoom-in">
              {" "}
              <img width="63" height="65" src={icon7} alt="EMPLOYMENT LAW" />
              <h6 className="py-3 fs-6 fw-bold">EMPLOYMENT LAW</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderMain;
