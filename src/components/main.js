import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
import landingpage from "./landingpage";
// import Home from "./Home";
// import About from "./About";
// import Clients from "./Clients";
// import Services from "./Services";

const Main = () => (
  <Switch>
    <Route exact path="/" component={landingpage} />
    {/* <Route path="/about" component={About} />
    <Route path="/clients" component={Clients} />
    <Route path="/services" component={Services} /> */}
  </Switch>
)

export default Main;