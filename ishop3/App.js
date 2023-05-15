import React from "react";
import ReactDOM from "react-dom";

import ShopComponent from "./components/ShopComponent";

let columnName = "Name";
let columnPrice = "Price";
let columnImage = "Image";
let columnRest = "Qty";
let columnControl = "Control";
let itemsArr = require("./items.json");

ReactDOM.render(
  <ShopComponent
    column1={columnName}
    column2={columnPrice}
    column3={columnRest}
    column4={columnImage}
    column5={columnControl}
    items={itemsArr}
  />,
  document.getElementById("container")
);
