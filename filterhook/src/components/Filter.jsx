import React, { Fragment, useState } from "react";
import { List } from "./List";
import { Controls } from "./Controls";

export const Filter = (props) => {
  const [list, setList] = useState(props.list);

  const filterList = (el) => {
    let list = props.list.slice();
    if (el) list = list.filter((v) => v.includes(el));
    setList(list);
  };

  const sortList = (el) => {
    if (el) list.sort();
    setList(list);
  };

  const resetList = (reset) => {
    let list = props.list.slice();
    if (reset) setList(list);
  };

  return (
    <>
      <Controls
        cbFilterList={filterList}
        cbResetList={resetList}
        cbSortList={sortList}
      />
      <List list={list} />
    </>
  );
};
