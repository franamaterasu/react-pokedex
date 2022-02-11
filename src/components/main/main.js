import Card from "../card";

import "./main.scss";

const Main = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <main className="main-container">
      {pokemons.map((pokemon, index) => {
        return (
          <article class="item">
            <Card key={index} pokemon={pokemon} />
          </article>
        );
      })}
    </main>
  );
};

export default Main;
