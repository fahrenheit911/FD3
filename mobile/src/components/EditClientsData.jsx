import React, { Fragment } from "react";
import { mobileEvents } from "./events";

class EditClientsData extends React.Component {
  state = {
    info: "",
  };

  updateClientInfo = (info) => {
    this.setState({ info: info }, console.log(info));
  };

  componentDidMount = () => {
    mobileEvents.addListener("EE", this.updateClientInfo);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("EE", this.updateClientInfo);
  };

  clickSave = (eo) => {
    eo.stopPropagation();
    mobileEvents.emit("EEditClicked");
  };

  render() {
    return (
      <>
        <input type="text" defaultValue={this.state.info.fam} />
        <input type="text" defaultValue={this.state.info.balance} />
        <input type="button" value="Сохранить" onClick={this.clickSave} />
      </>
    );
  }
}

export default EditClientsData;
