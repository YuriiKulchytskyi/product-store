import { useState } from "react";
import css from "./Product.module.css";
import { Modal } from "../Modal/Modal";
import { Backdrop } from "../Modal/Backdrop";


export const Product = ({ product, onClick, content, contentButton }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.cardWrapper}>
      <div className={css.cardImageWrapper}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className={css.productImage}
        />
        <h2>{product.name}</h2>
      </div>

      {/* <ul className={css.cardInfoWrapper}>
        <li>
          {product.size.width}x{product.size.height}
        </li>
        <li>{product.weight}</li>
      </ul> */}
      <button onClick={openModal} className={css.productButton}>
        {content}
      </button>

      {showModal && (
        <Backdrop
          onClose={closeModal}
          product={product}
          onClick={onClick}
          contentButton={contentButton}
        />
      )}
    </div>
  );
};