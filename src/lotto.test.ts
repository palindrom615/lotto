import { issueLotto, drawLotto, buyLottos, winningAmount, calcInterest } from "./lotto";

test("로또 한 장은 6개 번호", () => {
  const lotto = issueLotto();
  expect(lotto).toHaveLength(6);
});

test("각 숫자는 1~45", () => {
  const lotto = issueLotto();
  for (const number of lotto) {
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(45);
  }
});

test("중복되는 값 x", () => {
  const lotto = issueLotto();
  expect(Array.from(new Set(lotto))).toHaveLength(6);
});

test("보너스 번호는 1~45, 당첨 번호에 포함 안됨", () => {
  const [won, bonus] = drawLotto();
  expect(won.includes(bonus)).toBe(false);
  expect(bonus).toBeGreaterThanOrEqual(1);
  expect(bonus).toBeLessThanOrEqual(45);
});

test("로또 구입 금액을 입력 => 구입 금액에 해당하는 로또 발급", () => {
  const lottos = buyLottos(2500);
  expect(lottos).toHaveLength(2);
});

test("당첨 금액은 고정", () => {
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 6], 7])).toBe(
    2000000000
  );
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 7], 6])).toBe(
    30000000
  );
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 5, 7], 8])).toBe(
    1500000
  );
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[1, 2, 3, 4, 8, 9], 10])).toBe(
    50000
  );
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[1, 2, 3, 7, 8, 9], 10])).toBe(
    5000
  );
  expect(winningAmount([1, 2, 3, 4, 5, 6], [[7, 8, 9, 10, 11, 12], 13])).toBe(
    0
  );
});

test("수익률을 계산해 출력", () => {
  expect(
    calcInterest(
      [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]],
      [[1, 2, 3, 13, 14, 15], 7]
    )
  ).toBe(2.5);
});
