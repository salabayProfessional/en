import { Field } from 'formik';
import React from 'react'
import { Button, FormGroup, Label } from 'reactstrap';
import Row from '../../../../../../component/Row/Row';

const DeleteSetting: React.FC = () => {

  return (
    <div>
      <div className="user-data-footer">
        <h2 className="title">Delete</h2>
        <p className="under-title">If you want to delete something you can to writing the name a test and click on delete after it test will be deleted!</p>
        <Row 
          Left={(
            <>
            <h1 className="title">Test</h1>
            <FormGroup>
              <Label for="Name">Delete Test</Label>
              <Field className="form-control" type="text" placeholder="name" name="name" id="name" />
              <Button type="button" className="btn btn-success btn-100">DELETE</Button>
              <Button type="button" className="btn btn-success btn-100">DELETE ALL</Button>
            </FormGroup>
            </>
          )} 
          Right={(
          <>
          <h1 className="title">Result</h1>
          <FormGroup>
            <Label for="Name">Delete Result</Label>
            <Field className="form-control" type="text" placeholder="name" name="name" id="name" />
            <Button type="button" className="btn btn-success btn-100">DELETE</Button>
            <Button type="button" className="btn btn-success btn-100">DELETE ALL</Button>
          </FormGroup>
          </>
          )}/>
      </div>
    </div>
  )
};

export default DeleteSetting;
