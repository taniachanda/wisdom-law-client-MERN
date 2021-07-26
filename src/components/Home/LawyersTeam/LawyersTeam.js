import React from "react";
import "./LawyersTeam.css";
import { Card } from "react-bootstrap";
import {
  FaGooglePlusG,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const LawyersTeam = ({ info }) => {
  return (
    <Card className="mt-3 bg-transparent border-0">
      <Card.Img variant="top" src={info.image} className="img-fluid" />
      <Card.Body className="text-start">
        <Card.Title className="l-text">
          {info.name} <br /> <small>{info.occupation}</small>
        </Card.Title>
        <Card.Text className="l-text">
          <FaGooglePlusG size="1.5em" className="mr-2 shadow" />
          <FaLinkedinIn size="1.5em" className="mr-2 shadow" />
          <FaFacebookF size="1.3em" className="mr-2 shadow" />
          <FaTwitter size="1.5em" className="shadow" />
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default LawyersTeam;
