import React from 'react';
import { Link, withRouter } from 'react-router';

class HomeSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({hidden: true});
    this.handleLogout = this.handleLogout.bind(this);
    this.slideNotebooks = this.slideNotebooks.bind(this);
    this.slideTags = this.slideTags.bind(this);
    this.removeSlideout = this.removeSlideout.bind(this);
  }

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleLogout(e){
    e.preventDefault();
    this.props.logout();
    this.props.router.push('/');
  }

  removeSlideout() {
    this.props.removeSlideout();
  }

  slideNotebooks(e) {
    if(this.props.slideout === 'notebook') {
      this.props.removeSlideout();
    } else {
      this.props.slideoutNotebook();
    }
  }

  slideTags(e) {
    if(this.props.slideout === 'tags') {
      this.props.removeSlideout();
    } else {
      this.props.slideoutTag();
    }
  }

  render() {
    const profileBox = <input className='profile-tab' />;

    return (
      <div className='home-side-bar' >

        <div className='side-bar-1'>
          <label className='home logo'/>
        </div>

        <div className='side-bar-2'>
          <Link
            className='add-logo'
            to='/notes/new'
            ><i className="fa fa-plus-square-o" aria-hidden="true"></i></Link>
          <Link><i className="fa fa-search" aria-hidden="true"></i></Link>
          <Link><i className="fa fa-commenting-o" aria-hidden="true"></i></Link>

        </div>

        <div className='side-bar-3' >
          <Link><i className="fa fa-star-o" aria-hidden="true"></i></Link>
          <Link onClick={this.removeSlideout} to={'/home'}><i className="fa fa-file-text-o" aria-hidden="true"></i></Link>
          <Link onClick={this.slideNotebooks}><i className="fa fa-book" aria-hidden="true"></i></Link>
          <Link onClick={this.slideTags}><i className="fa fa-bookmark-o" aria-hidden="true"></i></Link>

        </div>

        <div className='side-bar-4'>
          <button onClick={this.handleLogout}><i className="fa fa-sign-out" aria-hidden="true"></i></button>
          { profileBox }
        </div>

      </div>
    );
  }
}



export default withRouter(HomeSideBar);
