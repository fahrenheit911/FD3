import React from "react";

function List(props) {
  return <div style={{ whiteSpace: `pre` }}>{props.list.join("\n")}</div>;
}

export default List;
