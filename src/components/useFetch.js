import { useState, useEffect } from "react";

const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  return { pokemons };
};

export default useFetch;
