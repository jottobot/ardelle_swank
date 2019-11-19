import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>About Swank.</h1>
      </Hero>

      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "black" }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", color: "white" }}>A look into what makes Swank.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{ color: "white" }}>
              Swank PR, L.L.C. is an efficient and results oriented PR firm specializing in real estate and lifestyle public relations. Founded in 2019, Swank PR L.L.C. offers strategic solutions for an array of clients, and seeks to use digital platforms to enhance interpersonal relations rather than isolate them.
             </p>
             <p style={{ color: "white" }}>
              While the firm’s client portfolio continues to expand, Ardelle Swank, Founder and Owner, is thoughtful and strategic about client engagements. By maintaining direct contact with every account and relationship, this ensures that clients have access to a senior level expert at all times.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col size="6">
          <p>
            Meet the founder, Ardelle Swank.
          </p>
          <p> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </Col>
          <Col size="6">
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default About;
