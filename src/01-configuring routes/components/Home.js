import { useNavigate } from "react-router-dom"


export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <span>Home</span>
    <button className="btn btn-primary">Ordenar</button>
    </>
  )
}
