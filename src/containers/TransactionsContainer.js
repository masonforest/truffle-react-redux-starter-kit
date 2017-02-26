import Transactions from "../components/Transactions.js"
import { connect } from 'react-redux';

function mapStateToProps(state, props) {
  return {
    transactions: state.metacoin.transactions
  };
}

export default connect(mapStateToProps)(Transactions);

