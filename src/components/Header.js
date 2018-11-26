import React, { Component } from 'react';
import './Header.css'

class Header extends Component {

  render() {
    return (
      <ul className="menu">
        <li><strong>HighOnCoding</strong></li>
        <li>Home</li>
        <li>Categories</li>
      </ul>
    )
  }
}

export default Header
