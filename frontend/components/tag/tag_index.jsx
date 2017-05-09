import React from 'react';
import SlideOut from '../slideout';
import { withRouter } from 'react-router';
import CreateTag from '../modal/create_tag';

class TagIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.addModal = this.addModal.bind(this);
    this.goToShowPage = this.goToShowPage.bind(this);
  }

  componentDidMount() {
    this.props.fetchTags();
  }

  addModal(e) {
    this.props.receiveModal(<CreateTag />);
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

  render() {
    const slidden = this.props.slideout ? "selected" : "";
    const slideModal = this.props.slideout ? <SlideOut /> : "";


    const tags = this.props.tags.map((tag, idx) => {
      let notesCount = this.props.notes(tag.id).length;

      return <div key={idx} className='tag-index-item container'>
        <div className='tag-index-item title'>
          <h3>{tag.title}</h3>
          <label className='tag-index-item count'>{notesCount}</label>
        </div>

        <div className='tag-index-item utility'>
          <i className="fa fa-pencil" aria-hidden="true"></i>
          <i onClick={this.handleDelete(tag.id)} className="fa fa-trash-o" aria-hidden="true"></i>
        </div>
      </div>;
    });

    return(
      <div className={`tag-index ${slidden}` }>
        <div className='tag-wrapper'>
          <div className='tag-index-header'>

            <div className='top-line'>
              <h2>TAGS</h2>
                <label onClick={this.addModal}>
                  <i className="fa fa-file-text-o" aria-hidden="true"></i>
                  <i className="fa fa-plus" aria-hidden="true"></i>
                </label>
            </div>

            <input type='text' placeholder='Find a tag'/>
          </div>

          <div className='tag-index-list-wrapper'>
            <div className='tag-index-list'>
              {tags}
            </div>
          </div>
        </div>

        {slideModal}
      </div>
    );

  }
}

export default withRouter(TagIndex);
