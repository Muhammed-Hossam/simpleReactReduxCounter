import { createStore } from "redux";

const initState = { counter: 0, showCounter: true };
const counterReducer = (state = initState, action) => {
  // Logic
  switch (action.type) {
    case "increase":
      return { ...state, counter: state.counter + action.payload };
    case "decrease":
      return { ...state, counter: state.counter - action.payload };
    case "toggleCounter":
      return { ...state, showCounter: !state.showCounter };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

export default store;
