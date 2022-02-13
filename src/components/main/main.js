import Card from "../card";

import "./main.scss";

const Main = ({ pokemons, setSelectedPokemon, setShowModal }) => {
  return (
    <main className="main-container">
      {pokemons.map((pokemon, index) => {
        return (
          <Card
            key={index}
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
            setShowModal={setShowModal}
          />
        );
      })}
    </main>
  );
};

export default Main;
