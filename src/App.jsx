import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { editorInput: "hello world" };
  }

  handleEditorChange = (event) => {
    this.setState({ editorInput: event.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <label for="editor">Editor</label>
          <br />
          <textarea
            name="editor"
            id="editor"
            cols="50"
            rows="5"
            value={this.state.editorInput}
            onChange={this.handleEditorChange}
          ></textarea>
        </div>

        <div id="preview">
          <label for="preview">Previewer</label>
          <br />
          <input
            type="text"
            value={this.state.editorInput}
            onChange={this.handleEditorChange}
          />
        </div>
      </React.Fragment>
    );
  }
}
