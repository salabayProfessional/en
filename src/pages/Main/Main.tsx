import React from 'react';
import "./Main.scss";

type I = string | number | boolean | null | object | [] | any;


const Main: React.FC = () => {
  
  return (
    <div className="main">
      <h1 className="title">Main</h1>
    </div>
  )
}

export default Main
