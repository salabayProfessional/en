import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { shuffle } from '../../../../specialFunction/specialFunction';
import DictionaryOptions from './components/DictionaryOptions/DictionaryOptions';
import DictionaryPart from './components/DictionaryPart/DictionaryPart';
import { mockData } from './mockData';
import "./Dictionary.scss";

const Dictionary: React.FC = () => {
  const [isList, setIsList] = useState(false);
  const toggleList = () => setIsList(!isList);
  const [activeDictionary, setActiveDictionary] = useState<any>(mockData[0]);
  const [isHideColumnUa, setIsHideColumnUa] = useState(false);
  const [isHideColumnEn, setIsHideColumnEn] = useState(false);
  const toggleHideColumnUa = () => setIsHideColumnUa(!isHideColumnUa);
  const toggleHideColumnEn = () => setIsHideColumnEn(!isHideColumnEn);
  const { register, handleSubmit, reset } = useForm();

  interface DictionaryPart {name: string, words: {en: string, ua: string}}

  const toggleActiveItem = (dictionary: DictionaryPart) => {
    if(dictionary.name === activeDictionary) {
      return
    } else {
      setActiveDictionary(dictionary);
    }
  }

  const randomDictionaryWords = (activeDictionary: any) => {
    setActiveDictionary({
      name: activeDictionary.name, 
      words: shuffle(activeDictionary.words)
    });
  };

  const onSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="dictionary-page">
      <div className="col-9">
          <div className="dictionary-words__party">
            <DictionaryPart 
              activeDictionary={activeDictionary} 
              register={register}
              isHideColumnUa={isHideColumnUa}
              isHideColumnEn={isHideColumnEn}
            />
          </div>
      </div>
      <div className="col-3">
        <DictionaryOptions 
            isList={isList}
            activeDictionary={activeDictionary}
            randomDictionaryWords={randomDictionaryWords}
            toggleActiveItem={toggleActiveItem}
            toggleList={toggleList}
            reset={reset}
            toggleHideColumnUa={toggleHideColumnUa}
            toggleHideColumnEn={toggleHideColumnEn}
        />
      </div>
    </form>
  );
};

export default Dictionary;