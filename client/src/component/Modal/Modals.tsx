import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { generateString } from '../../specialFunction/specialFunction';
import { set_test, create_test } from '../../store/slices/testsReducer';
import CornModal from './Modal';
import { InitialValuesModalCreate, ModalInfoTypes, ModalType } from './types';
import { Formik, Form, Field } from "formik";
import { Button, Table, FormGroup, ModalHeader } from 'reactstrap';
import { allWords } from "../../mockData/words";
import "./Modal.scss";

const ModalInfo: React.FC<ModalInfoTypes> = ({
  isModal, 
  toggle,
  test,
}) => {
  const [isPassTest, setIsPassTest] = useState(false);
  const dispatch = useDispatch();

  const passTest = () => {
    toggle();
    setIsPassTest(!isPassTest);
    dispatch(set_test({name: test.name, words: test.words}));
  };

  if(isPassTest) {
    return <Redirect to="/tests" />
  };

  return (
    <CornModal 
      isModal={isModal} 
      toggle={toggle} 
      isCancel 
      isConfirm 
      confirm={passTest}
      isBody
    >
      <tbody className="words-list">
        {
          test?.words.map((word: {en: string, ua: string}) => {
            return (
              <tr key={generateString()}>
                <td>{word.en}</td>
                <td>{word.ua}</td>
              </tr>
            )
          })
        }
      </tbody>
   </CornModal>
  );
};

const ModalCreatedTest: React.FC<ModalType> = ({
  isModal, 
  toggle,
}) => {
  const dispatch = useDispatch();

  const initialValues: InitialValuesModalCreate = {
    name: "",
    words: [],
    options: {
      amount: 10,
      type: "en-ua",
      timer: 60,
    },
  }

  const allWordsList = allWords.map((word: {en: string, ua: string}, idx: number) => {
    return (
      <tr key={`list-info-${idx}`}>
        <td>{word.en}</td>
        <td>{word.ua}</td>
        <th><Field type="checkbox" value={word.en}/></th>
      </tr>
    )
  });

  const onSubmit = (values: InitialValuesModalCreate) => {
    dispatch(create_test({
      name: values.name,
      words: values.words,
      type: "en-ua",
      options: values.options
    }));
    toggle();
  }

  return (
    <CornModal
      isModal={isModal} 
      toggle={toggle} 
      isCancel 
      isConfirm 
    >
      <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)} >
        <Form>
          <tbody className="words-list">
            { allWordsList }
          </tbody>
          <FormGroup>
            <div className="input__name">
              <input className="form-control" type="text" placeholder="name"/>
            </div>
          </FormGroup>
        </Form>
      </Formik>
    </CornModal>
  );
};

const ModalNotice: React.FC<ModalType> = ({isModal, toggle}) => {

  const [redirect, setRedirect] = useState(false);

  if(redirect) {
    return <Redirect to="/profile/results" />
  }

  return (
    <CornModal isModal={isModal} toggle={toggle} isBody>
      <ModalHeader toggle={toggle}>See result</ModalHeader>
        <Button color="btn btn-outline-success" style={{width: "465px"}} onClick={() => {
          setRedirect(true);
          toggle();
        }}>To look</Button>
    </CornModal>
  )
};

const ModalResult: React.FC<{
  isModal: boolean,
  toggle: () => void,
  result: any
}> = ({
  isModal, 
  toggle,
  result,
}) => {
  const dispatch = useDispatch();
  const [isRepass, setIsRepass] = useState(false);

  const repass = () => setIsRepass(true);

  const list = result?.words.map((word: any, idx: number) => {
    return (
      <tr key={generateString()}>
        <td>{word.en}</td>
        <td>{word.ua}</td>
        <td>{result.answers[idx]}</td>
      </tr>
    );
  });

  const repassTest = () => {
    dispatch(set_test({name: result.name, words: result.words}));
    repass();
  };

  if(isRepass) {
    return <Redirect to="/tests"/>
  };

  return (
      <CornModal 
        isModal={isModal} 
        toggle={toggle} 
        isBody={false} 
        isConfirm
        confirm={repassTest}
        confirmName="Repass"
      >
        <ModalHeader>
          <h2 className="title">{result?.name}</h2>
          <Table>
            <tbody>
                {list}
            </tbody>
          </Table>
          <div className="bottom-panel"> 
            <div className="bottom-panel__left col-12">
              <div className="col">type: en-ua</div>
              <div className="col">true: {result?.result.length}</div>
              <div className="col">timer: 60</div>
            </div>
          </div>
        </ModalHeader>
      </CornModal>
  );
};

export { 
  ModalInfo,
  ModalCreatedTest,
  ModalNotice,
  ModalResult,
};