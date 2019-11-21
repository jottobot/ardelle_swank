import React from "react";
import Hero from "../components/Hero";
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Clients() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Swank's Clients</h1>
      </Hero>

      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "white" }}>
        <Row>
          <p>Hoping to put some sort of grid like table here for clients. Will have the company's photo and a description of what you did.</p>
        </Row>
      </Container>

    </div>
  );
}

export default Clients;