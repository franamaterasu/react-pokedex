import Card from "../card";

import "./main.scss";

const Main = ({ pokemons }) => {
  return (
    <main className="main-container">
      {pokemons.map((pokemon, index) => {
        return <Card key={index} pokemon={pokemon} />;
      })}
    </main>
  );
};

export default Main;
