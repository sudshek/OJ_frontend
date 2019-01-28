import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Image,
  Message,
  Segment,
  Dropdown,
  Select,
  Dimmer,
  Icon,
  Responsive
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
export default class Header1 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            Online Judge
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto headerNav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
              <li className="nav-item left">
                <Link to={"/signup"} className="nav-link">
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
        </nav>{" "}
      </div>
    );
  }
}
