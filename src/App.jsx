import { useState, useEffect } from 'react'
import { MainApp } from './styled.js'
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
    <MainApp>
      <b>Count Me: &nbsp;</b>
      <button onClick={() => incrementCount()}>
        count is {count}
      </button>
    </MainApp>
  )
}

export default App
