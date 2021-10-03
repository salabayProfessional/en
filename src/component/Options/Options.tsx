import { Field, Formik, Form } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import optionsData from '../../mockData/options';
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
              <div className="options__inner">
                <h1 className="title">OPTIONS</h1>
                <div className="options__list">
                  {
                    optionsData.map((item, idx) => {
                      const { title } = item;
                      return (
                        <li key={`options-item-${idx}`}>     
                          <h3>{title}</h3>
                          <div className="group__checkbox">
                            {item.options.map((o: any, id: number) => {
                              return (
                                <div className="option__checkbox" key={"group__checkbox" + id}>
                                  <div>{o}</div>
                                  <div className={`input-checkbox ${o === values[title]? "active" : ""}`} />
                                  <Field name={item.title} value={o} type="radio" className="filed-checkbox" />
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
