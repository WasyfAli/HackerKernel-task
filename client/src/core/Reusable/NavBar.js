import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener("DOMContentLoaded", function () {
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});
    });
  }
  render() {
    return (
      <div>
        <nav className="nav-fixed">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              HackerKernel
            </Link>
            <Link to="" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/">User</Link>
              </li>
              <li>
                <Link to="task">Task</Link>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <Link to="/">User</Link>
          </li>
          <li>
            <Link to="task">Task</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
