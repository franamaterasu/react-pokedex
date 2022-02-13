import { Selector, fixture, t } from "testcafe";

fixture`Check pokemon list is not empty`.page`http://localhost:3000/`;

test("Check pokemon list", async (t) => {
  const Card = Selector(".card").exists;

  await t.expect(Card).ok();
});
