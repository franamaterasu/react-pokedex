import "./modal.scss";

const Modal = ({ selectedPokemon }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <img
          className="modal__image"
          alt={selectedPokemon.name}
          src={selectedPokemon.sprites.other.home.front_default}
        />
        <section className="modal__info">
          <p className="modal__name">{selectedPokemon.name}</p>
          <p className="modal__section-title">Habilidades:</p>
          <ul className="modal__section-list">
            {selectedPokemon.abilities.map((habilidad) => {
              return (
                <li className="modal__section-list-item">
                  {habilidad.ability.name}
                </li>
              );
            })}
          </ul>
          <p className="modal__section-title">Estadísticas</p>
          {selectedPokemon.stats.map((stat) => {
            return (
              <div className="modal__stat">
                <span className="modal__stat-name">{stat.stat.name}</span>
                <span className="modal__stat-number">{stat.base_stat}</span>
                <div className="modal__stat-bar-container">
                  <span
                    style={{ width: stat.base_stat + "%" }}
                    className="modal__stat-bar"
                  ></span>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Modal;
