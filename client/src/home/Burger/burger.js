import React from 'react';
import './burger.css';
import { stack as Menu } from 'react-burger-menu'

class Burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right width={ 230 }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="contact" className="menu-item" href="/about">About</a>
      </Menu>
    );
     
  }
}

export default Burger
