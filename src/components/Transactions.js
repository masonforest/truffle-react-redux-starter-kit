import React, { Component } from 'react';
import _ from 'lodash';
class Transactions extends Component {
  render() {
    const {
      transactions
    } = this.props;
    console.log(transactions)
    return (
      <div>
      <h1>Transactions</h1>
      <table>
      <tr>
        <th>From</th>
        <th>To</th>
        <th>Amount</th>
      </tr>
      { _.map(transactions, (transaction, index) =>
          <tr key={index}>
          <td>{transaction._to}</td>
          <td>{transaction._from}</td>
          <td>{transaction._value.toString()}</td>
          </tr>
          )}
      </table>
      </div>
    );
  }
}

export default Transactions;
