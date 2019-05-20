import { issueLotto } from "./index";

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
