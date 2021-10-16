import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu: React.FC<{show: boolean}> = ({show}) => {

  return (
    <div className="Mobile-menu">
      {
        show && (
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
        )
      }
    </div>
  )
};

export default MobileMenu;
