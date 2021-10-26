import React from 'react'
import { generateString } from '../../../../specialFunction/specialFunction'

const DataWords: React.FC<{data: any, active: string, newActive: any}> = ({data, active, newActive}) => {

  return (
    <>
      <tr className="word-item col-11">
        <th>{data?.word}</th>
        <th className="option col-1" onClick={() => newActive(data.word)}>...</th>
      </tr>
      <div className={`tab-item ${active === data?.word? "show" : "close"}`}>
        <p><b>Phonetics:</b> {data?.phonetics[0]?.text}</p>
        <p><b>Meanings:</b> part of speech: {data?.meanings[0]?.partOfSpeech}<br /></p>
        <p><b>Definitions:</b> {data?.meanings[0]?.definitions[0]?.definition}<br /></p>
        <p><b>Synonyms:</b> {data?.meanings[0]?.definitions[0]?.synonyms.map((synonym: string) => <span key={generateString()}>{synonym}, </span>)}<br /></p>
        <p><b>Example:</b> {data?.meanings[0]?.definitions[0]?.example}<br /></p>
        <p><b>Origin</b> {data?.origin}<br /></p>
      </div>
    </>
  )
}

export default DataWords
