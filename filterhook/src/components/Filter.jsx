import React, { Fragment, useState } from "react";
import { List } from "./List";
import { Controls } from "./Controls";

export const Filter = (props) => {
  const [list, setList] = useState(props.list);

  const updateList = (string, sort, reset) => {
    let list = props.list.slice();
    if (string !== "") list = list.filter((v) => v.includes(string));
    if (sort === true) list.sort();
    if (reset === "" || false) setList(list);
    setList(list);
  };

  return (
    <>
      <Controls cbUpdateList={updateList} />
      <List list={list} />
    </>
  );
};
