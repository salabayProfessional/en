import React from 'react';
import { NavLink } from 'react-router-dom';
import { generateString } from '../../specialFunction/specialFunction';
import "./header.scss";

const Header: React.FC = () => {

  const links = ["main", "tests", "story", "sign-in", "profile"];

  const list = links.map((link: string) => {
    return (
      <li className="list-link__item" key={generateString()}>
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
          to={`/${link}`}
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
