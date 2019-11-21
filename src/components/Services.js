import React from "react";
//
import Hero from "../components/Hero";
import Footer from "../components/Footer";
//
// import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Services() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Services</h1>
      </Hero>

      <div style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "black" }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", color: "white" }}>What we do.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{ color: "white" }}>
             Again, hoping to put some photos or animations here for what services you offer.
            </p>
          </Col>
        </Row>
      </div>

      <Footer />
    </div>
  );
}

export default Services;

