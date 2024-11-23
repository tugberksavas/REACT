import React from "react";

function Product({ productName, price }) {
  //   const { productName, price } = props;
  //  destructuring props  {productName='Ayakkabi' price=3200}
  //   console.log(props);
  return (
    <div>
      <div>Urun Bilgileri </div>

      <div>
        <div>Isim : {productName}</div>
        <div>Fiyat : {price} TL</div>
      </div>
    </div>
  );
}

export default Product;
