import React, { Component } from "react";
import { marked } from "marked";
import DOMPurify from "dompurify";

const defaultText = `# This is a markdown previewer\n## Write in the editor and preview the result
This is a [link to React Documentation](https://reactjs.org/docs/getting-started.html).

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
![Img name](https://picsum.photos/id/1050/400/200)
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
      <main className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm">
            <label for="editor" className="label">
              Editor
            </label>
            <br />
            <textarea
              name="editor"
              id="editor"
              type="text"
              className="form-control"
              rows="35"
              value={this.state.editorInput}
              onChange={this.handleEditorChange}
            ></textarea>
          </div>
          <div className="col-sm">
            <span className="label">Previewer</span>
            <br />
            <div
              id="preview"
              dangerouslySetInnerHTML={this.getMarkdownText(
                this.state.editorInput
              )}
            />
          </div>
        </div>
      </main>
    );
  }
}
