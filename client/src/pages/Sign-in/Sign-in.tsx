import { Formik, Form } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import SignForm from './component/Sign-form/Sign-form';
import SignOut from './component/Sign-out/Sign-out';
import "./Sign-in.scss";

const SignIn: React.FC = () => {

  interface I {
    name: string,
    password: string,
    repeatPassword: string,
    email: string,
    submit: boolean,
  }

  const initialValues: I = {
    name: "",
    password: "",
    repeatPassword: "",
    email: "",
    submit: false,
  }

  const onSubmit = (values: I) => {
    console.log(values);
  };

  const schema = Yup.object().shape({
    name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
    password: Yup.string().required('Required'),
    repeatPassword: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="sign-in bg-dark">
      <Formik 
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values: I, {setFieldValue}: any) => {
          setFieldValue("submit", true);
          onSubmit(values);
        }} 
      >
        {({values}) => (
            <div className="sign-in">
              <div className="sign-in__inner">
                <Form>
                  {
                    values.submit ? <SignOut /> : <SignForm />
                  }
                </Form>
              </div>
            </div>
          )
        }
      </Formik>
    </div>
  )
}

export default SignIn
