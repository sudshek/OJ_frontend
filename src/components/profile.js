import React, { Component } from "react";
import axios from "axios";
import Header1 from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Profile extends Component {
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
            photo: "http://localhost:8080/public/" + response.photo
          });
        }
      });
  };
  componentDidMount() {
    this.getuser();
  }
  // #I If user has not logged in then redirect to homepage.
  render() {
    console.log(this.state);
    console.log("RENDER");
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
    return (
      <div>
        <Header1 username={username} loggedin={loggedin} />
        <br />
        <br />
        <br />
        <Link to="/editProfile">Edit Profile</Link>
        <h1>Your Details: </h1>
        <br />

        <img src={this.state.photo} />
        {this.state.username.length > 0 && (
          <h2>Username: {this.state.username}</h2>
        )}
        {name.length > 0 && <h2>Name: {name}</h2>}
        {displayName && <h2>DisplayName: {displayName} </h2>}
        {email.length > 0 && <h2>Email: {email} </h2>}
        {institution && <h2>Instituition: {institution}</h2>}
        {age && <h2>Age: {age}</h2>}
      </div>
    );
  }
}

export default Profile;
