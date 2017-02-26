import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Store from './store';
import web3 from "./web3";
import { Provider } from 'react-redux';
import { actions as metaCoinActions } from './modules/metacoin.js';
import Metacoin from "./metacoin";
import './index.css';
const store = Store();
Metacoin.then((metacoin) =>
  metacoin.Transfer((error, { args }) => {
    store.dispatch(metaCoinActions.fetchBalance(web3.eth.accounts[0]))
    store.dispatch(metaCoinActions.receiveTransaction(args))
  })
)


store.dispatch(metaCoinActions.fetchBalance(web3.eth.accounts[0]));


window.addEventListener('load', function() {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer />
    </Provider>,
    document.getElementById('root')
  );
});
