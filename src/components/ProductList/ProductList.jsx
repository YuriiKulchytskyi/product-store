import { Product } from "../Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { allProducts } from "../../redux/productSelectors";
import { useEffect } from "react";
import { getAllProducts, getProductById } from "../../redux/productOperations";
import css from "./ProductList.module.css";

export const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector(allProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const handleAdd = (id) => {
    dispatch(getProductById(id))
      .then((product) => {
        const inBucket = JSON.parse(localStorage.getItem("inBucket")) || {};
        const count = inBucket[id] ? inBucket[id].count + 1 : 1;
        inBucket[id] = { product, count };
        localStorage.setItem("inBucket", JSON.stringify(inBucket));
      })
      .catch((error) => {
        console.error("Failed to add product to localStorage:", error);
      });
  };

  return (
    <ul className={css.productList}>
      {products.map((product) => (
        <li key={product.id} className={css.productItem}>
          <Product
            product={product}
            onClick={() => handleAdd(product.id)}
            content={"Show more"}
            contentButton={"Add to bucket"}
          />
        </li>
      ))}
    </ul>
  );
};
