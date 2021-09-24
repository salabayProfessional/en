import { Field, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import "./Sign-in.scss";

const SignIn: React.FC = () => {

  const onSubmit = (state: any) => {
    console.log(state);
  };

  interface I {
    name: string,
    lname: string,
    password: string,
    secondPassword: string,
    email: string,
    submit: boolean,
  }

  const initialValues: I = {
    name: "",
    lname: "",
    password: "",
    secondPassword: "",
    email: "",
    submit: false,
  }

  const schema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    lname: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    password: Yup.string().required('Required'),
    secondPassword: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="sign-in">
      <h1 className="title">Sign in</h1>
      <Formik 
        onSubmit={(values: I, setFieldValue: any) => {
          onSubmit(values);
          setFieldValue("submit", true);
        }} 
        initialValues={initialValues}
        validationSchema={schema}
      >
        {({values, errors, touched, validateField, validateForm, setFieldValue, handleSubmit}: any) => {
            return (
              <Form>
                {!values.submit && (
                  <div className="registration">
                  <div className="registration__item">
                    <label htmlFor="name">
                      Name
                    </label>
                    <Field type="text" name="name" className="registration__item__field" />
                    <h4 className="error">{touched.name && errors.name}</h4>
                  </div>
                  <div className="registration__item">
                    <label htmlFor="lname">
                      Last Name
                    </label>
                    <h4 className="error">{touched.lname && errors.lname}</h4>
                    <Field type="text" name="lname" className="registration__item__field" />
                  </div>
                  <div className="registration__item">
                    <label htmlFor="password">
                      Password
                    </label>
                    <h4 className="error">{touched.password && errors.password}</h4>
                    <Field type="text" name="password" className="registration__item__field" />
                  </div>
                  <div className="registration__item">
                    <label htmlFor="secondPassword">
                      Second Password
                    </label>
                    <h4 className="error">{touched.secondPassword && errors.secondPassword}</h4>
                    <Field type="text" name="secondPassword" className="registration__item__field" />
                  </div>
                  <div className="registration__item">
                    <label htmlFor="email">
                      Email
                    </label>
                    <h4 className="error">{touched.email && errors.email}</h4>
                    <Field type="text" name="email" className="registration__item__field" />

                    <button className="btn btn-primary registration__item__field top" 
                      type="button" 
                      onClick={() => handleSubmit(values, setFieldValue)}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
                )}
              </Form>
            )
          }
        }
      </Formik>
    </div>
  )
}

export default SignIn
