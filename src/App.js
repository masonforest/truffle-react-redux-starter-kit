import React, { Component } from 'react';
import TransactionsContainer from './containers/TransactionsContainer.js';


class App extends Component {
  render() {
    const {
      balance,
      send,
      transactions,
    } = this.props;

    return (
      <div>
        <h1>MetaCoin</h1>
        <h2>Example Truffle Dapp</h2>
        <h3>You have <span className="black">{balance} META</span></h3>

        <br />
        <h1>Send</h1>
        <br /><label htmlFor="amount">Amount:</label><input type="text" id="amount" defaultValue={1} placeholder="e.g., 95"></input>
        <br /><label htmlFor="receiver">To Address:</label><input type="text" id="receiver" defaultValue="0x70f08f6de3a5010992db938022f3b8224d0e3712" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"></input>
        <br /><br /><button id="send" onClick={() => send(1, "0x70f08f6de3a5010992db938022f3b8224d0e3712")}>Send MetaCoin</button>
        <br /><br />
        <span id="status"></span>
        <TransactionsContainer />
      </div>
    );
  }
}

export default App;
