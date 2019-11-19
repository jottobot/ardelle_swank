import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>SWANK PR, L.L.C.</h1>
        <h2>"Own it, someone has to"</h2>
      </Hero>
      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "black" }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", color: "white" }}>Illuminate Your Brand.</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{ color: "white" }}>
              Welcome to Swank PR, L.L.C., a Public Relations Consulting Firm that helps businesses like yours achieve unique goals. Our expert professionals will partner with your business to deliver tailor-made practical solutions, fast. Since 2000, we’ve supported numerous clients - and we’re confident we’re the right Public Relations Consulting Firm for you.
            </p>
          </Col>
        </Row>
      </Container>

      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "white" }}>
        <Row>
          <Col size="md-12">
            <h1 style={{ textAlign: "center", color: "black" }}>What We Do</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p style={{ color: "black" }}>
              Swank PR, L.L.C. exists to solve the critical issues facing our clients, both large and small. Our unique approach is not only what differentiates us, but also what makes us successful. We provide a broad range of services and solutions to help organizations facilitate change, achieve their vision and optimize performance and productivity.
            </p>
          </Col>
        </Row>
        {/* <Row>
          <Col size="4">
            <p>This.</p>
          </Col>
          <Col size="4">
          <p>That.</p>
          </Col>
          <Col size="4">
          <p>The Other.</p>
          </Col>
        </Row> */}
      </Container>

      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "gray" }}>
        <Row>
        <h3>Contact</h3>
        </Row>
      </Container>

    </div>
  );
}

export default Home;
