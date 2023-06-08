import React from "react";
import { mobileEvents } from "./events";

class Client extends React.Component {
  state = {
    info: this.props.info,
    status: "Active",
  };

  clickEdit = (eo) => {
    eo.stopPropagation();
    mobileEvents.emit("EEditClicked", this.state.info.code);
    mobileEvents.emit("EE", this.state.info);
  };

  clickDelete = (eo) => {
    eo.stopPropagation();
    mobileEvents.emit("EDeleteClicked", this.state.info.code);
    mobileEvents.emit("EE", this.state.info);
  };

  changeStatus = () => {
    this.setState({ status: "Blocked" });
  };

  render() {
    return (
      <tr className="TabTd">
        <td>{this.state.info.fam}</td>
        <td>{this.state.info.im}</td>
        <td>{this.state.info.otch}</td>
        <td>{this.state.info.balance}</td>
        <td
          style={{
            backgroundColor: this.state.info.balance < 0 ? "red" : "inherit",
          }}
        >
          {this.state.info.balance < 0 ? "Blocked" : this.state.status}
        </td>
        <td>
          <input type="button" value="Редактировать" onClick={this.clickEdit} />
        </td>
        <td>
          <input type="button" value="Удалить" onClick={this.clickDelete} />
        </td>
      </tr>
    );
  }
}

export default Client;
