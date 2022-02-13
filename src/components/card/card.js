import { CgClipboard, CgPokemon } from "react-icons/cg";
import "./card.scss";

const Card = ({ pokemon, setSelectedPokemon, setShowModal }) => {
  const item = pokemon[0];

  const handleClickSelectedPokemon = (item) => {
    setSelectedPokemon(item);
    setShowModal(true);
  };

  console.log(item);

  return (
    <article className="card">
      <div className="card__container">
        <img
          className="card__image"
          src={item.sprites.other.home.front_default}
          alt={item.name}
        />
        <section className="card__nav">
          <button
            onClick={() => handleClickSelectedPokemon(item)}
            className="card__button"
          >
            <CgClipboard className="card__button-icon" />
          </button>
          <button className="card__button">
            <CgPokemon className="card__button-icon" />
          </button>
        </section>
        <div className="card__info">
          <p className="card__text">
            #{item.order} <span className="card__text--bold">{item.name}</span>
          </p>
          <ul className="card__list">
            {item.types.map((type) => {
              return <li className="card__list-item">{type.type.name}</li>;
            })}
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Card;
