import React from 'react';
import { useForm } from 'react-hook-form';
import "./Main.scss";

const Main: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <div className="main-page bg-dark">
      <h1>Main page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name" {...register("name")} />
        <button type="button" onClick={(c) => console.log(c)}>perform</button>
      </form>
    </div>
  )
};

export default Main;
