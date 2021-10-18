import React from 'react';
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import optionsData from '../../mockData/options';
import { generateString } from '../../specialFunction/specialFunction';
import { set_options } from '../../store/slices/optionsReducer';
import { motion } from 'framer-motion';
import './Options.scss';

const Options: React.FC<{isOpen: boolean}> = ({isOpen}) => {
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

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={(values) => onSubmit(values)}
    >
      {({values}: any) => {
        return (
          <Form>
            <motion.div 
              animate={isOpen ? "open" : "closed"}
              variants={variants}
              transition={{duration: 0.7}}
              className="options col-8 col-lg-3 bg-light"
            >    
              <div className="options__content">
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
            </motion.div>
          </Form>
        )
      }}
    </Formik>
  )
};

export default Options;
