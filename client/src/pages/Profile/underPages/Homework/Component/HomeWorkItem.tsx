import React from 'react';
import './HomeWorkItem.scss';

const HomeWorkItem: React.FC<{name: string}> = ({name}) => {

  return (
    <div className="home-work-item">
       <h4 className="title">{name}</h4>
    </div>
  )
};

export default HomeWorkItem;
