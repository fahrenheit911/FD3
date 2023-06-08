import React, { Fragment } from "react";
import { mobileEvents } from "./events";

class BlockButtons extends React.Component {
  selectBlocked = (eo) => {
    eo.stopPropagation();
    mobileEvents.emit("ESelectBlocked", null);
  };
  render() {
    return (
      <>
        <button>Все</button>
        <button>Активные</button>
        <button onClick={this.selectBlocked}>Заблокированный</button>
      </>
    );
  }
}

export default BlockButtons;
