import { Field, Formik, Form } from 'formik';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormGroup, Label, Table } from 'reactstrap';
import { INP_BG } from '../../../../classes';
import { allWords } from '../../../../mockData/words';
import { generateString } from '../../../../specialFunction/specialFunction';
import { create_test } from '../../../../store/slices/testsReducer';
import "./Create-test.scss";
import { InitialValues } from './types';

const CreateTest: React.FC = () => {
  const dispatch = useDispatch();

  const initialValues: InitialValues = {
    name: "",
    amount: 10,
    type: "en-ua",
    timer: 60,
    selectedWords: [],
  }

  const list = useMemo(() => {
    return allWords.map((word: {en: string, ua: string}) => {
      return (
        <tr key={generateString()}>
          <td>{word.en}</td>
          <td>{word.ua}</td>
          <th>
            <Field type="checkbox" value={`${word.en}&${word.ua}`} name="selectedWords" />
          </th>
        </tr>
      )
    })
  }, []);

  const onSubmit = (values: any, setFieldValue: any) => {
      const words = values.selectedWords.map((word: string) => {
        const idx = word.indexOf("&");
        return {en: word.slice(0, idx), ua: word.slice(idx + 1)};// split words on "&" en-word&ua-word
      });
  
      dispatch(create_test({
        name: values.name,
        words: words,
        type: "en-ua",
        options: values.options
      }));
      
      setFieldValue("name", "");
      setFieldValue("timer", 60);
      setFieldValue("amount", 10);
      setFieldValue("type", "en-ua");
      setFieldValue("selectedWords", []);
  };

  return (
    <>
    <div className="create-test">
      <Formik initialValues={initialValues} onSubmit={(values, {setFieldValue}) => onSubmit(values, setFieldValue)}>
        {({values, handleSubmit}) => {
          return (
            <>
              <header>
                <h2>Words selected: {values.selectedWords.length}</h2>
              </header>
              <Form className="crete-test__inner">
                <div className="left col-12 col-lg-6">
                  <Table className="bg-light">
                    <tbody>
                      {
                        list
                      }
                    </tbody>
                  </Table>
                </div>
                <div className="right col-12 col-lg-6 between">
                  <FormGroup>
                    <Label for="Name">Name</Label>
                    <Field className={INP_BG} type="text" placeholder="name" name="name" id="Name" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="Type">Type</Label>
                    <Field className={INP_BG} as="select" name="type" id="Type">
                      <option>EN - UA</option>
                      <option>UA - EN</option>
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Label for="Amount">Amount</Label>
                    <Field className={INP_BG} as="select" name="amount" id="Amount">
                      <option>10</option>
                      <option>15</option>
                      <option>20</option>
                      <option>25</option>
                      <option>30</option>
                    </Field>
                  </FormGroup>
                  <FormGroup>
                    <Label for="Timer">Timer</Label>
                    <Field className={INP_BG} as="select" name="timer" id="Timer">
                      <option>30</option>
                      <option>60</option>
                      <option>90</option>
                      <option>120</option>
                      <option>150</option>
                    </Field>
                  </FormGroup>
                  <footer>
                    <FormGroup>
                      <Button 
                        className="form-control btn-bg" 
                        color="success" 
                        type="button" 
                        onClick={() => {
                          if(values.selectedWords.length !== values.amount) {
                            return alert(`You need to select a ${values.amount}`)
                          } else {
                            alert("success");
                            handleSubmit();
                          }
                      }}
                      >
                        CREATE
                      </Button>
                    </FormGroup>
                  </footer>
                </div>
              </Form>
            </>
          )
        }}
      </Formik>
    </div>
    </>
  )
}

export default CreateTest;