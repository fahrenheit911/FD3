import React from "react";
import ReactDOM from "react-dom";

import BlockButtons from "./components/BlockButtons";
import Company from "./components/Company";
import AddClientButton from "./components/AddClientButton";
import EditClientsData from "./components/EditClientsData";
import { mobileEvents } from "./components/events";

let clientsArr = require("../src/components/clients.json");

class App extends React.Component {
  state = {
    mode: 1,
  };

  updateEdit = (code) => {
    if (code) this.setState({ mode: 2 });
    if (!code) this.setState({ mode: 1 });
  };

  componentDidMount = () => {
    mobileEvents.addListener("EEditClicked", this.updateEdit);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("EEditClicked", this.updateEdit);
  };

  render() {
    return (
      <>
        <BlockButtons />
        <hr />
        <Company clients={clientsArr} />
        <hr />
        <AddClientButton />
        {this.state.mode === 2 && <EditClientsData />}
      </>
    );
  }
}

export default App;
