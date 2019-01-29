import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HeaderCustom from "../components/header";
class ProblemSet extends Component {
  state = {};
  render() {
    return (
      <div>
        <HeaderCustom />
        <Link to={"/problemset/ide"}>IDE</Link>
      </div>
    );
  }
}

export default ProblemSet;
