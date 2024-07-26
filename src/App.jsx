import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/detail/:id' element={<Detail />} />
    </Routes>
  );
}

export default App;