import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/sidebar.css";
import logo from "../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faRocket,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";
import useHover from "../hooks/useHover";
import {
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
  const [flag1, onHover1] = useHover(false);
  const [flag2, onHover2] = useHover(false);
  const [flag3, onHover3] = useHover(false);
  const [flag4, onHover4] = useHover(false);
  const [flag6, onHover6] = useHover(false);

  return (
    <div className="sidebar">
      <Link to="/">
        <img src={logo} alt="Mohit Kumar" className="Mohit Kumar" />
      </Link>
      <nav>
        <NavLink to="/">
          {flag1 ? (
            <span onMouseOut={onHover1}>HOME</span>
          ) : (
            <FontAwesomeIcon
              icon={faHome}
              className="nav-Home"
              onMouseEnter={onHover1}
            />
          )}
        </NavLink>
        <NavLink to="/projects">
          {flag2 ? (
            <span onMouseOut={onHover2}>PROJECTS</span>
          ) : (
            <FontAwesomeIcon
              icon={faRocket}
              className="nav-Project"
              onMouseOver={onHover2}
            />
          )}
        </NavLink>
        <NavLink to="/about">
          {flag3 ? (
            <span onMouseOut={onHover3}>ABOUT</span>
          ) : (
            <FontAwesomeIcon
              icon={faUser}
              className="nav-About"
              onMouseOver={onHover3}
            />
          )}
        </NavLink>
        <NavLink to="/contact">
          {flag4 ? (
            <span onMouseOut={onHover4}>CONTACT</span>
          ) : (
            <FontAwesomeIcon
              icon={faEnvelope}
              className="nav-Contact"
              onMouseOver={onHover4}
            />
          )}
        </NavLink>
        <NavLink to="/timeline">
          {flag6 ? (
            <span onMouseOut={onHover6}>TIMELINE</span>
          ) : (
            <FontAwesomeIcon
              icon={faTimeline}
              className="nav-Contact"
              onMouseOver={onHover6}
            />
          )}
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            href="https://github.com/Mohit58"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mohitpal321/?next=%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
