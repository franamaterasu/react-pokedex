const Pagination = ({ showNexts, showPrevious, offset }) => {
  return (
    <section className="pagination">
      {offset !== 0 && <button onClick={showPrevious}>Previous</button>}
      <button onClick={showNexts}>Next</button>
    </section>
  );
};

export default Pagination;
