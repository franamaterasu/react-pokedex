import "./card.scss";

const Card = ({ pokemon, setSelectedPokemon, setShowModal }) => {
  const item = pokemon[0];

  const handleClickSelectedPokemon = (item) => {
    setSelectedPokemon(item);
    setShowModal(true);
  };

  console.log(item);

  return (
    <article className="card" onClick={() => handleClickSelectedPokemon(item)}>
      <div className="card__container">
        <img
          className="card__image"
          src={item.sprites.other.home.front_default}
          alt={item.name}
        />
        <h3 className="card__title">{item.name}</h3>
      </div>
    </article>
  );
};

export default Card;
