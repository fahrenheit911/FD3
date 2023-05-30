import React, { useState } from "react";

const Controls = (props) => {
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState(false);

  function inputText(eo) {
    setFilter(eo.target.value);
    props.cbFilterList(filter);
  }

  function resetText(eo) {
    setFilter("");
    setSort(false);
    props.cbResetList(eo.target.value);
  }

  function checkedSort(eo) {
    setSort(eo.target.checked);
    props.cbSortList(sort);
  }

  return (
    <div>
      <input type="checkbox" checked={sort} onChange={checkedSort}></input>
      <input type="text" value={filter} onChange={inputText}></input>
      <input type="button" value="Reset" onClick={resetText}></input>
    </div>
  );
};

export default Controls;
