import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>MetaCoin</h1>
        <h2>Example Truffle Dapp</h2>
        <h3>You have <span className="black"><span id="balance"></span> META</span></h3>

        <br />
        <h1>Send</h1>
        <br /><label htmlFor="amount">Amount:</label><input type="text" id="amount" placeholder="e.g., 95"></input>
        <br /><label htmlFor="receiver">To Address:</label><input type="text" id="receiver" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae"></input>
        <br /><br /><button id="send" onClick={() => {}}>Send MetaCoin</button>
        <br /><br />
        <span id="status"></span>
      </div>
    );
  }
}

export default App;
