import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const COUNT_KEY_NAME = "count";
  const retrieveCount = () => Number(localStorage.getItem(COUNT_KEY_NAME));
  const [count, setCount] = useState(retrieveCount());
  const incrementCount = () => setCount(count + 1)

  useEffect(() => {
    localStorage.setItem(COUNT_KEY_NAME, count);
  }, [count]);

  return (
    <>
        <button onClick={() => incrementCount()}>
          count is {count}
        </button>
    </>
  )
}

export default App
