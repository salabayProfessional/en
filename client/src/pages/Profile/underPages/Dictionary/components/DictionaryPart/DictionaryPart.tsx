import React from 'react';
import { Table } from 'reactstrap';

const DictionaryPart: React.FC<any> = ({
  activeDictionary, 
  register,
  isHideColumnEn,
  isHideColumnUa
}) => {

  return (
    <div className="table-dictionary-words-wrapper">
      <Table className="table-dictionary-words">
        <thead>
          <tr>
            <th>#</th>
            <th>EN</th>
            <th>UA</th>
            <th>YOUR</th>
          </tr>
        </thead>
        <tbody>
          { 
              activeDictionary?.words.map((word: any, idx: number) => {
                return (
                  <tr key={`${word.en}`}>
                    <th scope="row">{ idx }</th>
                    {!isHideColumnEn? <td>{ word.en }</td> : <td className="words-column"></td>}
                    {!isHideColumnUa? <td>{ word.ua }</td> : <td className="words-column"></td>}
                    <td><input defaultValue="" {...register(`answers${word.en}`)} /></td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <button className="btn btn-outline-success btn-100">EDIT THE DICTIONARY</button>
    </div>
  )
};

export default DictionaryPart;
