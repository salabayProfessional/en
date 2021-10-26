import { allWords } from "../mockData/words";

const generateString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

const shuffle = (array: any) => {
  return array.sort(() => Math.random() - 0.5);
};

const auditTranslate = (
  test: any,
  answers: string[],
  options: any,
  random: number[],
  startTime: string,
) => {
  const type =  options.translate === "en-ua" ? "en" : "ua";
  const words = test.words.map((word: any) => word[type].toLowerCase());
  const sortedAnswers = random.map((_, idx) => answers[random.findIndex((e) => e === idx) as any]);

  const audit = words.filter((word: string, idx: number) => checkAnswer(word, sortedAnswers[idx]));

  const endDate = new Date();

  return {
    name: test?.name? test.name : "random",
    type: options.type,
    words: test.words,
    result: audit,
    answers: sortedAnswers,
    options,
    endDate,
    startTime,
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
    randomID.push(Math.floor(Math.random() * 490));
  };

  randomID.map((id: any) => result.words.push(words[id]));

  return result
};

const checkAnswer = (word: string, answer: string) => {
  return answer.toLowerCase().includes(word);
};

export const makeTest = createTest(allWords);