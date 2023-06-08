import React from "react";

import { mobileEvents } from "./events";
import Client from "./Client";

class Company extends React.Component {
  state = {
    list: this.props.clients,
  };

  componentDidMount = () => {
    mobileEvents.addListener("EDeleteClicked", this.deleteClient);
  };

  componentWillUnmount = () => {
    mobileEvents.removeListener("EDeleteClicked", this.deleteClient);
  };

  deleteClient = (code) => {
    this.setState({ list: this.state.list.filter((v) => v.code !== code) });
  };

  render() {
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
