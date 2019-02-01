import React, { Component } from "react";
import axios from "axios";
import Header1 from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Header,
  Grid,
  Button,
  Icon,
  Form,
  Dimmer,
  Input,
  Segment
} from "semantic-ui-react";
// import { Modal } from "antd";
// import Upload from "antd/lib/upload";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class EditProfile extends Component {
  state = {
    loggedin: false,
    username: "",
    name: "",
    displayName: "",
    email: "",
    institution: "",
    age: "",
    photo: ""
  };

  handleChange = (e, { value }) => this.setState({ value });

  getuser = () => {
    var self = this;
    const user_axios = axios.create({
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "x-www-form-urlencoded"
      }
    });
    user_axios
      .get("http://localhost:8080/user/profile")
      .then(function(response) {
        response = response.data.user;
        console.log(response);
        if (response.success === 0) {
          self.setState({
            loggedin: false
          });
        } else {
          self.setState({
            loggedin: true,
            username: response.username,
            name: response.name,
            displayName: response.displayName,
            email: response.email,
            institution: response.institution,
            age: response.age,
            photo: response.photo
          });
        }
      });
  };
  componentDidMount() {
    this.getuser();
  }
  render() {
    const {
      username,
      name,
      displayName,
      email,
      institution,
      age,
      photo,
      loggedin
    } = this.state;
    const { value } = this.state;
    return (
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <Header1 username={username} loggedin={loggedin} />
        <br />
        <br />
        <Segment inverted>
          <Form inverted>
            <Form.Input width={6} label="First name" placeholder="First name" />
            <br />
            <Form.Input
              width={6}
              label="Display Name"
              placeholder="Display Name"
            />
            <br />
            <Form.Select
              width={4}
              label="Gender"
              options={options}
              placeholder="Gender"
            />
            <Form.Input width={2} type="number" label="Age" placeholder="Age" />

            {/* <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          /> */}
            {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
            <Form.Input
              width={10}
              label="College/Institution"
              placeholder="College/Institution"
            />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EditProfile;
