import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { mobileEvents } from "./events";

class Client extends React.PureComponent {
  static propTypes = {
    info: PropTypes.objectOf(
      PropTypes.shape({
        code: PropTypes.number.isRequired,
        fam: PropTypes.string.isRequired,
        im: PropTypes.string.isRequired,
        otch: PropTypes.string.isRequired,
        balance: PropTypes.number.isRequired,
      })
    ),
  };

  clickEdit = () => {
    // emit to App Component
    mobileEvents.emit("EEditClicked", this.props.info.code);
    // emit to EditClientData Component
    mobileEvents.emit(
      "EEditClientInfo",
      this.props.info.fam,
      this.props.info.balance
    );
  };

  clickDelete = (eo) => {
    mobileEvents.emit("EDeleteClicked", this.props.info.code);
  };

  render() {
    console.log("Client render " + this.props.info.code);
    return (
      <>
        <tr className="TabTd">
          <td>{this.props.info.fam}</td>
          <td>{this.props.info.im}</td>
          <td>{this.props.info.otch}</td>
          <td>{this.props.info.balance}</td>
          <td
            style={{
              backgroundColor: this.props.info.balance >= 0 ? "inherit" : "red",
            }}
          >
            {this.props.info.balance >= 0 ? "Active" : "Blocked"}
          </td>
          <td>
            <input
              type="button"
              value="Редактировать"
              onClick={this.clickEdit}
            />
          </td>
          <td>
            <input type="button" value="Удалить" onClick={this.clickDelete} />
          </td>
        </tr>
      </>
    );
  }
}

export default Client;
