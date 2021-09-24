import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import "./header.scss";

const Header: React.FC = () => {

  const links = ["main", "about", "sign-in", "story", "profile"];

  const list = links.map((link: string) => {
    return (
      <li className="list-link__item">
        <NavLink 
          activeStyle={{
            fontWeight: "bold",
            color: "rgb(20, 46, 102)",
            fontSize: "22px",
          }} 
          style={{
            fontWeight: "bold",
            color: "black"
          }}
          to={`/${link}`}
          key={link}
        >
          {link}
        </NavLink>
      </li>
    )
  });

  return (
    <div className="header">
      <div className="header__inner">
        <h1 className="logo">Logo</h1>
        <ul className="list-link">
          {list}
        </ul>
      </div>
    </div>
  )
};

export default Header;
