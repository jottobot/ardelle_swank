import React from "react";
import { Switch, Route } from "react-router-dom";
//
import Home from "./Home";
import About from "./About";
import Clients from "./Clients";
import Services from "./Services";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/clients" component={Clients} />
    <Route exact path="/services" component={Services} />
  </Switch>
)

export default Main;