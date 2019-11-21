import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import { Link } from "react-router-dom";
import Main from "./components/main";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Clients from "./pages/Clients";
// import Services from "./pages/Services";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";



function App() {
  return (
    // <Router>
    <div>

      {/* <Navbar />
        <Wrapper>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/services" component={Services} />
        </Wrapper> */}


      <div className="demo-big-content">
        <Layout >
          <Header title="Swank PR, L.L.C" scroll style={{ backgroundColor:"black"}}>
            <Navigation>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/clients">Clients</Link>
            </Navigation>
          </Header>
          <Drawer title="Swank PR, L.L.C">
            <Navigation>
              <Link to="/home">Home</Link>
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

    // </Router>
  );
}

export default App;
