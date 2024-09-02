import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  //Projects container current position on screen from top
  const [containerPos, setContainerPos] = useState(null);
  const [headerHovered, setHeaderHovered] = useState(false);

  //Getting projects container DOM element using ref from App.js
  useEffect(() => {
    const projects = props.projectsRef?.current;
    setContainerPos(projects);
  }, [props.projectsRef]);

  //Checking if header component is currently hovered by projects container
  onscroll = (event) => {
    const position = containerPos?.getBoundingClientRect().top;
    if (position < 70) {
      setHeaderHovered(true);
    } else {
      setHeaderHovered(false);
    }
  };

  return (
    <header
      className={`header ${headerHovered ? "hover" : "unhovered"}`}
      id="header"
    >
      <div className="header__logo">
        <h1 onClick={() => window.scrollTo(0, 0)}>Jakub Babelek</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__nav__list">
          <li className="header__nav__list__item">
            <Link
              to=""
              className="header__nav__list__item__link"
              // Scrolling to the top of window
              onClick={() => window.scrollTo(0, 0)}
            >
              Home
            </Link>
          </li>
          <li className="header__nav__list__item">
            <NavLink
              to="#about-container"
              className={`header__nav__list__item__link`}
            >
              About
            </NavLink>
          </li>
          <li className="header__nav__list__item">
            <Link
              to="#contact-container"
              className="header__nav__list__item__link"
            >
              Contact
            </Link>
          </li>

          <li className="header__nav__list__item">
            <Link
              to="#projects-container"
              className={`header__nav__list__item__link`}
            >
              My work
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
