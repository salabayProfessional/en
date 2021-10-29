import axios from "axios";
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useRedux";
import { add_word_own_dictionary, add_part_own_dictionary } from "../../store/slices/authReducer";
import { WordData } from "../../store/slices/types";
import SearchView from "./SearchView";

const SearchWord: React.FC = () => {
  const API_BASE = "https://api.dictionaryapi.dev/api/v2/entries/en/";
  const dispatch = useDispatch();

  const ownDictionary = useAppSelector(state => state.auth.dictionary);

  const [data, setData] = useState<WordData[]>([]);
  const [loading, setLoading] = useState(false);

  interface InitialState {
    word: string
  };

  const initialState : InitialState= {
    word: "",
  };

  const onSubmit = async (values: InitialState) => {
    setLoading(true);
    axios.get(API_BASE + values.word)
    .then((d: any) => {
      setData(d.data);
      setLoading(false);
    })
  };

  const dispatchOwnWord = (data: any) => {
    const length = ownDictionary.length; //last idx

    if(ownDictionary.length === 0 || ownDictionary[length - 1]?.words.length >= 30) {
      dispatch(add_part_own_dictionary({part: `${length + 1} part`, words: []}));
      dispatch(add_word_own_dictionary(data));
    };
    
    if(ownDictionary[length - 1]?.words?.length < 30) {
      dispatch(add_word_own_dictionary(data));
    };
  };

  return <SearchView 
    initialState={initialState}
    data={data}
    dispatchWord={dispatchOwnWord}
    onSubmit={onSubmit}
    loading={loading}
  />
};

export default SearchWord;
