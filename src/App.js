import React, { Component } from 'react';
import TransactionsContainer from './containers/TransactionsContainer.js';
import { Field, reduxForm } from 'redux-form';

class App extends Component {
  render() {
    const {
      balance,
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h1>MetaCoin</h1>
        <h2>Example Truffle Dapp</h2>
        <h3>You have <span className="black">{balance} META</span></h3>
        <br />
        <h1>Send</h1>
          <br /><label htmlFor="amount">Amount:</label><Field type="text" name="amount" component="input" placeholder="e.g., 95" />
          <br /><label htmlFor="receiver">To Address:</label><Field type="text" name="receiver" component="input" placeholder="e.g., 0x93e66d9baea28c17d9fc393b53e3fbdd76899dae" />
          <br /><br /><button type="submit">Send MetaCoin</button>
          <br /><br />
        <TransactionsContainer />
      </div>
    </form>
    );
  }
}

App = reduxForm({
    form: 'app'
})(App);

export default App;
