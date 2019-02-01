import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Index from "./components/index";
import signup from "./components/signup";
import homepage from "./components/homepage";
import login from "./components/login";
import ProblemSet from "./components/problemset";
import Ide from "./components/ide";
import Problem from "./components/problem";
import Profile from "./components/profile";
import EditProfile from "./components/editProfile";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route path="/index" component={Index} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/problemset" component={ProblemSet} />
          <Route path="/ide" component={Ide} />
          <Route path="/problem/:qid" component={Problem} />
          <Route path="/updateProfile" component={Profile} />
          <Route path="/editProfile" component={EditProfile} />
        </Switch>
      </Router>
    );
  }
}

export default App;
