import React from 'react';
import { Table } from 'reactstrap';
import { generateString } from '../../../../../../specialFunction/specialFunction';

const DictionaryPart: React.FC<any> = ({
  activeDictionary, 
  register,
  isHideColumnEn,
  isHideColumnUa
}) => {

  return (
    <>
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
                  <tr key={generateString()}>
                    <th scope="row">{ idx }</th>
                    {!isHideColumnEn? <td className="words-column">{ word.en }</td> : <td className="words-column"></td>}
                    {!isHideColumnUa? <td className="words-column">{ word.ua }</td> : <td className="words-column"></td>}
                    <td><input defaultValue="" {...register(`answers${word.en}`)} /></td>
                  </tr>
                )
              })
          }
        </tbody>
      </Table>
      <button className="btn btn-outline-success btn-100">EDIT THE DICTIONARY</button>
    </>
  )
};

export default DictionaryPart;
