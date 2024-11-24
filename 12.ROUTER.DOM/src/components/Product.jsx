import React from "react";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const { id, name, price, image } = product;
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: 40, backgroundColor: "lightgrey" }}>
      <div>Urun Detayi</div>
      <h3>İsim : {name} </h3>
      <h3>Fiyat : {price} </h3>
      {/* <img src={image} alt={name} /> */}
      <button onClick={()=> navigate("/product-details/" + id)}>detayina git</button>
    </div>
  );
}

export default Product;
