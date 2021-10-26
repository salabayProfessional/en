import React from 'react';
import HomeWorkItem from './Component/HomeWorkItem';
import "./HomeWork.scss";

const HomeWork: React.FC = () => {

  return (
    <div>
      
      <div className="home-word-list"> 
        <HomeWorkItem name="homework" />
      </div>
    </div>
  )
};

export default HomeWork;
