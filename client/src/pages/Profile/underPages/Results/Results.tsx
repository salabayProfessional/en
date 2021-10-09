import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import { ModalResult } from '../../../../component/Modal/Modals';
import { generateString } from '../../../../specialFunction/specialFunction';
import { RootReducer } from '../../../../store/slices/types';
import "./Results.scss";
import Statistics from './Statistics';

const Results: React.FC = () => {
  const results = useSelector((state: RootReducer) => state.result.results);
  const [idResult, setIDResult]: any = useState(null);
  const [isModal, setIsModal] = useState(false);

  const toggleIsModal = () => setIsModal(!isModal);

  const resultList = results.map((result) => {
    return (
      <div className="test__item" key={generateString()}>
        <h3 className="title">{result.name}</h3>
        <Button 
          className="btn btn-danger btn-center" 
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
      <div className="results-page__list">
        {
          resultList
        }
      </div>
    </div>
  )
};

export default Results;