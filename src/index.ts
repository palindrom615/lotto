export const issueLotto = () => {
  const numbers = new Array(45).fill(null).map((val, i) => i + 1);
  const lotto: number[] = getRandomPermultation(numbers, 6);
  return lotto;
};

const getRandomPermultation = (arr: number[], length: number): number[] => {
  if (length === 0) {
    return [];
  }
  const [picked, leaved] = getRandomValueFromArray(arr);
  return [picked, ...getRandomPermultation(leaved, length - 1)];
};

const getRandomValueFromArray = (arr: number[]): [number, number[]] => {
  const rand = Math.floor(Math.random() * arr.length);
  return [
    arr[rand],
    [...arr.slice(0, rand), ...arr.slice(rand + 1, arr.length)]
  ];
};

export const drawLotto = (): [number[], number] => {
  const numbers = new Array(45).fill(null).map((val, i) => i + 1);

  const [bonus, ...won] = getRandomPermultation(numbers, 7);
  return [won, bonus];
};

export const buyLottos = (money: number) => {
  const ticketNumber = Math.floor(money / 1000);
  return new Array(ticketNumber).fill(null).map(() => issueLotto());
};
