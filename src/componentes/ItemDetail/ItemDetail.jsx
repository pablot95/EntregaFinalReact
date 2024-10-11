import React from 'react'
import "./ItemDetail.css"
import Contador from '../Contador/Contador'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react'
import { toast } from 'react-toastify'



const ItemDetail = ({ id, nombre, precio, imagen, descripcion, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const {agregarAlCarrito} = useContext(CarritoContext)


  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);

    const item = {id, nombre, precio}
    agregarAlCarrito (item, cantidad)
    toast.success("Su compra fue enviada al carrito",{autoClose:2500, theme: "dark", position: "top-right"})
  }



  return (
    <div className='contenedorItem'>
      <div>
        <img src={imagen} />
      </div>
      <div id='texto'>
        <h2>{nombre} </h2>
        <p id='descripcion'>{descripcion}</p>
        <p id='precio'>Precio por unidad : ${precio} </p>
        <p>Disponibles: {stock}</p>

        {
          

          agregarCantidad > 0 ? (<div><Link to="/cart"> <button id='boton'>Ir al carrito</button></Link><Link to="/">
            <button className='botones1'>Continuar comprando</button>
            </Link></div>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
        }
        <br />
        </div>
    </div>
  )
}

export default ItemDetail