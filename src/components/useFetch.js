import { useState, useEffect } from "react";

const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, [pokemons]);

  const showNexts = () => {
    setOffset(offset + 20);
  };

  const showPrevious = () => {
    setOffset(offset - 20);
  };

  return { pokemons, showNexts, showPrevious, offset };
};

export default useFetch;
