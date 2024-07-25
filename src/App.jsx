import { useRef } from 'react';
import './App.css';

function App() {
  const inputRef = useRef();

  const focusFunc = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputRef} />

      <button onClick={focusFunc}>focus</button>
    </>
  );
}

export default App;