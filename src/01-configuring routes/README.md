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

