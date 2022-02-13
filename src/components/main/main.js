import Card from "../card";

import "./main.scss";

const Main = ({
  pokemons,
  setSelectedPokemon,
  setShowModal,
  setHuntedList,
  huntedList,
}) => {
  return (
    <main className="main-container">
      {pokemons.map((pokemon, index) => {
        return (
          <Card
            key={index}
            pokemon={pokemon}
            setSelectedPokemon={setSelectedPokemon}
            setShowModal={setShowModal}
            huntedList={huntedList}
            setHuntedList={setHuntedList}
          />
        );
      })}
    </main>
  );
};

export default Main;
