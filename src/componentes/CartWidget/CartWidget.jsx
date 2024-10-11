import React from 'react'
import "./CartWidget.css"
import { useContext } from 'react'
import { CarritoContext } from '../../context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  const {cantidadTotal} = useContext(CarritoContext)
  return (
    <div className='CartWidget'>
    <Link to="/cart">
      <img id='CartWidget' src="../Imagenes/Carrito.png"></img>
      </Link>
      {
          cantidadTotal > 0 && <p id='CantidadCarrito'>{cantidadTotal}</p>
        }
    </div>
  )
}

export default CartWidget