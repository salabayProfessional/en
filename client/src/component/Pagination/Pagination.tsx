import React, { useState } from 'react';

const Pagination: React.FC<{setNextRes: any , nextRes?: any, list: number}> = ({
  setNextRes,
  nextRes,
  list,
}) => {
  const [active, setActive] = useState(0);

  const muchPagination = list / 12;

  let listPagination = [];

  for(let i = 1; i < muchPagination+1; i++) {
    listPagination.push((
      <li className={`page-item ${active === i && "active"}`} onClick={() => {
        setActive(i);
        setNextRes(i * 12);
      }}>
        <a className="page-link" href="#">{i}</a>
      </li>
    ))
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#">&laquo;</a>
      </li>
      {
        listPagination
      }
      <li className="page-item">
        <a className="page-link" href="#">&raquo;</a>
      </li>
    </ul>
  )
}

export default Pagination;
