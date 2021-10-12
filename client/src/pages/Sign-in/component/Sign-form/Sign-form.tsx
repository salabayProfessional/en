import React from 'react';
import { Col, FormGroup, Label } from 'reactstrap'
import { Field } from 'formik';

const SignForm: React.FC = () => {
  return (
    <>
      <FormGroup>
        <Label for="exampleEmail" sm={2}>Email</Label>
        <Col sm={10}>
          <Field type="email" className="btn-100" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="name" sm={2}>Name</Label>
        <Col sm={10}>
          <Field type="text" className="btn-100" name="name" placeholder="with a placeholder" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword" sm={2}>Password</Label>
        <Col sm={10}>
          <Field type="password" className="btn-100" name="password" id="examplePassword" placeholder="password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="repeatPassword" sm={2}>RepeatPassword</Label>
        <Col sm={10}>
          <Field type="password" className="btn-100" name="repeatPassword" id="repeatPassword" placeholder="repeat password placeholder" />
        </Col>
      </FormGroup>
      <FormGroup>
        <Label for="exampleText" sm={2}>Text Area</Label>
        <Col sm={10}>
          <Field type="textarea" className="btn-100" name="text" id="exampleText" />
        </Col>
      </FormGroup>
      {/* <FormGroup>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </Col>
      </FormGroup> */}
      {/* <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">Radio Buttons</legend>
      </FormGroup> */}
      <FormGroup>
        <Col sm={10}>
          <button type="submit" className="btn btn-success btn-100">Submit</button>
        </Col>
      </FormGroup>
    </>
  )
};

export default SignForm;
