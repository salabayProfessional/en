import React, {useState} from 'react';
import { Redirect } from 'react-router';
import { Button, Modal, ModalFooter, ModalHeader } from 'reactstrap';

const ModalResult: React.FC<{modal: boolean, toggle: () => void}> = ({modal, toggle}) => {

  const [redirect, setRedirect] = useState(false);

  if(redirect) {
    return <Redirect to="/result" />
  }

  return (
    <Modal isOpen={modal}>
      <ModalHeader toggle={toggle}>See result</ModalHeader>
      <ModalFooter>
        <Button color="primary" onClick={() => {
          setRedirect(true);
          toggle();
        }}>See</Button>
      </ModalFooter>
    </Modal>
  )
};

export default ModalResult;
