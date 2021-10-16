import React from 'react';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import optionsData from '../../mockData/options';
import { generateString } from '../../specialFunction/specialFunction';
import { set_options } from '../../store/slices/optionsReducer';
import './Options.scss';

const Options: React.FC = () => {
  const dispatch = useDispatch()
  
  const initialValues = {
    timer: "60",
    type: "en-ua",
    words: "10",
    random: true,
  };

  const onSubmit = (values: any) => {
    dispatch(set_options(values));
  };

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values) => onSubmit(values)}
    >
      {({values}: any) => {
        return (
          <Form>
            <div className="options col-3 bg-light">    
              <div className="options__content">
                <h1 className="title">OPTIONS</h1>
                <div className="options__content__list">
                  { 
                    optionsData.map((item) => (
                      <li key={generateString()}>     
                        <div className="group-type__options">
                          <h3 className="start-title">{item.title}</h3>
                          <div className="group-type__option-content">
                            {
                              item.options.map((option: string | number) => (
                                <div className="group-type__option-content-inner" key={generateString()}>
                                  <div>{option}</div>
                                  <div className={`input-checkbox ${option === values[item.title] && "active"}`} />
                                  <Field name={item.title} value={option} type="radio" className="filed-checkbox" />
                                </div>
                              ))
                            }
                          </div>
                        </div>
                      </li>
                    ))
                  } 
                </div>
              </div>
              <button type="submit" className="btn btn-outline-success btn-apply">APPLY</button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
};

export default Options;
