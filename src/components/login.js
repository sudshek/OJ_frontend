import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
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
import HeaderCustom from "./header";
import axios from "axios";
// import {Link} from 'react-router-dom';

export default class login extends Component {
  state = {
    username: "",
    password: "",
    redirection: false
  };
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleClose = () => this.setState({ active: false });
  handleSubmit = e => {
    if (this.state.username.length < 1 || this.state.password.length < 1) {
      this.setState({ errorHeader: "Field is Empty" });
      this.setState({ errorMessage: "All Fields are Required!" });
      this.setState({ active: true });
    } else {
      console.log(this.state.username);

      const login_axios = axios.create({
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "x-www-form-urlencoded"
        },
        params: {
          username: this.state.username,
          password: this.state.password
        }
      });
      var self = this;
      login_axios
        .post("http://localhost:8080/user/login")
        .then(function(response) {
          // console.log("RESPONSE");
          response = response.data;
          console.log(response);

          if (response.success == 0) {
            self.setState({
              errorMessage: "Username or Password wrong"
            });
          }
          if (response.success == 1) {
            self.setState({
              redirection: true,
              username: response.user.username
            });
          }
          console.log(response);
        })
        .catch(function(error) {
          console.log("ERROR");
          console.log(error);
        });
    }
  };
  render() {
    const {
      username,
      password,
      active,
      errorHeader,
      errorMessage
    } = this.state;
    var mystyle = {
      backgroundColor: "#ebebe0"
    };

    if (this.state.redirection) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <HeaderCustom
          loggedin={this.state.redirection}
          username={this.state.username}
        />
        <div className="LoginBox">
          <Responsive minWidth={1125}>
            <br />
            <br />
            <br />
            <br />
          </Responsive>
          <Grid centered>
            <Grid.Column computer={5} mobile={16}>
              <Form size="large" onSubmit={this.handleSubmit}>
                <Segment stacked>
                  <h1>Login</h1>
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="username"
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                  />

                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.handleChange}
                  />
                  <Form.Button type="submit" color="teal" fluid size="large">
                    Login
                  </Form.Button>
                </Segment>
              </Form>
              <Segment>
                <center>
                  {" "}
                  New to us?{" "}
                  <Link to={"/signup"}>
                    <b>Sign Up</b>
                  </Link>
                </center>
              </Segment>
              <Segment>{errorMessage}</Segment>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
