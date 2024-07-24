import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Text from './components/Text';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button name={"Increase"} onClick={() => setCount(count + 1)} />

      <Text name={"Number: "} number={count} />

      <Button name={"Decrease"} onClick={() => setCount(count - 1)} />
    </>
  );
}

export default App;