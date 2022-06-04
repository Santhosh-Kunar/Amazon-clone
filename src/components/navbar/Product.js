import React from "react";
import { useStateValue } from "../../apis/StateProvider";
import Styles from "./product.module.css";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className={Styles.product}>
      <div className={Styles.product__info}>
        <p>{title}</p>
        <p className={Styles.product__price}>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className={Styles.product__rating}>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
