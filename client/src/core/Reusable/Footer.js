import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Footer</h5>
            <p className="grey-text text-lighten-4">
              Footer defines all the technloigies used in this Application
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Tech's</h5>
            <ul>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Node Js
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Express Js
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  React Js
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Mongo DB
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="#!">
                  Materialize Css
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          &copy; Copyright | HackerKernel Task
          <a className="grey-text text-lighten-4 right" href="#!">
            ~by Wasif Ali
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
