import "./modal.scss";

const Modal = ({ selectedPokemon }) => {
  return (
    <section className="modal">
      <div className="modal__container">
        <p className="modal__title">{selectedPokemon.name}</p>
      </div>
    </section>
  );
};

export default Modal;
