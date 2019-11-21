import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from "react-router-dom";
//
import Main from "./components/main";
import Footer from "./components/Footer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="demo-big-content">
          <Layout >
            <Header style={{ backgroundColor: "black"}} title={<Link style={{ textDecoration: 'none', color: 'white'}} to="/">Swank PR, L.L.C.</Link>} scroll>
              {/* <Header title="Swank PR, L.L.C" scroll style={{ backgroundColor: "black" }}> */}
              <Navigation style={{ backgroundColor: "black" }}>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/clients">Clients</Link>
              </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Swank PR, L.L.C.</Link>}>
              <Navigation>
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
