import { useState } from 'react'

type Props = {}

export default function Counter({}: Props) {
  const [counter, setCounter] = useState<number>(0)

  const increment = () => {
    setCounter(prev => prev + 1)
  }

  // place to hold the counting value
  // create a button which will increase the value of this place holder
  //create the variable to hold the value
  // function to update the value of the counter
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increment}>increment</button>
    </>
  )
}
