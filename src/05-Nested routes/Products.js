import { Link,Outlet } from 'react-router-dom'

export const Products = () => {
  return (
    <>
        <div className="container">
            <input type="text" placeholder='buscar' className='form-control'></input>
        </div>
        <nav>
            <Link to="caracteristicas">Caracteristicas</Link>

            <Link style={{marginLeft:'20px'}} to="nuevo">nuevo</Link>
        </nav>
        <Outlet></Outlet>
        {/* <Outlet/> representara las rutas secundarias ó anidadas */}
    </>
  )
}
