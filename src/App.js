import useFetch from "./components/useFetch";

import Header from "./components/header";
import Main from "./components/main";

const App = () => {
  const { pokemons } = useFetch();

  return (
    <>
      <Header />
      <Main pokemons={pokemons} />
    </>
  );
};

export default App;
