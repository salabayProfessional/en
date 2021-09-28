import React from 'react'
import { Modal, ModalHeader, Table } from 'reactstrap'

const ModalCustom: React.FC<{
  modal: boolean,
  toggle: () => void,
  result: any
}> = ({
  modal, 
  toggle,
  result,
}) => {
  const list = result.words.map((word: any, idx: number) => {
    return (
          <tr key={`qwe-${idx}`}>
            <td>{word.en}</td>
            <td>{word.ua}</td>
            <td>{result.answers[idx] !== ""? result.answers[idx] : "null"}</td>
          </tr>
    )
  });

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className="">
        <ModalHeader>
          <h2 className="title">{result.name}</h2>
          <Table>
            <tbody>
              {list}
            </tbody>
          </Table>
            <div>timer: {result.options.timer}</div>
            <div>words: {result.options.words}</div>
            <div>type: en-ua</div>
            <div>true: {result.result.length}</div>
        </ModalHeader>
      </Modal>
    </div>
  )
}

export default ModalCustom;
