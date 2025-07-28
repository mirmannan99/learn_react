import { useState } from "react";

type Props = {};

export default function Counter({}: Props) {
  const [counter, setCounter] = useState<number>(0);
  const [incEnabled, setIncEnabled] = useState<boolean>(false);
  const [decEnabled, setdecEnabled] = useState<boolean>(false);

  const increment = () => {
    setCounter((prev) => ++prev);
    if (counter >= 9) {
      setIncEnabled(true);
    }
  };

  const decrement = () => {
    setCounter((prev) => prev-1);
    if (counter <= 1) {
      setdecEnabled(true);
    }
  };

  // place to hold the counting value
  // create a button which will increase the value of this place holder
  //create the variable to hold the value
  // function to update the value of the counter
  // button to create decrement
  // function to decrement the value of the counter

  return (
    <>
      <button disabled={decEnabled} onClick={decrement}>
        decrement
      </button>
      <h1>{counter}</h1>
      <button disabled={incEnabled} onClick={increment}>
        increment
      </button>
    </>
  );
}
