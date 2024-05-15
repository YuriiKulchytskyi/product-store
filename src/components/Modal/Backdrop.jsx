import css from "./Modal.module.css";

export const Backdrop = ({ onClose, product, onClick, contentButton }) => {
  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal}>
        <div className={css.modalContent}>
          <img
            className={css.backdropImage}
            src={product.imageUrl}
            alt="product"
          />
          <button className={css.closeButton} onClick={onClose}>
            X
          </button>
          <h2>{product.name}</h2>
          <ul className={css.listInfo}>
            <li>Amount: {product.count}</li>
            <li>
              Size : {product.size.width} x {product.size.height}
            </li>
            <li>Weight: {product.weight}</li>
          </ul>
          <div className={css.comments}>
            <h3>Comments:</h3>
            <ul>
              {product.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
          <button onClick={onClick} className={css.modalButton}>
            {contentButton}
          </button>
        </div>
      </div>
    </div>
  );
};
