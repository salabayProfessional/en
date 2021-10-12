import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.scss";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="header__inner">
        <h1 className="logo">Logo</h1>
        <ul className="list-link">
          <li className="list-link__item">
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(20, 46, 102)",
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
          <li className="list-link__item">
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(20, 46, 102)",
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
          <li className="list-link__item">
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(20, 46, 102)",
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
          <li className="list-link__item">
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(20, 46, 102)",
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
          <li className="list-link__item">
            <NavLink 
              activeStyle={{
                fontWeight: "bold",
                color: "rgb(20, 46, 102)",
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
      </div>
    </div>
  )
};

export default Header;
