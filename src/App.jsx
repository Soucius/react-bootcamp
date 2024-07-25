import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [textChange, setTextChange] = useState("");

  const largeDataFunc = useMemo(() => {
    [...new Array(10000)].forEach((item) => {});

    return count * 3;
  }, []);

  return (
    <>
      <div>{count}</div>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      {largeDataFunc}

      <input type="text" onChange={e => setTextChange(e.target.value)} />
    </>
  );
}

export default App;