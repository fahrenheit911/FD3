import React from "react";
import { Filter } from "../src/components/Filter";

const listArr = [
  "california",
  "everything",
  "aboveboard",
  "washington",
  "basketball",
  "weathering",
  "characters",
  "literature",
  "contraband",
  "appreciate",
];

function App() {
  return (
    <div>
      <Filter list={listArr} />
    </div>
  );
}

export default App;
