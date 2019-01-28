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

// import {Link} from 'react-router-dom';
import signup from "./signup";
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
    e.preventDefault();
    if (this.state.username.length < 1 || this.state.password.length < 1) {
      this.setState({ errorHeader: "Field is Empty" });
      this.setState({ errorMessage: "All Fields are Required!" });
      this.setState({ active: true });
    } else {
      fetch("http://localhost:8080/user/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log("ResponseJson");
          console.log(responseJson);
        })
        .catch(error => {
          console.log(error);
          console.log("erooooooooooooooor");
          this.setState({
            active: true,
            errorHeader: "error!",
            errorMessage: "an unexpected error occured"
          });
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
      return <Redirect to="" />;
    }
    return (
      <div>
        <HeaderCustom />
        <div style={mystyle}>
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
                    Signup
                  </Form.Button>
                </Segment>
                <Segment>{errorMessage}</Segment>
              </Form>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    );
  }
}
