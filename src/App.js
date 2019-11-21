import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
//
import Main from "./components/main";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout >
            <Header title="Swank PR, L.L.C" scroll style={{ backgroundColor: "black" }}>
              <Navigation>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/clients">Clients</Link>
              </Navigation>
            </Header>
            <Drawer title="Swank PR, L.L.C">
              <Navigation>
                {/* <Link to="/home">Home</Link> */}
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/clients">Clients</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>

        <Footer />
      </div>

    );
  }
}

export default App;
