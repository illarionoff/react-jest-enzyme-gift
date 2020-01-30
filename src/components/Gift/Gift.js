import React, { Component } from "react";

export default class Gift extends Component {
  state = {
    person: "",
    present: ""
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            className="input-person"
            type="text"
            name="person"
            value={this.state.person}
            onChange={event => {
              this.setState({ person: event.target.value });
            }}
          />
          <input
            className="input-present"
            type="text"
            name="present"
            value={this.state.person}
            onChange={event => {
              this.setState({ present: event.target.value });
            }}
          />
        </form>
        <button
          className="btn-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </button>
      </div>
    );
  }
}
