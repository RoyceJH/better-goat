import React from 'react';
import { connect } from 'react-redux';
import {
  destroyTag,
  updateTag,
} from '../../actions/tag_actions';
import { removeSlideout } from '../../actions/slideout_actions';
import { withRouter } from 'react-router';

const mapDispatchToProps = dispatch => ({
  destroyTag: (tagId) => dispatch(destroyTag(tagId)),
  updateTag: (tag) => dispatch(updateTag(tag)),
  removeSlideout: () => dispatch(removeSlideout()),
});

class TagIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tag:props.tag, edit: false};
    this.goToShowPage = this.goToShowPage.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.startEdit = this.startEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if(this.props.notesCount !== newProps.notesCount) {
      this.props.updateTag(newProps.tag);
    }
  }

  handleDelete(tagId) {
    return (e) => {
      this.props.destroyTag(tagId);
      e.stopPropagation();
    };
  }

  goToShowPage(tagId) {
    return (e) => {
      this.props.router.push(`/home/tag/${tagId}`);
      this.props.removeSlideout();
    };
  }

  handleChange(e) {
    let tag = this.state.tag;
    tag.title = e.target.value;
    this.setState({tag});
  }

  startEdit() {
    this.setState({edit: true});
  }

  handleEdit() {
    this.setState({edit: false});
    this.props.updateTag(this.state.tag);
  }

  render() {
    let titleWrapper;
    if(this.state.edit) {
      titleWrapper = (
        <div className='tag-index-item container'>
          <div className='tag-title-wrapper edit'>
            <input onChange={this.handleChange} value={this.state.tag.title}></input>
            <i onClick={this.handleEdit} className="fa fa-check-circle" aria-hidden="true"></i>
          </div>
        </div>
      );
    } else {
      titleWrapper = (
        <div className='tag-index-item container'>
          <div className='tag-title-wrapper'>
            <div onClick={this.goToShowPage(this.state.tag.id)} className='tag-index-item title'>
              <h3>{this.state.tag.title}</h3>
              <label className='tag-index-item count'>{this.props.notesCount}</label>
            </div>
          </div>

          <div className='tag-index-item utility'>
            <i onClick={this.startEdit} className="fa fa-pencil" aria-hidden="true"></i>
            <i onClick={this.handleDelete(this.state.tag.id)} className="fa fa-trash-o" aria-hidden="true"></i>
          </div>
        </div>
      );
    }
    return (
      <div className='tag-index-container wrapper'>
        {titleWrapper}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(TagIndexItem));
