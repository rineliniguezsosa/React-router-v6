import { useNavigate } from "react-router-dom"

export const Orden = () => {
  return (
    <>
    <span>Orden realizada</span>
    <br></br>
    <button onClick={()=> navigate('/',{replace:true})} className="btn btn-primary">regresar</button>
    </>
  )
}
