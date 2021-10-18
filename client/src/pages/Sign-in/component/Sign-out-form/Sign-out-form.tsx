import React from 'react';
import { useDispatch } from 'react-redux';
import { log_out } from '../../../../store/slices/authReducer';

const SignOut: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <form className="sign-out col-12 col-lg-6">
      <h1 className="title">Sign out</h1>
      <p className="under-title">Now you can sign ou because you sign in</p>
      <button type="button" onClick={() => dispatch(log_out())} className="btn btn-danger btn-bg btn-10">Sign out</button>
    </form>
  )
};

export default SignOut;
