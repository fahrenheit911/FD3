import React, { Fragment } from "react";
import { mobileEvents } from "./events";

class EditClientsData extends React.PureComponent {
  newFamClientRef = React.createRef();
  newBalanceClientRef = React.createRef();

  state = {
    fam: "",
    balance: "",
  };

  componentDidMount = () => {
    mobileEvents.addListener("EEditClientInfo", (fam, bal) => {
      this.setState({ fam: fam, balance: bal });
    });
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("EEditClientInfo", (fam, bal) => {
      this.setState({ fam: fam, balance: bal });
    });
  };

  clickSave = (eo) => {
    // emit to App Component
    mobileEvents.emit("EEditClicked");
    // emit to Company Component
    mobileEvents.emit(
      "ENewInfo",
      this.newFamClientRef.current.value,
      this.newBalanceClientRef.current.value
    );
  };

  render() {
    console.log("EditClientsData render");
    return (
      <>
        <input
          type="text"
          defaultValue={this.state.fam}
          ref={this.newFamClientRef}
        />
        <input
          type="text"
          defaultValue={this.state.balance}
          ref={this.newBalanceClientRef}
        />
        <input type="button" value="Сохранить" onClick={this.clickSave} />
      </>
    );
  }
}

export default EditClientsData;
