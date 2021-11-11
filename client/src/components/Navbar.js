import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img className="logo" src="/assest/images/logo.png" alt="logo" />
          </div>
          <div className="middle-div">
            <span>Review managment System</span>
          </div>
          <div className="right-div nav-links">
            <ul>
              <li className="create-review">
                <Link to="/create_review">
                  <span className="link">Create Your review</span>
                </Link>
              </li>
              <li className="home">
                <Link to="/">
                  <span className="link">Home</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
