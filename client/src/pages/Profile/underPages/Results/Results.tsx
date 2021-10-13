import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { ModalResult } from '../../../../component/Modal/Modals';
import Pagination from '../../../../component/Pagination/Pagination';
import { generateString } from '../../../../specialFunction/specialFunction';
import { RootReducer } from '../../../../store/slices/types';
import "./Results.scss";
import Statistics from './Statistics';

const Results: React.FC = () => {
  const results = useSelector((state: RootReducer) => state.result.results);
  const [idResult, setIDResult]: any = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [nextRes, setNextRes] = useState(12);

  const toggleIsModal = () => setIsModal(!isModal);

  const resultList = results.map((result) => {
    return (
      <div className="test__item" key={generateString()}>
        <h3 className="title">{result.name}</h3>
        <Button 
          className="btn btn-success btn-center btn-100" 
          type="button" 
          onClick={() => {
            setIDResult(result);
            toggleIsModal();
          }}>
          Show
        </Button>
      </div>
    )
  })

  return (
    <div className="results-page">
      <ModalResult 
        isModal={isModal} 
        toggle={toggleIsModal} 
        result={idResult}
      />
      <Statistics resultItems={results}/>
      <div className="result-list">
        {
          resultList.slice(nextRes - 12, nextRes)
        }
      </div>
        <div className="result__footer">
          <div className="pagination-panel">
            <Pagination setNextRes={setNextRes} nextRes={nextRes} list={resultList.length}/>
          </div>
        </div>
    </div>
  )
};

export default Results;