import { useState, useEffect } from "react";

const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  let pokemonList = [];

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        data.results.map((item) => {
          fetch(item.url)
            .then((response) => response.json())
            .then((data) => {
              pokemonList.push([data]);
            });
        });
      });
    setTimeout(() => {
      setPokemons(pokemonList);
    }, 1000);
  }, [offset]);

  const showNexts = () => {
    setOffset(offset + 20);
  };

  const showPrevious = () => {
    setOffset(offset - 20);
  };

  return { pokemons, showNexts, showPrevious, offset };
};

export default useFetch;
