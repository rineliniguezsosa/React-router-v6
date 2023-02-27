import { Routes,Route } from 'react-router-dom'
import { About } from './01-configuring routes/components/About';
import { Home } from './01-configuring routes/components/Home';
import { Navbar } from './02-Links/Navbar';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;
