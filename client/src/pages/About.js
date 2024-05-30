import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            It is a food website where anyone can order the food and then the bill of the order was generated and after you pay the bill,your order will be deliver soon.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
