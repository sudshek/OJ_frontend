import React, { Component } from "react";
import axios from "axios";
import Ide from "../components/ide";
import querystring from "querystring";
import request from "request";

class Problem extends Component {
  state = {
    question_id: "",
    text: "",
    test_cases: "",
    tags: "",
    total_submission: "",
    correct_submission: "",
    submitted_code: ""
  };
  
  componentDidMount = () => {
    console.log(this.props.match.params.qid);
    const { qid } = this.props.match.params;
    console.log("QID", qid);
    var data = querystring.stringify({ question_id: qid });
    var self = this;
    fetch("http://localhost:8080/question", {
      credentials: "include",
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data
    })
      .then(function(data) {
        data.json().then(value => {
          console.log(value.question.question_id);
          self.setState({
            question_id: value.question.question_id,
            text: value.question.text,
            test_cases: value.question.test_cases,
            tags: value.question.tags,
            total_submission: value.question.total_submissions,
            correct_submission: value.question.correct_submissions
          });
        });
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }
  handleJdoodle = code => {
    var program = {
      script: code,
      language: "cpp",
      versionIndex: "0",
      clientId: "e1296a045c8fd205c2bc478cde607bf5",
      clientSecret:
        "61863b5c2bf62d8898dbb62630a961ec8c14c8e3c6ba2f91759d2d5a391e7b06"
    };
    fetch(
      {
        url: "https://api.jdoodle.com/execute",
        method: "POST",
        json: program
      },
      function(error, response, body) {
        console.log("error:", error);
        console.log("statusCode:", response && response.statusCode);
        console.log("body:", body);
      }
    );
  };
  code_set = code => {
    console.log(code);
    // this.setState({
    //   submitted_code: code
    // });
    this.state.submitted_code = code;
    console.log("SUBMITTED CODE: ", this.state.submitted_code);
    ///handle jdoodle
    this.handleJdoodle(this.state.code);
  };

  render() {
    const {question_id} = this.state;
    return (
      <div>
        <p>ID: {question_id}</p>
        <p>Q. {this.state.text}</p>
        <p>Sample Test Cases: {this.state.test_cases}</p>
        <p>Total Submissions: {this.state.total_submission}</p>
        <p>Correct Submission: {this.state.correct_submission}</p>
        <p>Tags: {this.state.tags}</p>
        <p>Code submitted: {this.state.submitted_code}</p>
        <Ide question_id = {this.state.question_id} />
      </div>
    );
  }
}

export default Problem;
