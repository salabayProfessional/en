import React from 'react';
import './Row.scss';

const Row: React.FC<any> = ({Left, Right}) => {

  return (
    <div className="row-wrapper">
      <div className="left">
        { Left }
      </div>
      <div className="right">
        { Right }
      </div>
    </div>
  )
};

export default Row;
