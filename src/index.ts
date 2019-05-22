export const issueLotto = (): Ticket => {
  const numbers = new Array(45).fill(null).map((val, i) => i + 1);
  const lotto: Ticket = getRandomPermultation(numbers, 6) as Ticket;
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

export const drawLotto = (): Winning => {
  const numbers = new Array(45).fill(null).map((val, i) => i + 1);

  const [bonus, ...won] = getRandomPermultation(numbers, 7);
  return [won as Ticket, bonus];
};

export const buyLottos = (money: number) => {
  const ticketNumber = Math.floor(money / 1000);
  return new Array(ticketNumber).fill(null).map(() => issueLotto());
};

export type Ticket = [number, number, number, number, number, number];

export type Winning = [Ticket, number];

export const winningAmount = (lotto: Ticket, [numbers, bonus]: Winning): number => {
  const wonNumbers = lotto.reduce(
    (prev, curr) => (numbers.includes(curr) ? prev + 1 : prev),
    0
  );
  if (wonNumbers === 3) return 5000;
  if (wonNumbers === 4) return 50000;
  if (wonNumbers === 5) return lotto.includes(bonus) ? 30000000 : 1500000;
  if (wonNumbers === 6) return 2000000000;
  return 0;
};

export const calcInterest = (lottos: Ticket[], winning: Winning) => {
  const sum: number = lottos
    .map(lotto => winningAmount(lotto, winning))
    .reduce((prev, curr) => prev + curr);
  return sum / (lottos.length * 1000)
};
