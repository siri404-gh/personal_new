import React, { Component } from 'React';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top my-nav">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Sreeram</a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto pull-right">
            <li className="nav-item active">
              <a className="nav-link link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">Gallery</a>
            </li>
            <li className="nav-item-right">
              <a className="nav-link link" target='_blank' href="http://instagram.sreeram.pro/">Follow me in Instagram</a>
            </li>
            <li className="nav-item-right">
              <a className="nav-link link" target='_blank' href="http://facebook.sreeram.pro/">Find me in Facebook</a>
            </li>
            <li className="nav-item">
              <a className="nav-link link" href="#">Travelogue</a>
            </li>
          </ul>
          <span className="navbar-text">
            I'm the 1..
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;