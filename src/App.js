import useFetch from "./components/useFetch";

import Header from "./components/header";
import Main from "./components/main";
import Pagination from "./components/pagination";

const App = () => {
  const { pokemons, showNexts, showPrevious, offset } = useFetch();

  return (
    <>
      <Header />
      <Main pokemons={pokemons} />
      <Pagination
        showNexts={showNexts}
        showPrevious={showPrevious}
        offset={offset}
      />
    </>
  );
};

export default App;
