import { useNavigate } from "react-router-dom"

export const Orden = () => {
  const navigate = useNavigate()
  return (
    <>
    <span>Orden realizada</span>
    <br></br>
    <button onClick={()=> navigate('/',{replace:true})} className="btn btn-primary">regresar</button>
    </>
  )
}
