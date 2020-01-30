import React, { Component } from "react";
import "./App.css";
import Gift from "./components/Gift/Gift";

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const ids = this.state.gifts.map(gift => gift.id);
    const max_id = ids.length > 0 ? Math.max(...ids) : 0;
    this.setState({
      gifts: [...this.state.gifts, { id: max_id + 1 }]
    });
  };

  removeGift = id => {
    this.setState({
      gifts: this.state.gifts.filter(gift => gift.id !== id)
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Hello</h2>
        <button className="btn-add" onClick={this.addGift}>
          Add
        </button>
        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
