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
  
  handleSubmit = () => {
    console.log("CODE SUBMITTTED");
    console.log(this.state.code);
    //code_set is the function that has to be passed by the parent component.
    this.props.code_set(this.state.code);
 
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
