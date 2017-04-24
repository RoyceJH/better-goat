import React from 'react';

class RootModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.active) {
      return(
        <div className='active-modal' >
          {this.props.component}
        </div>
      );
    } else {
      return(
        <div className='inactive-modal'>

        </div>
      );
    }
  }
}

export default RootModal;
