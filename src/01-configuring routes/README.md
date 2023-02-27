# Configurando las rutas

#### como configuracion inicial vamos a decirle al navegador que utilice react-router, esto es posible mediante el componente `<BrowserRouter/>`
<br>

#### regresamos al **index.js**

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom' //1) importamos BrowserRouter
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> //2) configuramos el BrowserRouter
    <App />
  </BrowserRouter>
);
```
#### regresamos al **App.js** para configurar las **rutas**

```js
import { Routes,Route } from 'react-router-dom' //1) importamos Routes y Route
import { About } from './01-configuring routes/components/About';
import { Home } from './01-configuring routes/components/Home';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route> //2)definimos las rutas
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
  );
}

export default App;

```
> **Route** recibe los parametros 
 **path="/home"** como la ruta en el navegador y **element=`{<Home/>}`** como el elemento o componente renderizar
