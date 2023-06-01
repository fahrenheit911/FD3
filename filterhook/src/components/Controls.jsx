import React, { Fragment, useState, useEffect } from "react";

export const Controls = (props) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    props.cbFilterList(filter);
  }, [filter, props]);

  useEffect(() => {
    props.cbSortList(sort);
  }, [sort, props]);

  function resetText(eo) {
    setFilter("");
    setSort(false);
    props.cbResetList(eo.target.value);
  }

  return (
    <>
      <input
        type="checkbox"
        checked={sort}
        onChange={(eo) => setSort(eo.target.checked)}
      ></input>
      <input
        type="text"
        value={filter}
        onChange={(eo) => setFilter(eo.target.value)}
      ></input>
      <input type="button" value="Reset" onClick={resetText}></input>
    </>
  );
};
