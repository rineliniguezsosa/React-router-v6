import { Routes,Route } from 'react-router-dom'
import { About } from './01-configuring routes/components/About';
import { Home } from './01-configuring routes/components/Home';
import { Navbar } from './02-Links/Navbar';
import { Orden } from './03-navigating programmatically/Orden';
import { NoMatch } from './04-No Match Route/NoMatch';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/orden" element={<Orden></Orden>}></Route>
    </Routes>
    </>
  );
}

export default App;
