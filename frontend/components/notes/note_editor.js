import React from 'react';
import ReactQuill from 'react-quill';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = (props.note);
    this.handleBody = this.handleBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    // this.timeout = null;
  }

  componentWillReceiveProps(newProps) {
    if(this.state.id !== newProps.note.id) {
      this.setState(newProps.note);
    }
  }



  handleBody(content, delta, source, editor ) {
    let preview = editor.getText().slice(0,130).replace('\\n', "");
    this.setState({preview: preview, body: content});
    this.props.updateNote(this.state);
    // clearTimeout(this.timeout);
    // this.timeout = setTimeout(this.props.updateNote(this.state), 5000);
  }

  changeTitle(e) {
    const title = e.target.title;
    this.setState({title});
  }

  render() {
    return(


        <ReactQuill
          value={this.state.body}
          onChange={this.handleBody}
          theme='snow'>
          <div className='editing-area'>
          </div>
        </ReactQuill>


    );
  }
}

export default NoteEditor;
