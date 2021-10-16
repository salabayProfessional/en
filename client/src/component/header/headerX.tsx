import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import './header.scss';

const LinkList = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/main"
          >
            main
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/tests"
          >
            tests
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/story"
          >
            story
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/sign-in"
          >
            sign-in
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
              fontSize: "22px",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/profile/setting"
          >
            profile
          </NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">Action</a>
            <a className="dropdown-item" href="#">Another action</a>
            <a className="dropdown-item" href="#">Something else here</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Separated link</a>
          </div>
        </li>
      </ul>
    </div>
  )
}

const HeaderX: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg header-fixed navbar-dark bg-dark">
      <div className="container-fluid">
        <h1>
          <NavLink 
            activeStyle={{
              fontWeight: "bold",
              color: "rgb(255, 255, 255)",
            }} 
            style={{
              fontWeight: "bold",
              color: "black",
              textDecoration: "none"
            }}
            to="/main"
          >
            Home :)
          </NavLink>
        </h1>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" onClick={() => setIsMobileMenu(!isMobileMenu)}></span>
        </button>
          {/* <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder="Search">
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form> */}
          <LinkList />
        </div>
          <MobileMenu show={isMobileMenu} />
    </nav>
  )
};

export default HeaderX
