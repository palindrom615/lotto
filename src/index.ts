export const issueLotto = () => {
  const lotto: number[] = [];
  while (lotto.length !== 6) {
    pushRandomValue(lotto);
  }
  return lotto;
};
function pushRandomValue(lotto: number[]) {
  const rand = Math.floor(Math.random() * 44) + 1;
  if (!lotto.includes(rand)) {
    lotto.push(rand);
  }
}

