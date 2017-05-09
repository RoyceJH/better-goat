import React from 'react';
import { connect } from 'react-redux';
import {
  destroyTag,
  updateTag,
} from '../../actions/tag_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  destroyTag: (tagId) => dispatch(destroyTag(tagId)),
  updateTag: (tag) => dispatch(updateTag(tag)),
});

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState(this.props.tag);
  }
  // 
  // componentWillReceiveProps(newProps) {
  //   if(newProps.tag.id !== this.state.tag.id){
  //     this.setState(newProps.tag);
  //   }
  // }

  handleDelete(tagId) {
    return (e) => {
      this.props.destroyTag(tagId);
      e.stopPropagation();
    };
  }

  render() {
    return <div className='tag-index-item container'>
      <div className='tag-title-wrapper'>
        <div className='tag-index-item title'>
          <h3>{this.state.title}</h3>
          <label className='tag-index-item count'>{this.props.notesCount}</label>
        </div>
      </div>

      <div className='tag-index-item utility'>
        <i className="fa fa-pencil" aria-hidden="true"></i>
        <i onClick={this.handleDelete(this.state.id)} className="fa fa-trash-o" aria-hidden="true"></i>
      </div>
    </div>;
  }
}

export default connect(null, mapDispatchToProps)(TagIndexItem);
