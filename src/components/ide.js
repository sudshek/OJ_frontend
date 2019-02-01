import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/monokai";
import request from "request";
import axios from "axios";
import querystring from "querystring";
class Ide extends Component {
  state = {
    code: "",
    errorMessage: ""
  };
  constructor(props) {
    super(props);
    console.log("CONSTRUCTION");
    console.log(this.props);
    this.state.question_id = this.props.question_id;

    this.onChange = this.onChange.bind(this);
  }
  componentWillReceiveProps(props) {
    console.log("PROPS", props);
    // this.setState({
    //   loggedin: props.loggedin,
    //   username: props.username
    // });
    this.state.question_id = props.question_id;
  }
  onChange(newValue) {
    // console.log("change", newValue);
    this.state.code = newValue;
    console.log("CODE  ", this.state.code);
  }
  handleSubmit = () => {
    console.log("On Submit");
    console.log(this.state.question_id, this.state.code);
    var data = querystring.stringify({
      question_id: this.state.question_id,
      code: this.state.code
    });
    var self = this;
    fetch("http://localhost:8080/question/execute", {
      credentials: "include",
      method: "post",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      body: data
    })
      .then(function(data) {
        data.json().then(value => {
          console.log("JDOODLE KI MKC", value);
          if (value.success === 0) {
            self.setState({
              errorMessage: "Error/Try Again"
            });
          } else {
            self.setState({
              errorMessage: value.output
            });
          }
        });
      })
      .catch(function(error) {
        console.log("Request failed", error);
      });
  };
  render() {
    return (
      <div>
        <AceEditor
          mode="c_cpp"
          theme="monokai"
          onChange={this.onChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{ $blockScrolling: true }}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <p>{this.state.errorMessage}</p>
      </div>
    );
  }
}

export default Ide;
