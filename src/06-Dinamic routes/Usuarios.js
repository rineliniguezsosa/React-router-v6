import { Outlet } from "react-router-dom"

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
