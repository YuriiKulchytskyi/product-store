import { Backdrop } from "./Backdrop";
import css from './Modal.module.css'

export const Modal = ({ onClose, product }) => {
  return (
    <Backdrop onClick={onClose} product={product}/>
  );
};
