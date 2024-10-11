import { useState } from "react"
import "./Contador.css"

const Contador = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial)

    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador +1)
        }
    }

    const restarContador = () => {
        if ( contador > inicial) {
            setContador (contador - 1)
        }
    }

  return (
    <>
        <div>
            <button className="BotonContador" onClick={restarContador}> - </button>
            <strong>{contador}</strong>
            <button className="BotonContador" onClick={sumarContador}> + </button>
        </div>

        <button className='botones1' onClick={()=>funcionAgregar(contador)}> Agregar al carrito</button>
    </>
  )
}

export default Contador