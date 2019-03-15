import React from 'react';

import logo from '../assets/images/logo.png';

export default class Footer extends React.Component {
  render() {
    return (
        <footer className="footer">
            <img src={logo} alt="Logo Game Jam Plus"/>
        </footer>
    );
  }
}