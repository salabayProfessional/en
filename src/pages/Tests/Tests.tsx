import React, { useState } from 'react';
import {Form, Formik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { makeTest, shuffle, auditTranslate } from '../../specialFunction/specialFunction';
import { push_audited_test } from '../../store/slices/resultReducer';
import Options from '../../component/Options/Options';
import { allWords } from '../../mockData/words';
import ModalResult from '../../component/ModalResult/ModalResult';
import View from './View';
import './Tests.scss';
import Timer from '../../component/Timer/Timer';
import TasksPanel from "./components/Tasks-panel/Tasks-panel";
import { mockTests } from '../../mockData/tests';

const makeRandomArr = (arr: any) => {
  let randomArr = []; 

  for(let i = 0;i < arr; i++) {
    randomArr.push(i);
  }
  return randomArr
};

const Test: React.FC = () => {
  const dispatch = useDispatch();

  const options = useSelector((state: any) => state.options.options);
  const [test, setTest] = useState([]);
  const [count, setCount] = useState(0);
  const [end, setEnd] = useState(false);
  const [start, setStart] = useState(false);
  const [isOptions, setIsOptions] = useState(false);
  const [seeResults, setSeeResults] = useState(false);
  const [random, setRandom] = useState([1,2,3,4,5,6,7,8,9,0]);

  interface I {
    answer: any,
    answers: any,
  };

  const initialValues: I = {
    answer: '',
    answers: [],
  };

  const onSubmit = (values: any) => {
    values.answers.push(values.answer);
    const auditedTest = auditTranslate(test, values.answers, options, random);
    dispatch(push_audited_test(auditedTest));
    setSeeResults(true);
    setCount(0);
    setStart(false);
    setEnd(true);
    values.answers = [];
    values.answer = "";
  };

  const toggleOptions = () => setIsOptions(!isOptions);

  const sendAnswer = (setFieldValue: Function, values: any) => {
    setCount(count + 1);
    setFieldValue("answers", [...values.answers, values.answer]);
    setFieldValue("answer", "");
  };

  const startTest = () => {
    setTest(makeTest(allWords, options.words));
    setStart(true);
    setEnd(false);
    setIsOptions(false);
    setSeeResults(false);
    setRandom(shuffle(makeRandomArr(options.words)));
  };

  return (
    <>
      { start && <Timer timer={60} /> }
      { isOptions && <Options /> }
      <TasksPanel tests={mockTests}/> 
      <ModalResult modal={seeResults} toggle={() => setSeeResults(!seeResults)}/>
      <Formik 
        initialValues={initialValues} 
        onSubmit={(values) => onSubmit(values)} 
      >
        {({values, setFieldValue}) => {
          return (
            <Form onKeyDown={(e: any) => {
              if(e.code === 'Enter' || e.code === 'NumpadEnter') {
                console.log("ENTER")
              }
            }}>
                <View
                  test={test} 
                  count={count} 
                  end={end}
                  start={start}
                  toggleOptions={toggleOptions}
                  options={options}
                  randomWords={random}
                >
                  {
                    count === options.words - 1?
                    <button 
                      type="submit" 
                      className="btn btn-success btn-lg"
                      >
                        END the test
                    </button>
                    :
                    start && 
                    <button 
                      type="button" 
                      className="btn btn-success btn-lg"
                      onClick={() => {
                        sendAnswer(setFieldValue, values);
                        console.log(count)
                      }}
                    >
                      Send answer
                    </button>
                  }
                  {
                    !start &&
                    <button 
                      type="button"
                      className="btn btn-success btn-lg"
                      onClick={() => startTest()}>
                      START
                    </button>
                  }
                </View>
            </Form>
          )
        }}
      </Formik>
    </>
  )
};

export default Test;
