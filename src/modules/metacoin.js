const SET_BALANCE = 'SET_BALANCE';
import MetaCoin from "../metacoin";

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

  fetchBalance: function(account) {
    return (dispatch, getState) => {
      MetaCoin.then((metacoin) => {
        metacoin.getBalance.call(account).then((balance) => {
          dispatch(this.setBalance(balance.toString()))
        })
      })
    }
  }
}
