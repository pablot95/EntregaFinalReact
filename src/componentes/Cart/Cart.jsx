import { useContext } from "react"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"


const Cart = () => {
 const {carrito, total, cantidadTotal, vaciarCarrito} = useContext(CarritoContext)

 if (cantidadTotal === 0) {
    return (
        <div id="CarritoVacio">
            <h2>Su carrito esta vacio</h2>
            <Link to="/"><button className="botones1">Ir al inicio</button></Link>
        </div>

    )
 }

  return (
    <div>
        <div className="CarritoItems">
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto}/>)
        }
        </div>
        <div className="CarritoTotal">
        <h3>Precio total: ${total}</h3>
        <h3>Cantidad total de productos: {cantidadTotal}</h3>
        <button className="botones1" onClick={()=> vaciarCarrito()}> Vaciar Carrito </button>
        <Link to="/checkout"><button id="boton">Finalizar Compra</button></Link>
        </div>
    </div>
  )
}

export default Cart