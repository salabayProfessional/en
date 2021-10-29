import React from "react";
import { Field, Form, Formik } from "formik";
import { Spinner } from "reactstrap";
import { WordData } from "../../store/slices/types";
import { generateString } from "../../specialFunction/specialFunction";
import { BTN_BG } from "../../classes";
import "./SearchWord.scss";

const SearchView: React.FC<{
  onSubmit: any,
  initialState: any,
  loading: any,
  data: any,
  dispatchWord: any
}> = ({
  onSubmit,
  initialState,
  loading,
  data,
  dispatchWord,
}) => (
  <div className="search-word col-12">  
    <Formik  
      onSubmit={onSubmit}
      initialValues={initialState}
    >
      {
        () => {
          return (
            <Form className="search-panel col-12">
              <Field className="form-control btn-bg" placeholder="word" name="word" />
              <div className="info-panel">
                {
                  loading? <Spinner /> : (
                    data?.map((d: WordData) => (
                      <div key={generateString()}>
                        <h4>{d.word}</h4>
                        <p><b>Phonetics:</b> {d?.phonetics[0]?.text}</p>
                        <p><b>Meanings:</b> part of speech: {d?.meanings[0]?.partOfSpeech}<br /></p>
                        <p><b>Definitions:</b> {d?.meanings[0]?.definitions[0]?.definition}<br /></p>
                        <p><b>Synonyms:</b> {d?.meanings[0]?.definitions[0]?.synonyms.map((synonym: string) => <span>{synonym}, </span>)}<br /></p>
                        <p><b>Example:</b> {d?.meanings[0]?.definitions[0]?.example}<br /></p>
                        <p><b>Origin</b> {d?.origin}<br /></p>
                        <button 
                          className={BTN_BG} type="button" 
                          onClick={() => dispatchWord({word: data})}
                        >
                          ADD IN DICTIONARY
                        </button>
                      </div>
                    ))
                  )
                }
              </div>
            </Form>
          )
        }
      }
    </Formik>
  </div>
);

export default SearchView
