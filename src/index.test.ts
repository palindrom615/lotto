import { issueLotto } from "./index";

test("로또 한 장은 6개 번호", () => {
  const lotto = issueLotto();
  expect(lotto).toHaveLength(6);
});
