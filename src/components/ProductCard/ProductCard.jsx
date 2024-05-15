import { useDispatch, useSelector } from 'react-redux';
import css from './ProductCard.module.css'
import { getProducts } from '../../redux/productSlice';
import { getAllProducts } from '../../redux/productOperations';
import { useEffect } from 'react';

export const ProductCard = () => {
    const dispatch = useDispatch()
  const products = useSelector(getProducts)
  
  useEffect(() => {
    dispatch(getAllProducts)
  }, [])
    
  const handleList = () => {
    console.log(products);
  }

    return (
      <div className={css.cardWrapper}>
        <div className={css.cardImageWrapper}>
          Image
          <h2>Name</h2>
        </div>

        <ul className={css.cardInfoWrapper}>
          <li>Comment</li>
          <li>Size</li>
          <li>Weight</li>
        </ul>
        <button onClick={handleList}>List</button>
      </div>
    );
}