import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { input: "" };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Markdown Previewer</h1>
        <label for="editor"></label>
        <textarea
          name="editor"
          id="editor"
          cols="30"
          rows="10"
          value={this.state.input}
        ></textarea>

        <div
          id="preview"
          onChange={(event) => {
            this.setState({ input: event.target.value });
          }}
        ></div>
      </React.Fragment>
    );
  }
}
