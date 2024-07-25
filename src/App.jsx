import React, { useCallback, useState } from 'react';
import './App.css';

const Counter = React.memo(({ increment }) => {
  console.log("render!");

  return (
    <>
      <button onClick={increment}>Increase</button>
    </>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <div>{count}</div>

      <Counter increment={increment} />

      <input type="text" onChange={e => setText(e.target.value)} />
    </>
  );
}

export default App;