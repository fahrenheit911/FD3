import React, { Fragment, useState } from "react";
import { List } from "./List";
import { Controls } from "./Controls";

export const Filter = (props) => {
  const [list, setList] = useState(props.list);

  const filterList = (el, el2) => {
    let list = props.list.slice();
    if (typeof el === "string") list = list.filter((v) => v.includes(el));
    if (el2 === true) list.sort();
    setList(list);
  };

  const resetList = (reset) => {
    let list = props.list.slice();
    if (reset) setList(list);
  };

  return (
    <>
      <Controls cbFilterList={filterList} cbResetList={resetList} />
      <List list={list} />
    </>
  );
};
