import React from 'react';
import { Switch, Route } from 'react-router-dom';
//
import Home from "./Home";
import About from "./About";
import Clients from "./Clients";
import Services from "./Services";

const Main = () => (
  // <Switch>
  //   <Route exact path="/" component={Home} />
  //   <Route path="/about" component={About} />
  //   <Route path="/clients" component={Clients} />
  //   <Route path="/services" component={Services} />
  // </Switch>

  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/clients" component={Clients} />
    <Route path="/services" component={Services} />
    {/* <Route path="/resume" component={Resume} /> */}
  </Switch>


)

export default Main;