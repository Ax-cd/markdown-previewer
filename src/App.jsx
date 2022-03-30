import React, { Component } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

// use backquote over quote => backquote allow linebreaks
// need to separate backquotes with \
const defaultText = `# This is a markdown previewer\n## Write in the editor and preview the result
This is a [link](https://reactjs.org/docs/getting-started.html) to React Documentation.

You can add inline code, like so: \`<div></div>\`
\`\`\`
// And multi-line code:
function Test(arg1, arg2) {
  if (arg1 === arg2) {
    return "Success!";
  }
}
\`\`\`

Do you need to list items ? You can:
- Item 1
- Item 2
  - Item 2.1
  - Item 2.2

What about a 
> Blockquote ?

Emphasis the **importance** of an element with **bolded text**.
And even add images!
![Img name](https://picsum.photos/id/1050/600/400)
  `;

marked.setOptions({
  breaks: true,
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { editorInput: defaultText };
  }

  handleEditorChange = (event) => {
    this.setState({ editorInput: event.target.value });
  };

  getMarkdownText = (editorInput) => {
    let __html = marked(editorInput, {
      __html: DOMPurify.sanitize(editorInput),
    });
    return { __html };
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

        <div>
          <label for="preview">Previewer</label>
          <br />
          <div
            id="preview"
            // wasn't working previously because only had this.getMarkdownText and forgot this.state.editorInput
            dangerouslySetInnerHTML={this.getMarkdownText(
              this.state.editorInput
            )}
          />
        </div>
      </React.Fragment>
    );
  }
}
