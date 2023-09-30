import React from "react";
import "./App.css";
import Products from "./components/Products";
import NewProduct from "./components/NewProduct";

function App() {
  const products = [
    {
      id: "p1",
      title: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      title: "Nirma2",
      amount: 102,
      date: new Date(2021, 8, 12),
    },
    {
      id: "p13",
      title: "Nirma3",
      amount: 103,
      date: new Date(2021, 8, 13),
    },
    {
      id: "p4",
      title: "Nirma4",
      amount: 104,
      date: new Date(2021, 8, 14),
    },
  ];
  function printProductData(data) {
    console.log("I am inside app.js");
    console.log(data);
  }
  return (
    <div>
      <NewProduct pranay={printProductData} />
      <Products items={products} />
    </div>
  );
}

export default App;
