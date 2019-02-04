import React, { Component } from "react";
import axios from "axios";
import Header1 from "./header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "antd";
import Upload from "antd/lib/upload";
import "antd/lib/upload/style/css";
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
    photo: "",
    fileURL: [],
    fileList: [],
    previewVisible: false,
    previewImage: "",
    active: false,
    show: false
  };

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
    console.log([name]);
    console.log(value);
  };

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true
    });
  };
  handleSubmit = () => {
    console.log("FORM SUBMITTED");

    const data = new FormData();
    data.append("file", this.state.fileList);
    data.append("filename", this.state.username);
    data.append("displayName", this.state.displayName);
    data.append("age", this.state.age);
    data.append("name", this.state.name);
    data.append("institution", this.state.institution);

    console.log("FILE SENT : ", this.state.fileList);
    axios
      .post("http://localhost:8080/user/upload_dp", data)
      .then(function(response) {
        // this.setState({ imageURL: `http://localhost:8000/${body.file}`, uploadStatus: true });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
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
            photo: response.photo
          });
        }
      });
  };
  componentDidMount() {
    this.getuser();
  }
  fileChangedHandler = event => {
    const file = event.target.files[0];
    this.state.fileList = event.target.files[0];
    console.log(this.state.fileList);
  };
  render() {
    const {
      username,
      name,
      displayName,
      email,
      institution,
      age,
      photo,
      loggedin,
      fileList,
      fileURL,
      previewImage,
      previewVisible
    } = this.state;
    const { value } = this.state;
    return (
      <div style={{ marginLeft: "20%", marginRight: "20%" }}>
        <Header1 username={username} loggedin={loggedin} />
        <br />
        <br />
        <Segment inverted>
          <Form inverted onSubmit={this.handleSubmit}>
            <Form.Input
              width={6}
              label="Name"
              placeholder="Name"
              name="name"
              onChange={this.handleChange}
            />
            <br />
            <Form.Input
              width={6}
              label="Display Name"
              placeholder="Display Name"
              name="displayName"
              onChange={this.handleChange}
            />
            <br />
            {/* <Form.Select
              width={4}
              label="Gender"
              options={options}
              placeholder="Gender"
              onChange={this.handleChange}
            /> */}
            <Form.Input
              width={2}
              type="number"
              label="Age"
              placeholder="Age"
              name="age"
              onChange={this.handleChange}
            />

            {/* <Form.TextArea
            label="About"
            placeholder="Tell us more about you..."
          /> */}
            {/* <Form.Checkbox label="I agree to the Terms and Conditions" /> */}
            <Form.Input
              width={10}
              label="College/Institution"
              placeholder="College/Institution"
              name="institution"
              onChange={this.handleChange}
            />
            {/* <Upload
              action={"http://localhost:8080/user/upload"}
              listType="picture-card"
              data={{
                username: username
              }}
              fileList={fileList}
              accept="image/*"
              multiple={true}
              onPreview={this.handlePreview}
              onChange={this.handleChangeImage}
              className="upload-list-inline"
            >
              {fileList.length >= 2 ? null : uploadButton}
            </Upload> */}

            <Form.Input type="file" onChange={this.fileChangedHandler} />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default EditProfile;
