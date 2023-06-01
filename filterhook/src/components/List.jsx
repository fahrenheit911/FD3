import React from "react";

export const List = (props) => {
  return <div style={{ whiteSpace: `pre` }}>{props.list.join("\n")}</div>;
};
