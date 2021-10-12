import React from 'react';

const Row: React.FC<any> = ({Left, Right}) => {

  return (
    <div className="row row-wrapper">
      <div className="col-6">
        { Left }
      </div>
      <div className="col-6">
        { Right }
      </div>
    </div>
  )
};

export default Row;
