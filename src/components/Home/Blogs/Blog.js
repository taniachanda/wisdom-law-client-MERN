import React from "react";
import Blogshow from "./BlogShow";
import { useEffect } from "react";
import AOS from "aos";
const Blog = () => {
  const BlogData = [
    {
      heading: "When is Work Cover a Serious Injury?",
      details:
        " Don’t act so surprised, Your Highness. You weren’t on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened ...",
      img: "https://i.ibb.co/kSWRBnq/blog3.webp",
      date: "MARCH 8, 2021",
    },
    {
      heading: "How to Make a Claim Against an Airline",
      details:
        " Don’t act so surprised, Your Highness. You weren’t on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened ...",
      img: "https://i.ibb.co/zGjHZ3S/blog2.webp",
      date: "MARCH 9, 2021",
    },
    {
      heading: "Insights Domestic Violence Defense",
      details:
        " Don’t act so surprised, Your Highness. You weren’t on any mercy mission this time. Several transmissions were beamed to this ship by Rebel spies. I want to know what happened ...",
      img: "https://i.ibb.co/HpKCDwF/blog1.webp",
      date: "MARCH 10, 2021",
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 500, offset: 300 });
  }, []);
  return (
    <div style={{ background: "#fff", paddingBottom: "80px" }} id="blog">
      <div className="container">
        <div className="text-center mb-5 pt-5 text-secondary">
          <h2 className="fs-1" data-aos="zoom-in">
            LATEST NEWS
          </h2>
        </div>
        <div className="row">
          {BlogData.map((blog) => (
            <div className="col-md-6 col-sm-12 col-xl-4" data-aos="zoom-in">
              <Blogshow blog={blog} key={blog.name}></Blogshow>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
