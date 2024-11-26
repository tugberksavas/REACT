import React, { useState } from "react";
import "../css/currency.css";
import { FaArrowCircleRight } from "react-icons/fa";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";

let API_KEY = "fca_live_tQpVR914u8FxQVjtvLpeybHHBxAsBuTsylh3y7yy";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("TRY");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    // console.log(amount);
    // console.log(fromCurrency);
    // console.log(toCurrency);

    const responce = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    console.log(responce.data.data[toCurrency]);

    const result = (responce.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency-div">
      <div style={{ marginTop: "-20px" }} className="doviz-baslik">
        <h3>DOVIZ KURU UYGULMASI</h3>
      </div>
      <div style={{ marginTop: "25px" }}>
        <input
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          type="number"
          className="amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="from-currency-option"
        >
          <option value="TRY">TRY</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>
        {/*  */}
        <FaArrowCircleRight style={{ fontSize: "25px", marginRight: "10px" }} />
        {/*  */}
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="to-currency-option"
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="TRY">TRY</option>
        </select>

        <input
          value={result}
          onChange={(e) => setResult(e.target.value)}
          type="number"
          name=""
          id=""
          className="result"
        />
      </div>
      <div>
        <button onClick={exchange} className="exchange-button">
          CEVIR
        </button>
      </div>
    </div>
  );
}

export default Currency;
