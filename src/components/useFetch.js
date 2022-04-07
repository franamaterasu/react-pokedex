import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  let pokemonList = [];

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=10`)
      .then(function (response) {
        response.data.results.map((item) => {
          axios.get(item.url).then(function (response) {
            pokemonList.push([response.data]);
          });
        });
      });

    setTimeout(() => {
      setPokemons(pokemonList);
    }, 2000);
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
