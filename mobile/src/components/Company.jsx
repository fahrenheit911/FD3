import React from "react";

import { mobileEvents } from "./events";
import Client from "./Client";

class Company extends React.PureComponent {
  state = {
    list: this.props.clients,
    clientId: "",
  };

  componentDidMount = () => {
    mobileEvents.addListener("EDeleteClicked", this.deleteClient);
    mobileEvents.addListener("ENewInfo", this.newInfo);
    mobileEvents.addListener("EEditCode", this.updClientId);
    mobileEvents.addListener("EShowActive", this.showActive);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("EDeleteClicked", this.deleteClient);
    mobileEvents.removeListener("ENewInfo", this.newInfo);
    mobileEvents.removeListener("EEditCode", this.updClientId);
    mobileEvents.removeListener("EShowActive", this.showActive);
  };

  showActive = () => {
    this.setState({ list: this.state.list.filter((v) => v.balance >= 0) });
  };

  updClientId = (code) => {
    this.setState({ clientId: code });
  };

  deleteClient = (code) => {
    this.setState({ list: this.state.list.filter((v) => v.code !== code) });
  };

  newInfo = (newFam, newBalance) => {
    let newClients = [...this.state.list];
    newClients.forEach((c, i) => {
      if (c.code === this.state.clientId) {
        let newClient = { ...c };
        newClient.fam = newFam;
        newClient.balance = newBalance;
        newClients[i] = newClient;
        //if (c.code === this.state.clientId) c.balance = newBalance;
      }
    });
    this.setState({ list: newClients });
  };

  render() {
    console.log("Company render");
    const clientsCode = this.state.list.map((client) => (
      <Client key={client.code} info={client} />
    ));

    return (
      <table className="ShopComponentTable">
        <tbody className="TBody">
          <tr className="TabTr">
            <th className="TabTh">Фамилия</th>
            <th className="TabTh">Имя</th>
            <th className="TabTh">Отчество</th>
            <th className="TabTh">Баланс</th>
            <th className="TabTh">Статус</th>
            <th className="TabTh">Редактировать</th>
            <th className="TabTh">Удалить</th>
          </tr>
          {clientsCode}
        </tbody>
      </table>
    );
  }
}

export default Company;
