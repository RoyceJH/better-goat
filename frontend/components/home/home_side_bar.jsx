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
    this.toggleProfile = this.toggleProfile.bind(this);
    this.removeProfile = this.removeProfile.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.photoSubmit = this.photoSubmit.bind(this);
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

  toggleProfile(e) {
    this.setState({hidden: false});
  }

  removeProfile(e) {
    if(e.currentTarget === e.target) {
      this.setState({hidden: true});
    }
  }

  photoSubmit(e) {
    if(this.props.formType === 'signup') {
      const file = this.state.imageFile;
      const formData = new FormData();
      formData.append('user[image]', file);
      formData.append('user[username]', this.state.username);
      formData.append('user[password]', this.state.password);
    } else {
     const formData = this.state;
    }
  }

  updateFile(e) {
    var reader = new FileReader();
    var file = e.currentTarget.files[0];
    debugger
    reader.onloadend = function() {
      this.setState({ imageUrl: reader.result, imageFile: file});
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }
  // <img src={this.state.imageUrl}></img>
  //<input type='file' value='Change Photo' onChange={this.updateFile}/>

  render() {
    const profileBox = this.state.hidden ? "" :
      <div onClick={this.removeProfile} value='yes' className='profile-tab-modal' >
        <div value='no' className='profile-tab'>
          <div className='user-info'>
            <h3>Welcome,</h3>
            <label>{window.currentUser.username}</label>
          </div>

          <div className='user-bottom'>

            <i onClick={this.handleLogout} className="fa fa-sign-out" aria-hidden="true"></i>
          </div>
        </div>
      </div> ;

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
          <button onClick={this.toggleProfile}><i className="fa fa-user-circle-o" aria-hidden="true"></i></button>

          { profileBox }
        </div>

      </div>
    );
  }
}



export default withRouter(HomeSideBar);
