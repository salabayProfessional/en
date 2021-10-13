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
            <div className="options bg-dark">    
              <div className="options__content">
                <h1 className="title">OPTIONS</h1>
                <div className="options__list">
                  {
                    optionsData.map((item) => {
                      const { title } = item;
                      return (
                        <li key={generateString()}>     
                          <div className="group-type__options">
                            <h3>{title}</h3>
                            {item.options.map((option: string | number,) => {
                              return (
                                <div className="group-type__options__content" key={generateString()}>
                                  <div>{option}</div>
                                  <div className={`input-checkbox ${option === values[title] && "active"}`} />
                                  <Field name={title} value={option} type="radio" className="filed-checkbox" />
                                </div>
                              )
                            })}
                          </div>
                        </li>
                      )
                    })
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
