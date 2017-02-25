import App from "../App.js"
import { bindActionCreators } from 'redux';
import { actions } from '../modules/metacoin.js';
import { connect } from 'react-redux';


function mapStateToProps(state, props) {
  return {
    balance: state.metacoin.balance
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
