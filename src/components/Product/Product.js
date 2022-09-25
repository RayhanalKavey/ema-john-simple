import React from "react";
import "./Product.css";
//------------------------
const Product = ({ handleAddToCart, product }) => {
  // const Product = (props) => {
  // const { handleAddToCart, product } = props;

  const { name, price, img, ratings, seller, id, stock, category } = product;

  return (
    <div className="product">
      <img src={img} alt="t-shirt" />
      <div className="product-info">
        <p style={{ marginTop: "0" }}>{name}</p>
        <p>Price: ${price}</p>
        <p style={{ marginTop: "20px" }}>
          <small> Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings}</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        Add to cart
      </button>
    </div>
  );
};

export default Product;
