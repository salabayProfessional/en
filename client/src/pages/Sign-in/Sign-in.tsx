import React from 'react';
import "./Sign-in.scss";
import { useAuth } from '../../hooks/useAuth';
import SignInForm from './component/Sign-in-form/Sign-in-form';
import SignOutForm from './component/Sign-out-form/Sign-out-form';

const SignIn: React.FC = () => {

  const isAuth = useAuth()
  console.log(isAuth)
  return (
    <div className="page">
      <div className="sign-in">
        {
          isAuth? <SignOutForm /> : <SignInForm />
        }
      </div>
    </div>
  );
}

export default SignIn
