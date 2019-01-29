import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/c_cpp";
import "brace/theme/monokai";

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
  render() {
    return (
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default Ide;
