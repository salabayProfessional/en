import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Modal, ModalBody, ModalFooter, Table } from 'reactstrap';
import { generateString } from '../../specialFunction/specialFunction';
import { set_test } from '../../store/slices/testsReducer';
import "./Modal-info.scss";

const ModalInfo: React.FC<any> = ({
  isModal, 
  toggle,
  info,
}) => {
  const [pass, setPass] = useState(false);
  const dispatch = useDispatch();

  const passTest = () => {
    toggle();
    setPass(!pass);
    dispatch(set_test({name: info.name, words: info.words}));
  }

  if(pass) {
    return <Redirect to="/tests" />
  }

  console.log(info)

  return (
    <div>
      <Modal isOpen={isModal} toggle={toggle}>
        <ModalBody>
          <Table>
            <tbody className="words-list">
              {
                info?.words.map((word: {en: string, ua: string}) => {
                  return (
                    <tr key={generateString()}>
                      <td>{word.en}</td>
                      <td>{word.ua}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={ passTest }>PASS</Button>
          <Button color="info" onClick={ toggle }>UNDO</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalInfo;