import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count <= 0) return;

    setCount(count -1);
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Arttir</button>

      <div>{count}</div>

      <button onClick={decrement}>Azalt</button>
    </>
  );
}

export default App;