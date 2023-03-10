import { Outlet,useSearchParams } from "react-router-dom"
/*
  useSearchParams: se utiliza para leer y modificar la cadena de consulta 
  en la URL de la ubicación actual.

   useSearchParams devuelve una matriz de dos valores: los parámetros 
   de búsqueda de la ubicación actual (searchParams) y una función que puede usarse
   para actualizarlos (setSearchParams)
*/
export const Usuarios = () => {
  return (
    <>
        <h2>Rinel</h2>
        <h2>Rolando</h2>
        <h2>Merly</h2>

        <Outlet></Outlet>

        <div>
          <button>Activar usuarios</button>
          <button>Resetear filtros</button>
        </div>
    </>
  )
}
