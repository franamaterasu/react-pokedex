import { useState } from "react";
import useFetch from "./components/useFetch";

import Header from "./components/header";
import Main from "./components/main";
import Pagination from "./components/pagination";
import Modal from "./components/modal";
import Loader from "./components/loader";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [huntedList, setHuntedList] = useState([]);
  const { pokemons, showNexts, showPrevious, offset } = useFetch();

  console.log(huntedList);

  return (
    <>
      <Header huntedList={huntedList} />
      {pokemons.length < 1 ? (
        <Loader />
      ) : (
        <>
          <Main
            pokemons={pokemons}
            setSelectedPokemon={setSelectedPokemon}
            setShowModal={setShowModal}
            huntedList={huntedList}
            setHuntedList={setHuntedList}
          />
          <Pagination
            showNexts={showNexts}
            showPrevious={showPrevious}
            offset={offset}
          />
        </>
      )}
      {showModal && (
        <Modal
          selectedPokemon={selectedPokemon}
          setShowModal={setShowModal}
          huntedList={huntedList}
        />
      )}
    </>
  );
};

export default App;
