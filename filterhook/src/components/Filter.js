import React, { Fragment, useState } from "react";
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
  const [list, setList] = useState(listArr);

  function filterList(text) {
    let list = listArr.slice();
    if (text) list = list.filter((v) => v.includes(text));
    setList(list);
  }

  function sortList(sort) {
    let list = listArr.slice();
    if (sort) list = list.sort();
    setList(list);
  }

  function resetList(reset) {
    let list = listArr.slice();
    if (reset) setList(list);
  }

  return (
    <Fragment>
      <Controls
        list={listArr}
        cbSortList={sortList}
        cbFilterList={filterList}
        cbResetList={resetList}
      />
      <List list={list} />
    </Fragment>
  );
}

export default Filter;
