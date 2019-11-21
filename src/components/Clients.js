import React from "react";
//
import Container from 'react-bootstrap/Container'
// import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, CardActions, CardMenu, CardTitle, CardText, Button, IconButton } from "react-mdl";
//
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Clients() {
  return (
    <div>
      <Hero backgroundImage="https://i.imgur.com/qkdpN.jpg">
        <h1>Swank's Clients</h1>
      </Hero>

      <Container style={{ paddingTop: 30, paddingLeft: 30, paddingRight: 30, paddingBottom: 30, backgroundColor: "white" }}>
        <Row>
          <p>At Swank, our clients mean the world to us BLAH BLAH.</p>
        </Row>
      </Container>

      <Row>
        <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          {/* <CardActions border>
          <Button colored>Get Started</Button>
        </CardActions> */}
          {/* <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu> */}
        </Card>

        <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          {/* <CardActions border>
          <Button colored>Get Started</Button>
        </CardActions> */}
          {/* <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu> */}
        </Card>
      </Row>

      <Row>
        <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          {/* <CardActions border>
          <Button colored>Get Started</Button>
        </CardActions> */}
          {/* <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu> */}
        </Card>
        <Card shadow={0} style={{ width: '400px', margin: 'auto', marginTop: "50px", marginBottom: "50px" }}>
          <CardTitle style={{ color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover' }}>CLIENT NAME</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris sagittis pellentesque lacus eleifend lacinia...
        </CardText>
          {/* <CardActions border>
          <Button colored>Get Started</Button>
        </CardActions> */}
          {/* <CardMenu style={{ color: '#fff' }}>
          <IconButton name="share" />
        </CardMenu> */}
        </Card>
      </Row>

      <Footer />
    </div>
  );
}

export default Clients;