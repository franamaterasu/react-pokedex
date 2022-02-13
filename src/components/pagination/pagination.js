import "./pagination.scss";

const Pagination = ({ showNexts, showPrevious, offset }) => {
  return (
    <section className="pagination">
      {offset !== 0 && (
        <button className="pagination__button" onClick={showPrevious}>
          Previous
        </button>
      )}
      <button className="pagination__button" onClick={showNexts}>
        Next
      </button>
    </section>
  );
};

export default Pagination;
