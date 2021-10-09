import React from 'react';

const SignOut: React.FC = () => {

  return (
    <div className="sign-out">
      <h1 className="title">Sign out</h1>
      <p className="under-title">Now you can sign ou because you sign in</p>
      <button type="submit" className="btn btn-danger btn-100">Sign out</button>
    </div>
  )
};

export default SignOut;
