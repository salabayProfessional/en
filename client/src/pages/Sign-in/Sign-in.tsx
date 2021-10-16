import React from 'react';
import { useForm } from 'react-hook-form';
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import * as Yup from 'yup';
import { BTN_BG } from '../../classes';
import { yupResolver } from '@hookform/resolvers/yup';
// import SignForm from './component/Sign-form/Sign-form';
// import SignOut from './component/Sign-out/Sign-out';
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
    alert(JSON.stringify(values));
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

  const { register, handleSubmit, reset } = useForm({resolver: yupResolver(schema)});

  return (
    <div className="page">
      <div className="sign-in">
        <div className="sign-in__inner col-12 col-lg-4">
          <form onSubmit={handleSubmit(onSubmit)} className="sign-in__form">
            <div>
              <FormGroup>
                <Label for="name">Input without validation</Label>
                <input className="form-control btn-bg" {...register("name")}/>
                <FormFeedback>You will not be able to see this</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="password">Valid input</Label>
                <input className="form-control btn-bg" {...register("password")} />
                <FormFeedback>Sweet! that name is available</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup className="position-relative">
                <Label for="repeatPassword">Invalid input</Label>
                <input className="form-control btn-bg" {...register("repeatPassword")} />
                <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
              <FormGroup>
                <Label for="email">Invalid input</Label>
                <input className="form-control btn-bg" {...register("email")}></input>  
                <FormFeedback></FormFeedback>
                <FormText>Example help text that remains unchanged.</FormText>
              </FormGroup>
            </div>
            
            <FormGroup className="position-relative">
              <button type="submit" className={BTN_BG}>SUBMIT</button>
            </FormGroup>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn
