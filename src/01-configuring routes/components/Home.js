import { useNavigate } from "react-router-dom"


export const Home = () => {
  const navigate = useNavigate()
  return (
    <>
    <span>Home</span>
    <br></br>
    <button onClick={()=> navigate('/orden',{replace:true})} className="btn btn-primary">Ordenar</button>
    </>
  )
}
