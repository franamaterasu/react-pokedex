import { Selector, fixture, t } from "testcafe";

fixture`Check that pagination change pokemon list`.page`http://localhost:3000/`;

test("Check that pagination change pokemon list", async (t) => {
  const FirstPokemonName = Selector(
    ".card__text--bold:first-of-type"
  ).innerText;
  const SecondPokemonName = Selector(
    ".card__text--bold:first-of-type"
  ).innerText;
  const NextButton = Selector("button").withText("Next");

  await t.click(NextButton);
  await t.expect(FirstPokemonName).notEql(SecondPokemonName);
});
