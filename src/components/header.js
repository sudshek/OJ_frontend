import React, { Component } from "react";
import Drop from "../components/greeting";
import axios from "axios";
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
  state = {
    loggedin: false
  };
  constructor(props) {
    super(props);

    this.state.username = this.props.username;
    this.state.loggedin = this.props.loggedin;
    console.log("Header");
    console.log(props);
  }

  componentWillReceiveProps(props) {
    console.log("PROPS", props);
    // this.setState({
    //   loggedin: props.loggedin,
    //   username: props.username
    // });
    this.state.loggedin = props.loggedin;
    this.state.username = props.username;
  }
  // componentDidMount(){
  //   const user_axios = axios.create({
  //     withCredentials: true,
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "x-www-form-urlencoded"
  //       },
  //   });
  //   user_axios.get("localhost://8080/user/").then(function(response){
  //     console.log("RESPONSE",response.success)
  //   if(response.success==0)
  //   {this.setState({
  //       loggedin: false,
  //     });}
  //     else{
  //       this.setState({
  //         loggedin:true,
  //         name:response.user.username,
  //       })
  //       console.log("Changed Visibility");
  //     }
  //   })
  // }
  render() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={"/"} className="navbar-brand">
            Online Judge
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  headerNav">
              <li className="nav-item">
                {!this.state.loggedin ? (
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                ) : null}
              </li>
              <li className="nav-item">
                {!this.state.loggedin ? (
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                ) : null}
              </li>
              <li className="nav-item right">
                {!this.state.loggedin ? (
                  <Link to={"/signup"} className="nav-link">
                    SignUp
                  </Link>
                ) : null}
              </li>
              <li className="nav-item right">
                {this.state.loggedin ? (
                  <Drop name={this.state.username} />
                ) : null}
              </li>
            </ul>
          </div>
        </nav>{" "}
      </div>
    );
  }
}
