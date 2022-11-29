import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";


const Menu = () => (
  <>
      <Link to="/">Dom</Link>
      <Link to="/projects">Projekty</Link>
      <Link to="/experience">Doświadczenie</Link>
      <Link to="/contact">Kontakt</Link>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setToggleMenu(false);
  }, [location]);

  

  return (
    <div className="navbar__main" id={toggleMenu ? "open" : "close"}>
      <div className="navbar__title">
        <h1 >Piotr Deręgowski</h1>
      </div>
      <div className="navbar__links">
        {/*  START LINKS */}
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>

      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="navbar__menu-container scale-up-center">
            <div className="navbar__menu-container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
