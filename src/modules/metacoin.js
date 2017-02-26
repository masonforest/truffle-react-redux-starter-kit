import web3 from "../web3";
import MetaCoin from "../metacoin";
const SET_BALANCE = 'SET_BALANCE';
const RECEIVE_TRANSACTION = 'RECEIVE_TRANSACTION';

export default function reducer(state = {
  balance: 0,
  transactions: [],
  }, action = {}) {
  switch (action.type) {
    case (SET_BALANCE):
      return {
        ...state,
        balance: action.balance,
      }
    case (RECEIVE_TRANSACTION):
      return {
        ...state,
        transactions: [...state.transactions, action.transaction],
      }
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

  receiveTransaction: (transaction) => {
    return {
      type: RECEIVE_TRANSACTION,
      transaction,
    };
  },

  fetchBalance: function(account) {
    return (dispatch, getState) => {
      MetaCoin.then((metacoin) => {
        metacoin.getBalance.call(account).then((balance) => {
          dispatch(this.setBalance(balance.toString()))
        })
      })
    }
  },

  send: function(address, amount) {
    return (dispatch, getState) => {
      MetaCoin.then((metacoin) => {
        metacoin.sendCoin(
            address,
            amount,
            { from: web3.eth.accounts[0] }
          ).then((result) => {
            console.log(result)
        }).catch(function(e) {
          console.log(e)
        })
      })
    }
  }
}
