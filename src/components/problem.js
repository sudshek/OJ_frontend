import React, { Component } from "react";
import axios from "axios";
import Ide from "../components/ide";
import querystring from "querystring";

class Problem extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props.match.params.qid);
    const { qid } = this.props.match.params;
    console.log("QID", qid);
    var data = querystring.stringify({ question_id: qid });
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
          console.log(value);
        });
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  }

  render() {
    return (
      <div>
        <h1>HERE</h1>
        <Ide />
      </div>
    );
  }
}

export default Problem;
