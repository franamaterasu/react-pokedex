import { useState } from "react";
import useFetch from "./components/useFetch";

import Header from "./components/header";
import Main from "./components/main";
import Pagination from "./components/pagination";
import Modal from "./components/modal";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [showModal, setShowModal] = useState(false);
  const { pokemons, showNexts, showPrevious, offset } = useFetch();

  return (
    <>
      <Header />
      <Main
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
        setShowModal={setShowModal}
      />
      <Pagination
        showNexts={showNexts}
        showPrevious={showPrevious}
        offset={offset}
      />
      {showModal && <Modal selectedPokemon={selectedPokemon} />}
    </>
  );
};

export default App;
