import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <>
        <div className="container">
            <input type="text" placeholder='buscar' className='form-control'></input>
        </div>
        <nav>
            <Link to="/caracteristicas">Caracteristicas</Link>

            <Link to="/nuevo">nuevo</Link>
        </nav>
    </>
  )
}
