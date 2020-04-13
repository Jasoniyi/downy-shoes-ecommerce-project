import React, { useState } from "react";

import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const Menu = () => {
  // for calling search field
  const [showSearch, setShowSearch] = useState(false);
  const [searchIcon, setSearchIcon] = useState(true);

  //for calling menu
  const [showMenu, setShowMenu] = useState(false);
  const [icon, setIcon] = useState(true);

  // shows search element and sets icon to "close icon"
  const handleShowSearch = () => {
    setShowSearch(true);
    setSearchIcon(false);
  };

  // removes search element and sets the icon back to search
  const handleResetShowSearch = () => {
    setShowSearch(false);
    setSearchIcon(true);
  };

  // shows menu
  const handleshowMenu = () => {
    setShowMenu(true);
    setIcon(false);
  };
  // removes menu and enables close button work
  const handleShowMenuReset = () => {
    setShowMenu(false);
    setIcon(true);
  };
  return (
    <div>
      <div className="logo">
        <div className="logo-text">
          <h1>
            <a href="#" className="navbar-brand">
              <span>DOWNY</span>
              <i>SHOES</i>
            </a>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <span class="material-icons" id="cart">
                add_shopping_cart
              </span>
            </li>
            <li>
              {searchIcon ? (
                <span
                  class="material-icons"
                  id="search"
                  onClick={handleShowSearch}
                >
                  search
                </span>
              ) : (
                <span
                  class="material-icons"
                  id="menus"
                  onClick={handleResetShowSearch}
                >
                  close
                </span>
              )}
            </li>
            <li>
              {icon ? (
                <span
                  class="material-icons"
                  id="menus"
                  onClick={handleshowMenu}
                >
                  dehaze
                </span>
              ) : (
                <span
                  class="material-icons"
                  id="menus"
                  onClick={handleShowMenuReset}
                >
                  dehaze
                </span>
              )}
            </li>
          </ul>
        </div>
      </div>
      {showSearch ? (
        <Fade top>
          <div className="search">
            <input type="text" placeholder="Search here ..." />
          </div>
        </Fade>
      ) : null}
      {showMenu ? (
        <Slide left>
          <div className="menu-block">
            <span
              className="material-icons menu-close"
              onClick={handleShowMenuReset}
            >
              close
            </span>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/shop">Shop Now</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </Slide>
      ) : null}
    </div>
  );
};

export default Menu;
