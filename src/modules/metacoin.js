import MetaCoinArtifact from '../../contracts/MetaCoin.sol';
import Contract from 'truffle-contract';
import Web3 from 'web3'
import truffleConfig from '../../truffle.js'
const SET_BALANCE = 'SET_BALANCE';
const MetaCoin = Contract(MetaCoinArtifact);
const provider = new Web3.providers.HttpProvider('http://localhost:8545')
const web3 = new Web3(provider);
MetaCoin.setProvider(provider);

export default function reducer(state = { balance: 0 }, action = {}) {
  switch (action.type) {
    case (SET_BALANCE):
      return {
        ...state,
        balance: action.balance,
      }
    break;
    default: return state;
  }
}

export const actions = {
  setBalance: (balance) => {
    return {
      type: SET_BALANCE,
      balance,
    };
  },

  fetchBalance: function(balance) {
    return (dispatch, getState) => {
      MetaCoin.deployed().then((metacoin) => {
        var account = web3.eth.accounts[0];
        metacoin.getBalance.call(account).then((balance) => {
          dispatch(this.setBalance(balance.toString()))
        })
      })
    }
  }
}
