import React, { Fragment } from "react";
import List from "../components/List";
import Controls from "../components/Controls";

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

function Filter() {
  return (
    <Fragment>
      <Controls list={listArr}  />
      <List list={listArr} />
    </Fragment>
  );
}

export default Filter;