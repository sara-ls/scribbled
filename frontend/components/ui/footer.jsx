import React from "react";
import { Link } from "react-router-dom";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScribd,
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <h4>ABOUT</h4>
        <ul className="footer-list">
          <li>
            <a href="https://www.scribd.com/?lohp=2">Scribd.com</a>
          </li>
          <li>
            <a href="https://github.com/sara-ls/Scribbled">Scribbled Repo</a>
          </li>
          <li>
            <a href="https://github.com/sara-ls/Scribbled/wiki">Wiki</a>
          </li>
          <li>
            <a href="https://github.com/sara-ls/Scribbled/blob/master/README.md">
              Read Me
            </a>
          </li>
          <li>
            <a href="https://github.com/sara-ls">Contact</a>
          </li>
        </ul>
      </div>
      <div className="social-container">
        <a href="https://www.scribd.com/">
          <FontAwesomeIcon
            icon={faScribd}
            className="social-icon"
            id="scribd-icon"
          />
        </a>
        <a href="https://github.com/sara-ls">
          <FontAwesomeIcon
            icon={faGithub}
            className="social-icon"
            id="github-icon"
          />
        </a>
        <a href="https://www.linkedin.com/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="social-icon"
            id="linkedin-icon"
          />
        </a>
      </div>
      <div className="footer-bottom">
        <ul>
          <li>
            <span>Scribbled</span>
          </li>
          <li id="dot">
            <FontAwesomeIcon icon={faCircle} />
          </li>
          <li>
            <span>slimsampson</span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
