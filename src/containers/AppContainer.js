import App from "../App.js"
import { bindActionCreators } from 'redux';
import { actions } from '../modules/metacoin.js';
import { connect } from 'react-redux';


function mapStateToProps(state, props) {
  return {
    balance: state.metacoin.balance,
    transactions: state.metacoin.transactions
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onSubmit: ({receiver, amount}) =>
      dispatch(actions.send(receiver, amount)),
    ...bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
