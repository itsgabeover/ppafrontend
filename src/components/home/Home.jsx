import React from "react";
import { CTA } from "../../components";
import { Header, Features, Footer } from "../../containers";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <Features />
      <CTA />
      <Footer />
    </div>
  );};

export default Home;
