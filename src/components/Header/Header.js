import React, { memo } from "react";
import "./Header.scss";
import logo from "../../images/logo.png";
import logo2x from "../../images/logo@2x.png";
import logo3x from "../../images/logo@3x.png";

const Header = () => {
  return (
    <header className="header">
        <div className="header-main">
          <img
            src={logo}
            srcSet={`${logo2x} 2x , ${logo3x} 3x`}
            className="header-logo"
            alt="logo"
          />
          <div className="header-left">
          <div className="menu ">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="index.html" className="menu-link">
                  introduction
                </a>
              </li>
              <li className="menu-item">
                <a href="#about" className="menu-link">
                  solution
                </a>
              </li>
              <li className="menu-item">
                <a href="#work" className="menu-link">
                  rate plan
                </a>
              </li>
            </ul>
          </div>
          {/* <div className=" header-tool">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#experience" className="menu-link">
                  login
                </a>
              </li>
              <li className="menu-item">
                <a href="#contact" className="menu-link">
                  apply for free use
                </a>
              </li>
            </ul>
          </div> */}
          </div>
        </div>
    </header>
  );
};

export default memo(Header);
