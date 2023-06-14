import React, { Fragment } from "react";
import { mobileEvents } from "./events";

class BlockButtons extends React.PureComponent{
  selectBlocked = (eo) => {
    mobileEvents.emit("ESelectBlocked", null);
  };

  selectActive = (eo) => {
    mobileEvents.emit("EShowActive", null);
  };

  render() {
    console.log("BlockButtons render");
    return (
      <>
        <button>Все</button>
        <button onClick={this.selectActive}>Активные</button>
        <button onClick={this.selectBlocked}>Заблокированный</button>
      </>
    );
  }
}

export default BlockButtons;
