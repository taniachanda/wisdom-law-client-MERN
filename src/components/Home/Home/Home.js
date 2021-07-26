import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import Lawyers from "../LawyersData/Lawyers";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Blog from "../Blogs/Blog";

const Home = () => {
  return (
    <>
      <Header component={Header} />
      <Lawyers component={Lawyers} />
      <Services component={Services} />
      <Reviews component={Reviews} />
      <Blog component={Blog} />
      <Footer component={Footer} />
    </>
  );
};

export default Home;
