import { Formik, Form, Field, validateYupSchema } from "formik";
import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, Table, FormGroup } from 'reactstrap';
import { allWords } from "../../mockData/words";
import { create_test } from "../../store/slices/testsReducer";
import "./ModalCreateTest.scss";

const ModalCreated: React.FC<any> = ({
  modal, 
  toggle,
}) => {
  const dispatch = useDispatch();

  interface InitialValues {
    name: string,
    options: {
      amount: number,
      type: string,
      timer: number,
    },
    words: { 
      en: string, 
      ua: string 
    }[],
  }

  const initialValues = {
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

  const onSubmit = (values: InitialValues) => {
    dispatch(create_test({
      name: values.name,
      words: values.words,
      type: "en-ua",
      options: values.options
    }));
    toggle();
  }

  return (
    <Formik initialValues={initialValues} onSubmit={(values) => onSubmit(values)} >
      <Modal isOpen={modal} toggle={toggle}>
        <Form>
          <ModalBody>
            <div className="modal__table">
              <Table className="bg-dark">
                <tbody>
                  { allWordsList }
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <FormGroup>
            <div className="input__name">
              <input className="form-control" type="text" placeholder="name"/>
            </div>
          </FormGroup>
          <ModalFooter>
            <Button color="success" type="submit">SAVE</Button>
            <Button color="danger" onClick={toggle}>UNDO</Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Formik>
  );
}

export default ModalCreated;