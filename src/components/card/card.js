const Card = ({ pokemon }) => {
  const item = pokemon[0];

  return (
    <article className="card">
      <img src={item.sprites.front_default} alt={item.name} />
      <h3>{item.name}</h3>
    </article>
  );
};

export default Card;
