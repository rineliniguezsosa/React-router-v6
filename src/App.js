import { Routes,Route } from 'react-router-dom'
import { About } from './01-configuring routes/components/About';
import { Home } from './01-configuring routes/components/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
    </Routes>
  );
}

export default App;
