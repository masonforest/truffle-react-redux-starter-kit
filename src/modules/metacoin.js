const INCREMENT = 'INCREMENT';


export default function reducer(state = { balance: 0 }, action = {}) {
  switch (action.type) {
    case (INCREMENT):
      return {
        ...state,
        balance: state.balance + 1,
      }

    break;
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export const actions = {
  increment: () => {
    return { type: INCREMENT };
  }
}
