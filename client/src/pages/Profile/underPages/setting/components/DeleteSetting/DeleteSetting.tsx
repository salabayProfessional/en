import React from 'react'
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Row from '../../../../../../component/Row/Row';
import './DeleteSetting.scss';

const DeleteSetting: React.FC = () => {

  return (
    <div>
      <div className="delete-setting">
        <Row 
          Left={(
            <>
            <h1 className="title">Test</h1>
            <FormGroup>
              <Label for="Name">Delete Test</Label>
              <Input className="form-control" type="text" placeholder="name" name="name" />
              <Button type="button" className="btn btn-success btn-bg">DELETE</Button>
              <Button type="button" className="btn btn-success btn-bg">DELETE ALL</Button>
            </FormGroup>
            </>
          )} 
          Right={(
          <>
          <h1 className="title">Result</h1>
          <FormGroup>
            <Label for="Name">Delete Result</Label>
            <Input className="form-control" type="text" placeholder="name" name="name" />
            <Button type="button" className="btn btn-success btn-bg">DELETE</Button>
            <Button type="button" className="btn btn-success btn-bg">DELETE ALL</Button>
          </FormGroup>
          </>
          )}/>
      </div>
    </div>
  )
};

export default DeleteSetting;
