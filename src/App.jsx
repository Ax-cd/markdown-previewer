import React, { Component } from "react";
import { marked } from "marked";

// use backquote over quote => backquote allow linebreaks
const defaultText = `#This is a markdown previewer
##Write in the editor and preview the result
This is a [link](https://reactjs.org/docs/getting-started.html) to React Documentation.
You can add inline code, like so:
Or a code block
Do you need to list items ? You can:
What about a > blockquote ?
Emphasis the **importance** of an element with **bolded text**.
And add images!
![Img name](url)
  `;

// marked.setOptions({
//   breaks: true,
// });

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { editorInput: defaultText };
  }

  handleEditorChange = (event) => {
    this.setState({ editorInput: event.target.value });
  };

  getMarkdownText = () => {
    let text = marked.parse(this.state);
    return { __html: text };
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
            // value={this.state.editorInput}
            // onChange={this.handleEditorChange}
            dangerouslySetInnerHTML={this.getMarkdownText}
            // dangerouslySetInnerHTML={{ __html: inputText }}
          ></input>
        </div>
      </React.Fragment>
    );
  }
}
