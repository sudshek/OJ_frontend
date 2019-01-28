import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Index from "./components/index";
import signup from "./components/signup";
import homepage from "./components/homepage";
import login from "./components/login";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route path="/index" component={Index} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
        </Switch>
      </Router>
    );
  }
}

export default App;
