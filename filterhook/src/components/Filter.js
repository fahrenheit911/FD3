import React, { Fragment, useState } from "react";
import { List } from "../components/List";
import { Controls } from "../components/Controls";

export const Filter = (props) => {
  const [list, setList] = useState(props.list);

  function filterList(el) {
    console.log(el);
    let list = props.list.slice();

    if (el) list = list.filter((v) => v.includes(el));

    if (el === true) list.sort();

    setList(list);
  }

  function resetList(reset) {
    let list = props.list.slice();
    if (reset) setList(list);
  }

  return (
    <Fragment>
      <Controls cbFilterList={filterList} cbResetList={resetList} />
      <List list={list} />
    </Fragment>
  );
};
