import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderCustom from "../components/header";
import Ide from "../components/ide";

class ProblemSet extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderCustom />
        <Ide />
      </div>
    );
  }
}

export default ProblemSet;
