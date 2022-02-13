import { Selector, fixture, t } from "testcafe";

fixture`Check that hunted list update`.page`http://localhost:3000/`;

test("Check that hunted list update", async (t) => {
  const CardButtonIcon = Selector(".card__button--add-list");
  const Counter = Selector(".header__counter-number").exists;

  await t.click(CardButtonIcon);
  await t.expect(Counter).notEql(0);
});
