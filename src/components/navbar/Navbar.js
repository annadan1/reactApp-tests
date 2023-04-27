import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState();

  const handleClick = (e) => {
    let { id } = e.target;
    setActiveLink(id);
  };

  useEffect(() => {
    setActiveLink("1");
  }, []);
  return (
    <div className="linkContainer">
      <Link
        to="/"
        id="1"
        className={activeLink === "1" ? "active" : ""}
        data-testid="main-link"
        onClick={handleClick}
      >
        MainPage
      </Link>
      <Link
        to="/about"
        id="2"
        className={activeLink === "2" ? "active" : ""}
        data-testid="about-link"
        onClick={handleClick}
      >
        AboutPage
      </Link>
      <Link
        to="/form"
        id="3"
        className={activeLink === "3" ? "active" : ""}
        data-testid="form-link"
        onClick={handleClick}
      >
        FormPage
      </Link>
      <Link
        to="/users"
        id="4"
        className={activeLink === "4" ? "active" : ""}
        data-testid="users-link"
        onClick={handleClick}
      >
        UsersPage
      </Link>
      <Link
        to="/counter"
        id="5"
        className={activeLink === "5" ? "active" : ""}
        data-testid="counter-link"
        onClick={handleClick}
      >
        CounterPage
      </Link>
    </div>
  );
};

export default Navbar;
