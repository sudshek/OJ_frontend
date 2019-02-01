import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/monokai";
import request from "request";

class Ide extends Component {
  state = {
    code: ""
  };
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(newValue) {
    // console.log("change", newValue);
    this.state.code = newValue;
    console.log("CODE  ", this.state.code);
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
    request(
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
  handleSubmit = () => {
    console.log("CODE SUBMITTTED");
    console.log(this.state.code);
    //code_set is the function that has to be passed by the parent component.
    this.props.code_set(this.state.code);
    this.handleJdoodle(this.state.code);
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
      </div>
    );
  }
}

export default Ide;
