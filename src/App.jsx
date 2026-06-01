import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset, incrementByAmount } from "./features/counter/counterSlice";

const App = () => {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmount(){
    dispatch(incrementByAmount(amount))
  }

  return <div className="container">
    <button onClick={handleIncrementClick}> + </button>
    <p>Count : { count }</p>
    <button onClick={handleIncrementClick}> - </button>
    <br />
    <br />
    <button onClick={handleResetClick}> Reset </button>
    <br />
    <br />
    <input
    type="Number"
    value={amount}
    placeholder="Enter Amount"
    onChange={(e) => setAmount(e.target.value)}
    />
    <br />
    <br />
    <button onClick={handleIncAmount}> Increment by amount </button>

  </div>

}

export default App;