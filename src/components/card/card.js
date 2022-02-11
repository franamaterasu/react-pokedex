const Card = ({ pokemon }) => {
  const { name } = pokemon;
  return (
    <article className="card">
      <p>{name}</p>
    </article>
  );
};

export default Card;
