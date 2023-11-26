export const ItemQuantitySelector = ({ decrease, increase, quantity }) => {
  return (
    <div className="d-flex align-items-center">
      <button className="btn btn-outline-secondary" onClick={decrease}>
        -
      </button>
      <h1 className="mx-3">{quantity}</h1>
      <button className="btn btn-outline-secondary" onClick={increase}>
        +
      </button>
    </div>
  );
};
