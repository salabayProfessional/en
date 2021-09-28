export interface DictionaryReducer {
  dictionaryWords: {en: string, ua: string}[],
  dictionaryTests: {
    name: string,
    id: any,
    words: {
      en: string, ua: string,
    }[],
  }[],
};

export interface OptionsReducer {
  options: {
    timer: number,
    words: number,
    random: boolean,
    type: string
  }
};

export interface StoryReducer {

};

export interface TestsReducer {

};

export interface ProfileReducer {

};

export interface ProfileReducer {

};

export interface RootReducer {

};