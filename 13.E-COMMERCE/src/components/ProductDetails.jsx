import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { setSelectedProduct } from "../redux/slice/productSlice";
import "../css/ProductDetails.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket, calculateBasket } from "../redux/slice/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  // console.log(id);
  const { products, selectedProduct } = useSelector((store) => store.product);

  const { price, image, title, description } = selectedProduct;

  const [count, setCount] = useState(0);

  const dispatch = useDispatch();

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count,
    };
    dispatch(addToBasket(payload));
    dispatch(calculateBasket())
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    products &&
      products.map((product) => {
        if (product.id == id) {
          dispatch(setSelectedProduct(product));
        }
      });
  };

  return (
    <div
      style={{
        marginTop: "30px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <div style={{ marginRight: "40px" }}>
        <img src={image} width={300} height={500} alt="" />
      </div>
      <div>
        <h1 className="title">{title} </h1>
        <p className="description"> {description} </p>
        <h1 className="price"> {price}₺ </h1>
        <div className="arttirma-azaltma">
          <CiCirclePlus onClick={increment} className="arttirma" />
          <span className="span"> {count} </span>
          <CiCircleMinus onClick={decrement} className="azaltma" />
        </div>
        <div>
          <button onClick={addBasket} className="sepete-ekle">
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
