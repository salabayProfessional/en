export const generateString = () => Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

export const shuffle = (array: any) => {
  return array.sort(() => Math.random() - 0.5);
};

export const makeTest: any = (words: any, amount: number = 10) => {

  let randomID = [];
  let result: any = {name: generateString(), words: []};

  for(let i = 0; i < amount ; i++) {
      randomID.push(Math.floor(Math.random() * 555));
  };

  randomID.map((id: any) => result.words.push(words[id]));

  return result
};

export const auditTranslate = (
  test: any,
  answers: string[],
  options: any,
  random: number[]
) => {
  const words = options.translate === "en-ua"? 
  test.words.map((word: any) => word.en.toLowerCase()) 
  : 
  test.words.map((word: any) => word.ua.toLowerCase());

  const sortAnswers = random.map((_, idx) => answers[random.findIndex((e) => e === idx) as any]);

  const audit = words.filter((word: string, idx: number) => {
      return word === answers[random.findIndex((e) => e === idx) as any];
  });

  return {
    name: test?.name? test.name : "random",
    type: options.type,
    words: test.words,
    result: audit,
    answers: sortAnswers,
    options,
  };
};