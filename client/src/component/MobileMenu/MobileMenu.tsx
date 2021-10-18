import React from 'react';
import { NavLink } from 'react-router-dom';
import './MobileMenu.scss';

const MobileMenu: React.FC<{
  show: boolean,
  setIsMobileMenu: any,
}> = ({
  show,
  setIsMobileMenu,
}) => {

  return (
    <div className="Mobile-menu">
      {
        show && (
          <ul className="navbar-nav me-auto">
            <li className="nav-item" onClick={() => setIsMobileMenu(false)}>
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
            <li className="nav-item" onClick={() => setIsMobileMenu(false)}>
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
            <li className="nav-item" onClick={() => setIsMobileMenu(false)}>
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
            <li className="nav-item" onClick={() => setIsMobileMenu(false)}>
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
            <li className="nav-item" onClick={() => setIsMobileMenu(false)}>
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
          </ul>
        )
      }
    </div>
  )
};

export default MobileMenu;
