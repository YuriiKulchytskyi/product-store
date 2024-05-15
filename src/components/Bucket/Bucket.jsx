import { useEffect, useState } from "react";
import { Product } from "../Product/Product";

export const Bucket = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    updateProducts();
  }, []);

  useEffect(() => {
    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleStorageChange = () => {
    updateProducts();
  };

  const updateProducts = () => {
    const inBucket = JSON.parse(localStorage.getItem("inBucket")) || {};
    const productsArray = Object.keys(inBucket).map((key) => {
      return {
        ...inBucket[key].product,
        count: inBucket[key].count,
      };
    });
    setProducts(productsArray);
    };
    
  const handleDelete = (id) => {
    // Видалення продукту з локального сховища
    const inBucket = JSON.parse(localStorage.getItem("inBucket")) || {};
    delete inBucket[id];
    localStorage.setItem("inBucket", JSON.stringify(inBucket));

    // Оновлення списку продуктів
    updateProducts();
  };

  return (
    <div>
      <h2>Bucket</h2>
      <ul>
        {products.map((product) => (
          <li key={product.payload.id}>
                {product.payload.name} - {product.count} разів додано
                <Product product={product.payload} onClick={() => handleDelete(product.payload.id)} content={"Show more"} contentButton={"Remove from bucket"} />
          </li>
        ))}
      </ul>
    </div>
  );
};
