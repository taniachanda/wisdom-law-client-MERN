import React from "react";

import "./Blogs.css";
import { Card } from "react-bootstrap";
const Blogs = ({ blog }) => {
  return (
    <Card className="border-0 bg-transparent" style={{ width: "22rem" }}>
      <Card.Img
        variant="top"
        src={blog.img}
        className="img-fluid w-100 h-100"
        alt="blog"
      />
      <Card.Body className="pl-0">
        <Card.Text>
          <small>{blog.date}</small>
        </Card.Text>
        <Card.Text className="fs-3 lh-sm text-secondary">
          {blog.heading}
        </Card.Text>
        <Card.Text className="lh-base"> {blog.details}</Card.Text>
        <Card.Text className="lh-base text-primary"> Read More...</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Blogs;
