import React from 'react';
import ReactQuill from 'react-quill';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return(

        <ReactQuill value='randomstring'
                    onChange={() => {}}
                    theme='snow'/>

    );
  }
}

export default NoteEditor;
