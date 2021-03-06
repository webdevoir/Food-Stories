import React from 'react';
import {Link} from 'react-router-dom';

class UserDropdown extends React.Component {
  render() {
    return (
        <div className="user-dropdown">
          <div className="triangle"></div>
          <img id="close" onClick={() => this.props.close()}
            src={window.imageUrls.iconClose}></img>
          <div className="user-info">
            <img src={this.props.currentUser.pic_url}>
            </img>
            <div className="user-text">
              <p className="username2">{this.props.currentUser.username}</p>
              <p className="email">{this.props.currentUser.email}</p>
              <Link className="liked-items-link" to="/liked_items">Likes</Link>
              <Link className="liked-items-link" to="/recipes/new">Make your own recipe!</Link>
            </div>
          </div>
          <p className="logout" onClick={() => this.props.logout()}>Logout</p>
        </div>
    );
  }
}

export default UserDropdown;
