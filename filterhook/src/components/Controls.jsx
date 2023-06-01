import React, { Fragment, useState, useEffect } from "react";

export const Controls = (props) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  useEffect(() => {
    props.cbUpdateList(filter, sort, "", false);
  }, [filter, sort, "", false]);

  const resetText = () => {
    setFilter("");
    setSort(false);
  };

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
