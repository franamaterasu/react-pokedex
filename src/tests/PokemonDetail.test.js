import { Selector, fixture, t } from "testcafe";

fixture`Check that pokemon modal is open`.page`http://localhost:3000/`;

test("Check that pokemon modal is open", async (t) => {
  const CardButtonIcon = Selector(".card__button-icon:first-of-type");
  const PokemonImage = Selector(".modal__image").exists;

  await t.click(CardButtonIcon);
  await t.expect(PokemonImage).ok();
});
