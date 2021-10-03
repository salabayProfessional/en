import { Field } from 'formik';
import React from 'react'
import { Button, FormGroup, Label } from 'reactstrap';
import avatar from "../../../../../../images/photo.jpeg";
import fileReader from '../../../../../../specialFunction/file-reader';

const ChangesSetting: React.FC<{ref: any}> = ({ref}) => {

  return (
    <header className="user-data-header">
      <div className="set-fields col-6">
        <h2>Change</h2>
        <FormGroup>
          <Label for="Name">Change Name</Label>
          <Field className="form-control" type="text" placeholder="name" name="name" id="name" />
          <Button type="button" className="btn btn-success btn-100">Change name</Button>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Change Password</Label>
          <Field className="form-control" type="password" placeholder="password" name="password" id="password" />
          <Button type="button" className="btn btn-success btn-100">Change password</Button>
        </FormGroup>
        <FormGroup>
          <Label for="Name">Change Email</Label>
          <Field className="form-control" type="text" placeholder="email" name="email" id="email" />
          <Button type="button" className="btn btn-success btn-100">Change email</Button>
        </FormGroup>
      </div>
      <div className="set-photo">
        <FormGroup>
          <img src={avatar} className="avatar" id="avatar" />
          <Label>Change Image</Label>
          <input type="file" className="btn btn-outline-success btn-100" accept="image/*" ref={ref} onChange={(e: any) => fileReader(e.target, ref)}/>
        </FormGroup>
      </div>
    </header>
  )
};

export default ChangesSetting;
