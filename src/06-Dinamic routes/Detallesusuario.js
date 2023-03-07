import {useParams} from 'react-router-dom'

export const Detallesusuario = () => {
  const {userId} = useParams()
 
  return (
    <div>Detalles acerca del usuario {userId}</div>
  )
}
