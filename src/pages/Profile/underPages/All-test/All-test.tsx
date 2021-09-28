import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'reactstrap';
import ModalInfo from '../../../../component/Modal-info/Modal-info';
import "./All-test.scss";

interface Test {
  name: string
  options: {
    timer: number,
    amount: number,
  }
  type: string
  words: {en: string, ua: string}[]
}

const AllTest: React.FC = () => {
  const allTests = useSelector((state: any) => state.tests.allTests);
  const [isModal, toggleIsModal] = useState(false);
  const [infoID, setInfoId] = useState("");
  const toggleIsInfoModal = () => toggleIsModal(!isModal);

  const list = allTests.map((test: Test) => {
    console.log(test);
    return (
      <div className="test__item">
        <h3 className="title">{test.name}</h3>
        <Button className="btn btn-danger btn-center" type="button" onClick={() => {
          setInfoId(test.name);
          toggleIsInfoModal();
        }}>Kva Kva!</Button>
      </div>
    )
  })

  return (
    <>
      <ModalInfo 
        toggle={toggleIsInfoModal} 
        info={allTests.find((test: Test) => test.name === infoID)} 
        isModal={isModal} 
      />
      <div className="All-test">
        <h1>All tests</h1>
        <div className="All-test__inner">
          { list }
        </div>
      </div>
    </>
  );
};

export default AllTest;