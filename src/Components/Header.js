import React, { Component } from 'react';
import './Header.css';
import Logo from '../Images/logo.svg';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
