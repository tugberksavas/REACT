import { useState } from "react";

import "./App.css";
import Container from "./Container";
import Product from "./Product";

function App() {
  const productName = "Buzdolabi";

  return (
    <div>
      <Container>
        <hr />
        <Product productName="Ayakkabi" price={3201} />
        <hr />
        <Product productName="Kizak" price={1201} />
        <hr />
        <Product productName={productName} price={22001} />
      </Container>
    </div>
  );
}

export default App;
