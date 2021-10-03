import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import SignForm from './component/Sign-form/Sign-form';
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
    <div className="sign-in bg-dark">
      <Formik 
        onSubmit={(values: I, setFieldValue: any) => {
          onSubmit(values);
          setFieldValue("submit", true);
        }} 
        initialValues={initialValues}
        validationSchema={schema}
      >
        {() => {
            return (
              <SignForm />
            )
          }
        }
      </Formik>
    </div>
  )
}

export default SignIn
