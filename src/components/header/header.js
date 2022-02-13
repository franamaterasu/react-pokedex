import { CgPokemon } from "react-icons/cg";
import "./header.scss";

const Header = ({ huntedList }) => {
  return (
    <header className="header">
      <h1 className="header__logo">Pokedex</h1>
      <div className="header__counter">
        <CgPokemon className="header__counter-icon" />
        <span className="header__counter-number">{huntedList.length}</span>
      </div>
    </header>
  );
};

export default Header;
