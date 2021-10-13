import { allWords } from "../mockData/words";

const generateString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

const shuffle = (array: any) => {
  return array.sort(() => Math.random() - 0.5);
};

const auditTranslate = (
  test: any,
  answers: string[],
  options: any,
  random: number[]
) => {
  const type =  options.translate === "en-ua" ? "en" : "ua";
  const words = test.words.map((word: any) => word[type].toLowerCase());
  const sortAnswers = random.map((_, idx) => answers[random.findIndex((e) => e === idx) as any]);

  const audit = words.filter((word: string, idx: number) => checkAnswer(word, sortAnswers[idx]));

  return {
    name: test?.name? test.name : "random",
    type: options.type,
    words: test.words,
    result: audit,
    answers: sortAnswers,
    options,
  };
};

export {
  shuffle,
  generateString,
  auditTranslate,
}

const createTest: any = (words: any) => (amount: number = 10) => {
  let randomID = [];
  let result: any = {name: generateString(), words: []};

  for(let i = 0; i < amount ; i++) {
      randomID.push(Math.floor(Math.random() * 555));
  };

  randomID.map((id: any) => result.words.push(words[id]));

  return result
};

const checkAnswer = (word: string, answer: string) => {
  return answer.includes(word)
};

export const makeTest = createTest(allWords);