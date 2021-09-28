export interface ViewProps {
  test: {name: string, words: {en: string, ua: string}[]} | any,
  count: number,
  end: boolean,
  children: any,
  start: boolean,
  toggleOptions: () => void,
  options: any,
  // errors: any, 
  // touched: any,
  randomWords: any,
};