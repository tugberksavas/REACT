import { useState } from "react";
import "./App.css";
import RouterConfig from "./config/RouterConfig";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <RouterConfig />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
