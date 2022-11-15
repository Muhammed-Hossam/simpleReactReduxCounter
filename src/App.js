import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";


function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);

  useEffect(() => {
    dispatch({ type: 'increase', payload: 10 })
  }, [dispatch]) 

  // Dispatch action
  const increase = () => {
    const action = { type: "increase", payload: 2 };
    dispatch(action);
  };

  // Dispatch action
  const decrease = () => {
    const action = { type: "decrease", payload: 1 };
    dispatch(action);
  };

  const decreaseHandler = () => counter > 0 ? decrease() : null;

  // Dispatch action
  const toggleCounter = () => {
    const action = { type: 'toggleCounter' }
    dispatch(action);
  }

  return (
    <div className="App">
      <h1>Hello Redux Basics</h1>
      {showCounter && (
        <>
          <div className="counter">Counter: {counter}</div>
          <div>
            <button className="btn" onClick={increase}>
              Increase
            </button>
            <button className="btn" onClick={decreaseHandler}>
              Decrease
            </button>
          </div>
        </>
      )}
      <div>
        <button className="btn" onClick={toggleCounter}>Hide/Show Counter Number</button>
      </div>
    </div>
  );
}

export default App;
