import { Routes,Route } from 'react-router-dom'
import { About } from './01-configuring routes/components/About';
import { Home } from './01-configuring routes/components/Home';
import { Navbar } from './02-Links/Navbar';
import { Orden } from './03-navigating programmatically/Orden';
import { NoMatch } from './04-No Match Route/NoMatch';
import { Caracteristicas } from './05-Nested routes/Caracteristicas';
import { Nuevo } from './05-Nested routes/Nuevo';
import { Products } from './05-Nested routes/Products';


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="about" element={<About></About>}></Route>
      <Route path="orden" element={<Orden></Orden>}></Route>
      <Route path="productos" element={<Products></Products>}>
        <Route index element={<Caracteristicas></Caracteristicas>}></Route>
        {/*prop index:ruta predeterminada,la ruta index se representa en el Outlet*/}
        <Route path="caracteristicas" element={<Caracteristicas></Caracteristicas>}></Route>
        <Route path="nuevo" element={<Nuevo></Nuevo>}></Route>
        {/* RUTAS ANIDADAS */}
      </Route>
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
    </Routes>
    </>
  );
}

export default App;
