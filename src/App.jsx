import { useRef } from 'react';
import './App.css';

function App() {
  const countRef = useRef(0);

  const clickFunc = () => {
    countRef.current++;
    console.log(countRef.current);
  };

  return (
    <>
      <button onClick={clickFunc}>click me!</button>
    </>
  );
}

export default App;